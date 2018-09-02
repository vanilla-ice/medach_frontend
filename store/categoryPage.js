import {
  getBlogsInOrder
} from '~/utils/requests'

export const state = () => ({
  articles: [],
  popularAuthors: [],
  nextPage: null
})

export const mutations = {
  setBlogsArticles(state, {articles, nextPage}) {
    state.nextPage = nextPage
    state.articles = articles
  },

  updateBlogsArticles(state, {articles, nextPage}) {
    state.nextPage = nextPage
    state.articles = [...state.articles, ...articles]
  }
}

export const getters = {
  articles: (store) => store.articles,
  popularAuthors: (store) => store.popularAuthors,
  nextPage: (store) => store.nextPage
}

export const actions = {
  fetchBlogsInOrder({commit}, {perPage}) {
    return getBlogsInOrder(1, perPage).then(data => {
      commit('setBlogsArticles', {articles: data.collection, nextPage: data.meta.next_page})
    })
  },

  fetchNextPage({commit, state}, {perPage}) {
    if (state.nextPage) {
      return getBlogsInOrder(state.nextPage, perPage).then(data => {
        commit('updateBlogsArticles', {articles: data.collection, nextPage: data.meta.next_page})
      })
    }
  }
}