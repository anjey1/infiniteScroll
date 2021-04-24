import Vue from 'vue'
import Vuex from 'vuex'
import { beerInfo, beerAll } from "../service/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beerInfo: {},
    beersList: [],
  },
  mutations: {
    setBeersList:(state, payload) => (state.beersList = payload),
    setBeerInfo:(state, payload) => (state.beerInfo = payload)
  },
  actions: {
    async getBeersList({commit}) {
      try {
        const response = await beerAll()
        const list = response.data
        commit("setBeersList", list.concat(list.slice(0, 120)));
        console.log('all', list);
      } catch (error) {
        console.log(error.response);
      }
    },

    async getBeersDimension({ commit }, idBeer) {
      try {
        const response = await beerInfo(idBeer)
        console.log('response', response);
      } catch (error) {
        console.log(error.response);
      }
    }
  },

  getters: {
    gtrBeers(state) {
      return state.beersList
    }
  }
})
