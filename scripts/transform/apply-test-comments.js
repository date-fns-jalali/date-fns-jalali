import { generateDateCommentText, isUTCDate } from './utils'
const { toGregorian } = require('../../src/_jalali/index')

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

function setValue(j, node, args) {
  node.arguments[0] = j.template.expression([args[0] + ''])
  node.arguments[1].value = args[1]
  if (node.arguments[1].comments && node.arguments[1].comments[0]) {
    node.arguments[1].comments[0].value = ` ${months[args[1]]} `
  }
  if (node.arguments[2]) {
    node.arguments[2].value = args[2]
  }
}

function applyComments(ast, j) {
  return ast
    .find(j.NewExpression, node => {
      return node.callee.name === 'Date' && node.arguments.length > 1
    })
    .forEach(path => {
      const jText = generateDateCommentText(path.value)
      if (jText === null) {
        return
      }

      if (
        path.node.comments &&
        path.node.comments[path.node.comments.length - 1]
      ) {
        const text = path.node.comments[path.node.comments.length - 1].value

        if (jText === text.trim()) {
          return
        }
        const args = text
          .trim()
          .split('/')
          .map(n => +n)
        const g = toGregorian(...args)
        const gArgs = [g.gy, g.gm - 1, g.gd]
        setValue(j, path.node, gArgs)
      }
    })
}

function applyUTCComment(ast, j) {
  return ast
    .find(j.CallExpression, node => {
      return isUTCDate(node)
    })
    .forEach(path => {
      const jText = generateDateCommentText(path.value)
      if (jText === null) {
        return
      }

      if (
        path.node.comments &&
        path.node.comments[path.node.comments.length - 1]
      ) {
        const text = path.node.comments[path.node.comments.length - 1].value

        if (jText === text.trim()) {
          return
        }
        const args = text
          .trim()
          .split('/')
          .map(n => +n)
        const g = toGregorian(...args)
        const gArgs = [g.gy, g.gm - 1, g.gd]
        setValue(j, path.node, gArgs)
      }
    })
}

export default function transformer(file, api) {
  if (
    file.path.startsWith('src/_core/') ||
    file.path.includes('ISO') ||
    file.path.includes('RFC') ||
    !(file.path.endsWith('test.js') || file.path.endsWith('test.ts')) ||
    file.path.startsWith('src/locale/')
  ) {
    console.log('ignore:', file.path)
    return
  }

  const j = api.jscodeshift
  let ast = j(file.source)

  const ctx = {}

  applyComments(ast, j, ctx)
  applyUTCComment(ast, j, ctx)

  return ast.toSource().replace(/G2J\*\/\s*/g, '*/ ')
}
