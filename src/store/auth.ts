import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from './index'
import firebase from '@/plugins/firebase'

@Module({ store, name: 'auth', namespaced: true, dynamic: true })
class AuthStore extends VuexModule {
  firebaseUser: firebase.User | null = null

  get isAuth (): boolean {
    return !!this.firebaseUser
  }

  @Mutation
  setFirebaseUser (user: firebase.User | null) {
    this.firebaseUser = user
  }
}

export default getModule(AuthStore)
