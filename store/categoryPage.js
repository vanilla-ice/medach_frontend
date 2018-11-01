import {
  getBlogs,
  getNews,
  getLongreadArticles,
  getPostsByTag,
  getCasesArticles
} from '~/utils/requests'

const translatedCategories = {
  guides: 'руководства',
  translated: 'переводы'
}

export const state = () => ({
  articles: [],
  popularArticles: [],
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
  },

  setPopularArticles(state, articles) {
    state.popularArticles = [...articles.articles]
  }
}

export const getters = {
  articles: (store) => store.articles,
  popularArticles: (store) => store.popularArticles,
  nextPage: (store) => store.nextPage
}

export const actions = {
  fetchCategory({commit}, {perPage, category, isSortByPopular, page, query}) {
    switch(category) {

      case 'blogs':
        return getBlogs(page, perPage, isSortByPopular, query).then(data => {
          commit('setArticles', {
            articles: data.collection,
            nextPage: data.meta.nextPage
          })
        })

      case 'news':
        return getNews(page, perPage, isSortByPopular, query).then(data => {
          commit('setArticles', {
            articles: data.collection,
            nextPage: data.meta.nextPage
          })
        })

      case 'longread':
        return getLongreadArticles(page, perPage, isSortByPopular, query).then(data => {
          commit('setArticles', { 
            articles: data.collection,
            nextPage: data.meta.nextPage
          })
        })

      case 'cases':
        return getCasesArticles(page, perPage, isSortByPopular, query).then(data => {
          commit('setArticles', {
            articles: data.collection,
            nextPage: data.meta.nextPage
          })
        })


      default:
        return getPostsByTag(translatedCategories[category], page, perPage, isSortByPopular, query).then(data => {
          commit('setArticles', {
            articles: data.collection,
            nextPage: data.meta.nextPage 
          })
        })
    }
  },

  fetchPopularArticles({commit}, {category, query}) {
    console.log('fetch popular articles action', category)
    switch(category) {

      case 'blogs':
        return getBlogs(1, 3, true, query).then(data => {
          commit('setPopularArticles', {
            articles: data.collection,
          })
        })

      case 'news':
        return getNews(1, 3, true, query).then(data => {
          commit('setPopularArticles', { 
            articles: data.collection,
          })
        })

      case 'longread':
        return getLongreadArticles(1, 3, true, query).then(data => {
          console.log('fetch articles', data.collection)
          commit('setPopularArticles', { 
            articles: data.collection,
          })
        })

      case 'cases':
        return getCasesArticles(1, 3, true, query).then(data => {
          commit('setPopularArticles', { 
            articles: data.collection,
          })
        })
      

      default: 
        return getPostsByTag(translatedCategories[category], 1, 3, true, query).then(data => {
          commit('setPopularArticles', { 
            articles: data.collection,
          })
        })
    }
  },

  fetchPopularArticles({commit}, {category, query}) {
    switch(category) {

      case 'blogs':
        return getBlogs(1, 3, true, query).then(data => {
          commit('setPopularArticles', {
            articles: data.collection,
          })
        })

      case 'news':
        return getNews(1, 3, true, query).then(data => {
          commit('setPopularArticles', {
            articles: data.collection,
          })
        })

      case 'longread':
        return getLongreadArticles(1, 3, true, query).then(data => {
          commit('setPopularArticles', {
            articles: data.collection,
          })
        })

      case 'cases':
        return getCasesArticles(1, 3, true, query).then(data => {
          commit('setPopularArticles', {
            articles: data.collection,
          })
        })


      default:
        return getPostsByTag(translatedCategories[category], 1, 3, true, query).then(data => {
          commit('setPopularArticles', {
            articles: data.collection,
          })
        })
    }
  },

  fetchNextPage({commit, state}, {perPage, category, isSortByPopular, query}) {
    if (state.nextPage) {
      switch(category) {

        case 'blogs':
          return getBlogs(state.nextPage, perPage, isSortByPopular, query).then(data => {
            commit('updateArticles', {
              articles: data.collection,
              nextPage: data.meta.nextPage
            })
          })

        case 'news':
          return getNews(state.nextPage, perPage, isSortByPopular, query).then(data => {
            commit('updateArticles', {
              articles: data.collection,
              nextPage: data.meta.nextPage
            })
          })

        case 'longread':
          return getLongreadArticles(state.nextPage, perPage, isSortByPopular, query).then(data => {
            commit('updateArticles', {
              articles: data.collection,
              nextPage: data.meta.nextPage
            })
          })

        default:
          return getPostsByTag(translatedCategories[category], state.nextPage, perPage, isSortByPopular, query).then(data => {
            commit('updateArticles', {
              articles: data.collection,
              nextPage: data.meta.nextPage
            })
          })
      }
    }
  }
}
