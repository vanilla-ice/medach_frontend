import {
  getLongreadPost,
  getMediaPost,
  getBlogPost,
  getNewsPost
} from '~/utils/requests'

export const state = () => ({
  article: {}
})

export const mutations = {
  setArticle(state, article) {
    state.article = article
  }
}

export const getters = {
  article: (store) => store.article
}

export const actions = {
  fetchArticle({commit}, {id, type}) {
    return getLongreadPost(id).then(data => {
      commit('setArticle', data)
    })
  }
}