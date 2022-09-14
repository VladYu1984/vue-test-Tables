import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    tables: []
  },
  actions: {
    GET_TABLES_FROM_API({commit}) {
      return axios('http://localhost:3001/tables', {
        method: 'GET'
      })
        .then((responce) => {
          commit('SET_TABLES_TO_VUEX', responce.data)
        })
    }
  },
  mutations: {
    SET_TABLES_TO_VUEX: (state, tables) => {
      state.tables = tables
    }
  },
  getters: {
    TABLES(state) {
      return state.tables;
    }
  },
})
