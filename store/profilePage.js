import {
  getUserProfile
} from '~/utils/requests'

export const state = () => ({
  articles: [],
  user: {},
  nextPage: null
})

export const mutations = {
  setArticles(state, {articles, nextPage}) {
    state.articles = articles
    state.nextPage = nextPage
  },

  setUser(state, data) {
    state.user = data
    console.log('state', state.user)
  },

  updateArticles(state, {articles, nextPage}) {
    state.articles = [...state.articles, ...articles]
    state.nextPage = nextPage
  }
}

export const getters = {
  articles: (store) => store.articles,
  nextPage: (store) => store.nextPage
}

export const actions = {
  fetchProfile({commit}, {page, perPage, query}) {
    return getUserProfile(page, perPage, query).then(data => {
      commit('setUser', data)
    })
  },

  fetchNextPage({commit, state}, {perPage, query}) {
    if (state.nextPage) {
      return getMedia(state.nextPage, perPage, query).then(data => {
        commit('updateArticles', { articles: data.collection, nextPage: data.meta.nextPage })
      })
    }
  }
}