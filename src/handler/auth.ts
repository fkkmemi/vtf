import { auth } from '@/plugins/firebase'

export default class AuthHandler {
  private static inst: AuthHandler
  constructor () {
    this.run()
  }

  public run () {
    auth.onAuthStateChanged(user => {
      if (user) console.log('new user')
      else console.log('user null')
      console.log(user)
    })
  }

  public static instance () {
    if (this.inst) return this.inst
    return new AuthHandler()
  }
}
