const fs = require('fs')
const path = require('path')
const prettier = require('../prettier')

const { getParams, getType, getFPFnType } = require('./common')

const {
  addSeparator,
  formatBlock,
  formatTypeScriptFile,
} = require('./formatBlock')

/**
 * Return curried function interfaces for a specific FP function arity.
 * @param {Number} [arity=7]
 * @returns {String[arity]} an array of code blocks
 */
const getTypeScriptFPInterfaces = (arity = 7) =>
  [
    formatBlock`
      interface CurriedFn1<A, R> {
        (a: A): R
      }
    `,

    formatBlock`
      interface CurriedFn2<A, B, R> {
        (a: A): CurriedFn1<B, R>
        (a: A, b: B): R
      }
    `,

    formatBlock`
      interface CurriedFn3<A, B, C, R> {
        (a: A): CurriedFn2<B, C, R>
        (a: A, b: B): CurriedFn1<C, R>
        (a: A, b: B, c: C): R
      }
    `,

    formatBlock`
      interface CurriedFn4<A, B, C, D, R> {
        (a: A): CurriedFn3<B, C, D, R>
        (a: A, b: B): CurriedFn2<C, D, R>
        (a: A, b: B, c: C): CurriedFn1<D, R>
        (a: A, b: B, c: C, d: D): R
      }
    `,

    formatBlock`
      interface CurriedFn5<A, B, C, D, E, R> {
        (a: A): CurriedFn4<B, C, D, E, R>
        (a: A, b: B): CurriedFn3<C, D, E, R>
        (a: A, b: B, c: C): CurriedFn2<D, E, R>
        (a: A, b: B, c: C, d: D): CurriedFn1<E, R>
        (a: A, b: B, c: C, d: D, e: E): R
      }
    `,

    formatBlock`
      interface CurriedFn6<A, B, C, D, E, F, R> {
        (a: A): CurriedFn5<B, C, D, E, F, R>
        (a: A, b: B): CurriedFn4<C, D, E, F, R>
        (a: A, b: B, c: C): CurriedFn3<D, E, F, R>
        (a: A, b: B, c: C, d: D): CurriedFn2<E, F, R>
        (a: A, b: B, c: C, d: D, e: E): CurriedFn1<F, R>
        (a: A, b: B, c: C, d: D, e: E, f: F): R
      }
    `,

    formatBlock`
      interface CurriedFn7<A, B, C, D, E, F, G, R> {
        (a: A): CurriedFn6<B, C, D, E, F, G, R>
        (a: A, b: B): CurriedFn5<C, D, E, F, G, R>
        (a: A, b: B, c: C): CurriedFn4<D, E, F, G, R>
        (a: A, b: B, c: C, d: D): CurriedFn3<E, F, G, R>
        (a: A, b: B, c: C, d: D, e: E): CurriedFn2<F, G, R>
        (a: A, b: B, c: C, d: D, e: E, f: F): CurriedFn1<G, R>
        (a: A, b: B, c: C, d: D, e: E, f: F, g: G): R
      }
    `,
  ].slice(0, arity)

function getTypeScriptTypeAlias(type) {
  const { title, properties, content } = type

  return formatBlock`
    export type ${title} = ${
    properties ? getParams(properties) : content.type.names.join(' | ')
  }
  `
}

function getTypeScriptDateFnsModuleDefinition(
  submodule,
  fns,
  constantsDefinitions
) {
  const moduleName = `date-fns-jalali${submodule}`

  const importTypes =
    submodule === ''
      ? ''
      : "import { Day, Duration, Interval, Locale } from 'date-fns-jalali'"

  const definition = formatBlock`
    declare module '${moduleName}' {
      ${importTypes}
      ${addSeparator(
        fns.map(getTypeScriptFnDefinition).concat(constantsDefinitions),
        '\n'
      )}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptDateFnsFPModuleDefinition(
  submodule,
  fns,
  constantsDefinitions
) {
  const moduleName = `date-fns-jalali${submodule}/fp`

  const fnDefinitions = fns.map(getTypeScriptFPFnDefinition)

  const definition = formatBlock`
    declare module '${moduleName}' {
      import { CurriedFn1, CurriedFn2, CurriedFn3, CurriedFn4, CurriedFn7, Day, Duration, Interval, Locale } from 'date-fns-jalali'
      ${addSeparator(fnDefinitions.concat(constantsDefinitions), '\n')}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptFnModuleDefinition(submodule, fnSuffix, fn) {
  const name = fn.content.name
  const moduleName = `date-fns-jalali${submodule}/${name}${fnSuffix}`

  const definition = formatBlock`
    declare module '${moduleName}' {
      import {${name}} from 'date-fns-jalali${submodule}'
      export default ${name}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptFnDefinition(fn) {
  const { title, args, content } = fn

  const params = getParams(args, { leftBorder: '(', rightBorder: ')' })
  const returns = getType(content.returns[0].type.names)

  return formatBlock`
    function ${title} ${params}: ${returns}
    namespace ${title} {}
  `
}

function getTypeScriptFPFnDefinition(fn) {
  const { title, args, content } = fn

  const type = getFPFnType(args, content.returns[0].type.names)

  return formatBlock`
    const ${title}: ${type}
    namespace ${title} {}
  `
}

function getTypeScriptFPFnModuleDefinition(submodule, fnSuffix, isDefault, fn) {
  const { title } = fn
  const moduleName = `date-fns-jalali${submodule}/fp/${title}${fnSuffix}`

  const definition = formatBlock`
    declare module '${moduleName}' {
      import {${title}} from 'date-fns-jalali${submodule}/fp'
      export default ${title}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptLocaleIndexModuleDefinition(submodule, locales) {
  const moduleName = `date-fns-jalali${submodule}/locale`

  const localesDefinitions = locales.map(getTypeScriptLocaleDefinition)

  const definition = formatBlock`
    declare module '${moduleName}' {
      import { Locale } from 'date-fns-jalali'
      ${addSeparator(localesDefinitions, '\n')}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptLocaleDefinition(locale) {
  const { name } = locale

  return formatBlock`
    const ${name}: Locale
    namespace ${name} {}
  `
}

function getTypeScriptLocaleModuleDefinition(
  submodule,
  localeSuffix,
  isDefault,
  locale
) {
  const code = locale.code
  const moduleName = `date-fns-jalali${submodule}/locale/${code}${localeSuffix}`
  const { name } = locale

  const definition = formatBlock`
    declare module '${moduleName}' {
      import {${name}} from 'date-fns-jalali${submodule}/locale'
      export default ${name}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptInterfaceDefinition(fn) {
  const { title, args, content } = fn
  const params = getParams(args, { leftBorder: '(', rightBorder: ')' })
  const returns = getType(content.returns[0].type.names)

  return `${title}${params}: ${returns}`
}

function generateTypescriptFnTyping(fn) {
  const typingFile = formatTypeScriptFile`
    import {${fn.title}} from 'date-fns-jalali'
    export default ${fn.title}
  `
  writeFile(`./src/${fn.title}/index.d.ts`, typingFile)
}

function generateTypescriptFPFnTyping(fn) {
  const typingFile = formatTypeScriptFile`
    import {${fn.title}} from 'date-fns-jalali/fp'
    export default ${fn.title}
  `
  writeFile(`./src/fp/${fn.title}/index.d.ts`, typingFile)
}

function generateTypescriptLocaleTyping(locale) {
  const typingFile = formatTypeScriptFile`
    import {${locale.name}} from 'date-fns-jalali/locale'
    export default ${locale.name}
  `
  writeFile(`src/locale/${locale.code}/index.d.ts`, typingFile)
}

function generateTypeScriptTypings(fns, aliases, locales, constants) {
  const nonFPFns = fns.filter((fn) => !fn.isFPFn)
  const fpFns = fns.filter((fn) => fn.isFPFn)
  const constantsDefinitions = constants.map(
    (c) => `const ${c.name}: ${c.type.names.join(' | ')}`
  )

  const moduleDefinitions = [
    getTypeScriptDateFnsModuleDefinition('', nonFPFns, constantsDefinitions),
  ]
    .concat(nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '')))
    .concat(
      nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '/index'))
    )
    .concat(
      nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '/index.js'))
    )
    .map((module) => module.definition)

  const fpModuleDefinitions = [
    getTypeScriptDateFnsFPModuleDefinition('', fpFns, constantsDefinitions),
  ]
    .concat(
      fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '', '', false))
    )
    .concat(
      fpFns.map(
        getTypeScriptFPFnModuleDefinition.bind(null, '', '/index', false)
      )
    )
    .concat(
      fpFns.map(
        getTypeScriptFPFnModuleDefinition.bind(null, '', '/index.js', false)
      )
    )
    .map((module) => module.definition)

  const esmModuleDefinitions = [
    getTypeScriptDateFnsModuleDefinition(
      '/esm',
      nonFPFns,
      constantsDefinitions
    ),
  ]
    .concat(
      nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', ''))
    )
    .concat(
      nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', '/index'))
    )
    .concat(
      nonFPFns.map(
        getTypeScriptFnModuleDefinition.bind(null, '/esm', '/index.js')
      )
    )
    .map((module) => module.definition)

  const esmFPModuleDefinitions = [
    getTypeScriptDateFnsFPModuleDefinition('/esm', fpFns, constantsDefinitions),
  ]
    .concat(
      fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '', true))
    )
    .concat(
      fpFns.map(
        getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '/index', true)
      )
    )
    .concat(
      fpFns.map(
        getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '/index.js', true)
      )
    )
    .map((module) => module.definition)

  const aliasDefinitions = aliases.map(getTypeScriptTypeAlias)

  const localeModuleDefinitions = [
    getTypeScriptLocaleIndexModuleDefinition('', locales),
  ]
    .concat(
      locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '', '', false))
    )
    .concat(
      locales.map(
        getTypeScriptLocaleModuleDefinition.bind(null, '', '/index', false)
      )
    )
    .concat(
      locales.map(
        getTypeScriptLocaleModuleDefinition.bind(null, '', '/index.js', false)
      )
    )
    .map((module) => module.definition)

  const esmLocaleModuleDefinitions = [
    getTypeScriptLocaleIndexModuleDefinition('/esm', locales),
  ]
    .concat(
      locales.map(
        getTypeScriptLocaleModuleDefinition.bind(null, '/esm', '', true)
      )
    )
    .concat(
      locales.map(
        getTypeScriptLocaleModuleDefinition.bind(null, '/esm', '/index', true)
      )
    )
    .concat(
      locales.map(
        getTypeScriptLocaleModuleDefinition.bind(
          null,
          '/esm',
          '/index.js',
          true
        )
      )
    )
    .map((module) => module.definition)

  const globalInterfaceDefinition = formatBlock`
    declare module 'date-fns-jalali' {
      interface dateFns {
        ${addSeparator(
          nonFPFns
            .map(getTypeScriptInterfaceDefinition)
            .concat(
              constants.map((c) => `${c.name}: ${c.type.names.join(' | ')}`)
            ),
          '\n'
        )}
      }
    }
  `

  const typingFile = formatTypeScriptFile`
    // FP Interfaces
    declare module 'date-fns-jalali' {
      ${addSeparator(getTypeScriptFPInterfaces(), '\n')}
    }

    declare module 'date-fns-jalali' {
      ${addSeparator(aliasDefinitions, '\n')}
    }

    // Regular Functions

    ${addSeparator(moduleDefinitions, '\n')}

    // FP Functions

    ${addSeparator(fpModuleDefinitions, '\n')}

    // ECMAScript Module Functions

    ${addSeparator(esmModuleDefinitions, '\n')}

    // ECMAScript Module FP Functions

    ${addSeparator(esmFPModuleDefinitions, '\n')}

    // Regular Locales

    ${addSeparator(localeModuleDefinitions, '\n')}

    // ECMAScript Module Locales

    ${addSeparator(esmLocaleModuleDefinitions, '\n')}

    // dateFns Global Interface

    ${globalInterfaceDefinition}
  `

  writeFile('typings.d.ts', typingFile)

  fns.forEach((fn) => {
    if (fn.isFPFn) {
      generateTypescriptFPFnTyping(fn)
    } else {
      generateTypescriptFnTyping(fn)
    }
  })

  locales.forEach((locale) => {
    generateTypescriptLocaleTyping(locale)
  })
}

function writeFile(relativePath, content) {
  return fs.writeFileSync(
    path.resolve(process.cwd(), relativePath),
    prettier(content, 'typescript')
  )
}

module.exports = {
  generateTypeScriptTypings,
}
