import {
  getBlogsInOrder,
  getTranslatedArticles,
  getNews
} from '~/utils/requests'

export const state = () => ({
  articles: [],
  popularAuthors: [],
  nextPage: null
})

export const mutations = {
  setArticles(state, {articles, nextPage}) {
    state.nextPage = nextPage
    state.articles = articles
  },

  updateArticles(state, {articles, nextPage}) {
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
      commit('setArticles', {articles: data.collection, nextPage: data.meta.next_page})
    })
  },

  fetchTranslatedInOrder({commit}, {perPage}) {
    return getTranslatedArticles(1, perPage).then(data => {
      commit('setArticles', {articles: data.collection, nextPage: data.meta.next_page})
    })
  },

  fetchNews({commit}, {perPage}) {
    return getNews(1, perPage).then(data => {
      console.log('data', data)
      commit('setArticles', {articles: data.collection, nextPage: data.meta.next_page})
    })
  },

  fetchNextPage({commit, state}, {perPage, category}) {
    if (state.nextPage) {
      switch(category) {
        case 'blogs':
          return getBlogsInOrder(state.nextPage, perPage).then(data => {
            commit('updateArticles', {articles: data.collection, nextPage: data.meta.next_page})
          })
        case 'news':
          return getNews(state.nextPage, perPage).then(data => {
            commit('updateArticles', {articles: data.collection, nextPage: data.meta.next_page})
          })
        default: 
          console.log('fetch next page default')
          break;
      }
      
    }
  }
}