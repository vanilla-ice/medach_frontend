import {
  getRelatedArticles
} from '~/utils/requests'

export const state = () => ({
  articles: []
})

export const mutations = {
  setRelatedArticles(state, articles) {
    state.articles = articles
  }
}

export const getters = {
  articles: (store) => store.articles
}

export const actions = {
  fetchRelatedArticles({commit}, id) {
    console.log('id')
    return getRelatedArticles(id).then(data => {
      commit('setRelatedArticles', data)
    })
  }
}
