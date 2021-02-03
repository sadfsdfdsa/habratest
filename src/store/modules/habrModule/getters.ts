import { Getters } from 'vuex-smart-module'
import HabrState from './state'

export default class HabrGetters extends Getters<HabrState> {
  /**
   * Параметризированный greeting, не кэшируется Vuex
   * @param name 
   * @example module.getters.greeting("Habr!")
   */
  greeting(name: string): string {
    return this.state.value + ', ' + name
  }

  /**
   * Не параметризированный greeting, кэшируется Vuex
   * @example module.getters.greetingDefault
   */
  get greetingDefault(): string {
    return this.getters.greeting('Habr!')
  }
}
