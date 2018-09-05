import {
  getBlogs,
  getNews,
  getTranslatedArticles
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
  fetchCategory({commit}, {perPage, category, isSortByPopular, page, query}) {
    switch(category) {
      case 'blogs':
        return getBlogs(page, perPage, isSortByPopular, query).then(data => {
          commit('setArticles', { articles: data.collection, nextPage: data.meta.next_page })
        })
      case 'news':
        return getNews(page, perPage, isSortByPopular, query).then(data => {
          commit('setArticles', { articles: data.collection, nextPage: data.meta.next_page })
        })
      case 'translated':
        return getTranslatedArticles(page, perPage, isSortByPopular, query).then(data => {
          commit('setArticles', { articles: data.collection, nextPage: data.meta.next_page })
        })
      default: 
        console.log('fetch next page default')
        break;
    }
  },

  fetchNextPage({commit, state}, {perPage, category, isSortByPopular, query}) {
    if (state.nextPage) {
      switch(category) {
        case 'blogs':
          return getBlogs(state.nextPage, perPage, isSortByPopular, query).then(data => {
            commit('updateArticles', {articles: data.collection, nextPage: data.meta.next_page})
          })
        case 'news':
          return getNews(state.nextPage, perPage, isSortByPopular, query).then(data => {
            commit('updateArticles', {articles: data.collection, nextPage: data.meta.next_page})
          })
        case 'translated':
          return getTranslatedArticles(state.nextPage, perPage, isSortByPopular, query).then(data => {
            commit('setArticles', { articles: data.collection, nextPage: data.meta.next_page })
          })
        default: 
          console.log('fetch next page default')
          break;
      }
    }
  }
}