import Vue from 'vue'
import Vuex from 'vuex'
import { mergeArray } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    codes: []
  },
  mutations: {
    setCodes (state, codes) {
      state.codes = mergeArray(state.codes, codes)
    },

    removeCode (state, code) {
      const matchedIndex = state.codes.findIndex((c: any) => c.code === code.code)

      state.codes.splice(matchedIndex, 1)
    },

    clearAll (state) {
      state.codes = []
    }
  },
  actions: {

  }
})
