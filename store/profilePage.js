import {
  getUserProfile,
  getBloggersList
} from '~/utils/requests'

export const state = () => ({
  articles: [],
  user: {},
  nextPage: null,
  bloggers: [],
  bloggersNextPage: null
})

export const mutations = {
  setArticles(state, {articles, nextPage}) {
    state.articles = articles
    state.nextPage = nextPage
  },

  setUser(state, data) {
    state.user = data
  },

  setBloggers(state, data) {
    state.bloggers = [...data.collection]
    state.bloggersNextPage = data.meta.nextPage
  },

  updateBloggers(state, data) {
    state.bloggers = [...state.bloggers, ...data.collection]
    state.bloggersNextPage = data.meta.nextPage
  },

  updateArticles(state, {articles, nextPage}) {
    state.articles = [...state.articles, ...articles]
    state.nextPage = nextPage
  }
}

export const getters = {
  articles: (store) => store.articles,
  nextPage: (store) => store.nextPage,
  bloggersNextPage: (store) => store.bloggersNextPage,
  bloggers: (store) => store.bloggers,
  profile: (store) => store.user
}

export const actions = {
  fetchProfile({commit}, {id}) {
    return getUserProfile(id).then(data => {
      commit('setUser', data)
    })
  },

  fetchBloggers({commit}, {page, perPage}) {
    return getBloggersList(page, perPage).then(data => {
      commit('setBloggers', data)
    })
  },

  fetchNextBloggers({commit, state}, {perPage}) {
    if (state.bloggersNextPage) {
      return getBloggersList(state.bloggersNextPage, perPage).then(data => {
        commit('updatśBloggers', data)
      })
    }
  },

  fetchNextPage({commit, state}, {perPage, query}) {
    if (state.nextPage) {
      return getMedia(state.nextPage, perPage, query).then(data => {
        commit('updateArticles', { articles: data.collection, nextPage: data.meta.nextPage })
      })
    }
  }
}