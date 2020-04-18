import {
  getVacancies,
  getVacancy
} from '~/utils/requests'

export const state = () => ({
  vacancies: [],
  nextPage: null,
  vacancy: {}
})

export const mutations = {
  setVacancies(state, {vacancies, nextPage}) {
    state.vacancies = vacancies
    state.nextPage = nextPage
  },

  updateVacancies(state, {vacancies, nextPage}) {
    state.vacancies = [...state.vacancies, ...vacancies]
    state.nextPage = nextPage
  },

  updateVacancy(state, {vacancy}) {
    state.vacancy = vacancy
  }
}

export const getters = {
  vacancies: (store) => store.vacancies,
  vacancy: (store) => store.vacancy,
  nextPage: (store) => store.nextPage
}


export const actions = {
  getVacancies({commit}, {page, perPage}) {
    return getVacancies(page, perPage).then(data => {
      if (data.meta) {
        commit('setVacancies', { vacancies: data.collection, nextPage: data.meta.nextPage })
      }
    })
  },

  fetchNextPage({commit, state}, {perPage}) {
    if (state.nextPage) {
      return getVacancies(state.nextPage, perPage)
        .then(data => {
          commit('updateVacancies', { vacancies: data.collection, nextPage: data.meta.nextPage })
        })
    }
  },

  getVacancy({commit}, {id}) {
    return getVacancy(id)
      .then(data => {
        commit('updateVacancy', { vacancy: data })
      })
  }
}
