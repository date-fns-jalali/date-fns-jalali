import { generateDateCommentText, isUTCDate } from './utils'

function addComments(ast, j) {
  return ast
    .find(j.NewExpression, node => {
      return node.callee.name === 'Date' && node.arguments.length > 1
    })
    .forEach(path => {
      const text = generateDateCommentText(path.value)
      if (text === null) {
        return
      }
      const comments = (path.node.comments = path.node.comments || [])
      const comment = j.commentBlock(` ${text} G2J`, true, false)
      comments.push(comment)
    })
}

function addUTCComment(ast, j) {
  ast
    .find(j.CallExpression, node => {
      return isUTCDate(node)
    })
    .forEach(path => {
      const text = generateDateCommentText(path.node)
      if (text === null) {
        return
      }
      const comments = (path.node.comments = path.node.comments || [])
      const comment = j.commentBlock(` ${text} G2J`, true, false)
      comments.push(comment)
    })
}

export default function transformer(file, api) {
  if (
    file.path.startsWith('src/_core/') ||
    file.path.includes('ISO') ||
    file.path.includes('RFC') ||
    !file.path.endsWith('test.js') ||
    file.path.startsWith('src/locale/')
  ) {
    console.log('ignore:', file.path)
    return
  }

  const j = api.jscodeshift
  let ast = j(file.source)

  const ctx = {}

  addComments(ast, j, ctx)
  addUTCComment(ast, j, ctx)

  return ast.toSource().replace(/G2J\*\/\s*/g, '*/ ')
}
