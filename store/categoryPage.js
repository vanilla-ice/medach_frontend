import {
  getBlogsInOrder
} from '~/utils/requests'

export const state = () => ({
  articles: [],
  popularAuthors: []
})

export const mutations = {
  setBlogsArticles(state, articles) {
    state.articles = articles
  }
}

export const getters = {
  currentPage: (store) => store.currentPage,
  articles: (store) => store.articles,
  popularAuthors: (store) => store.popularAuthors
}

export const actions = {
  fetchBlogsInOrder({commit, state}, {page}) {
    return getBlogsInOrder(page).then(data => {
      commit('setBlogsArticles', data)
    })
  }
}