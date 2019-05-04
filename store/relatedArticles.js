import {
  getRelatedArticles
} from '~/utils/requests'

export const state = () => ({
  articles: []
})

export const mutations = {
  setRelatedArticles(state, articles) {
    console.log('ARTICLES', articles)
    state.articles = articles
  }
}

export const getters = {
  articles: (store) => store.articles
}

export const actions = {
  fetchRelatedArticles({commit}, id) {
    return getRelatedArticles(id).then(data => {
      commit('setRelatedArticles', data)
    })
  }
}
