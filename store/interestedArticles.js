import {
  getInterestedArticles
} from '~/utils/requests'

export const state = () => ({
  articles: []
})

export const mutations = {
  setInterestedArticles(state, articles) {
    state.articles = articles
  }
}

export const getters = {
  articles: (store) => store.articles
}

export const actions = {
  fetchInterestedArticles({commit}, id) {
    console.log('id')
    return getInterestedArticles(id).then(data => {
      commit('setInterestedArticles', data)
    })
  }
}
