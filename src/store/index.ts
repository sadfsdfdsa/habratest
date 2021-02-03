import Vue from 'vue'
import Vuex from 'vuex'

import { Module, createStore } from 'vuex-smart-module'
import habr from './modules/habrModule'

Vue.use(Vuex)

const root = new Module({
  modules: {
    habr,
  },
})

const store = createStore(root)

export default store

export const habrModule = habr.context(store)
