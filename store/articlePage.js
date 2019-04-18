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
  async fetchArticle({commit}, {id, type}) {
    const data = await getLongreadPost(id)
    commit('setArticle', data)
    return data
  }
}
