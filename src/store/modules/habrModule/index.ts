import { Module } from 'vuex-smart-module'
import getters from './getters'
import state from './state'

const habr = new Module({
  state: state,
  getters: getters,
})

export default habr