import * as functions from 'firebase-functions'
import userCollection, { User } from './models/users'

export const userCreated = functions.auth.user().onCreate(user => {
  const { uid, email, providerData, displayName, photoURL } = user
  const ref = userCollection.doc(uid)
  if (!email) throw Error('email none')
  return ref.set(new User(
    email, providerData.map(p => p.providerId), displayName, photoURL
  ))
})

export const userDeleted = functions.auth.user().onDelete(user => {
  const ref = userCollection.doc(user.uid)
  return ref.delete()
})

console.log('functions start')
