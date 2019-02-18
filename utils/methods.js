import _ from 'lodash'

export const sliceArticle = (content) => {

  const tagsForSplitting = ['</div>', '</p>', '<br>']
  const splittedContent = tagsForSplitting.map(tag => ({
    tag,
    content: content.split(tag),
  }))

  let result = (_.maxBy(splittedContent, el => {
    return el.content.length
  }))

  result.content = result.content.filter(e => String(e).trim())

  let slicedArticle = {
    'first': (result.content.slice(0, Math.floor(result.content.length / 2))).join(result.tag),
    'second': (result.content.slice(Math.floor(result.content.length / 2), result.content.length)).join(result.tag)
  }
  return slicedArticle
}
