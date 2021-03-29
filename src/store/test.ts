import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from './index'

@Module({ store, name: 'test', namespaced: true, dynamic: true })
class Counter2 extends VuexModule {
  count = 0

  @Mutation
  increment (delta: number) {
    this.count += delta
  }

  @Mutation
  decrement (delta: number) {
    this.count -= delta
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  incr () {
    return 5
  }

  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr () {
    return 5
  }
}

export default getModule(Counter2)
