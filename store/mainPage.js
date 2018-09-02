import {
  getMainPageConfig
} from '~/utils/requests'

export const state = () => ({
  slider: [],
  news: [],
  blogs: [],
  postsTop: [],
  postsBottom: [],
  promoted: []
})

export const mutations = {
  setSliderPosts(state, articles) {
    state.slider = articles
  },

  setNewsPosts(state, articles) {
    state.news = articles
  },

  setBlogsArticles(state, articles) {
    state.blogs = articles
  },

  setPinnedArticles(state, articles) {
    state.postsTop = articles.filter((article, index) => index < 2)
    state.postsBottom = articles.filter((article, index) => index > 1)
  },

  setPromotedArticles(state, articles) {
    state.promoted = articles
  }
}

export const getters = {
  slides: (store) => store.slider,
  news: (store) => store.news,
  blogs: (store) => store.blogs,
  topPosts: (store) => store.postsTop,
  postsBottom: (store) => store.postsBottom,
  promoted: (store) => store.promoted
}

export const actions = {
  fetchMainPageConfig({commit}) {
    return getMainPageConfig().then(data => {
      commit('setSliderPosts', data.slider)
      commit('setNewsPosts', data.news)
      commit('setBlogsArticles', data.blogs)
      commit('setPinnedArticles', data.pinned)
      commit('setPromotedArticles', data.promoted)
    })
  }
}