import {
  getVacancies
} from '~/utils/requests'

export const state = () => ({
  vacancies: [],
  nextPage: null
})

export const mutations = {
  setVacancies(state, {vacancies, nextPage}) {
    state.vacancies = vacancies
    state.nextPage = nextPage
  },

  updateVacancies(state, {vacancies, nextPage}) {
    state.vacancies = [...state.vacancies, ...vacancies]
    state.nextPage = nextPage
  }
}

export const getters = {
  vacancies: (store) => store.vacancies,
  nextPage: (store) => store.nextPage
}


export const actions = {
  getVacancies({commit}, {page, perPage}) {
    return getVacancies(page, perPage).then(data => {
      commit('setVacancies', { vacancies: data.collection, nextPage: data.meta.nextPage })
    })
  },

  fetchNextPage({commit, state}, {perPage}) {
    if (state.nextPage) {
      return getVacancies(state.nextPage, perPage).then(data => {
        commit('updateVacancies', { vacancies: data.collection, nextPage: data.meta.nextPage })
      })
    }
  }
}
