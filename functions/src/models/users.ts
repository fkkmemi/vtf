import { db } from '../plugins/firebase'
import firestore from '@google-cloud/firestore'
import crypto from 'crypto'

export class User {
  constructor (
    readonly email: string,
    readonly providerData?: string[],
    readonly displayName?: string,
    readonly photoURL?: string,
    readonly actions?: string[], // admin, read, write, dev
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) { }
}

export const converter: firestore.FirestoreDataConverter<User> = {
  toFirestore: (model: User, setOptions?: firestore.SetOptions) => {
    if (setOptions?.merge) {
      return Object.assign(model, { updatedAt: firestore.FieldValue.serverTimestamp() })
    }
    const hash = crypto.createHash('md5').update(model.email).digest('hex')
    return {
      email: model.email,
      providerData: model.providerData || [],
      displayName: model.displayName || '',
      photoURL: model.photoURL || `https://www.gravatar.com/avatar/${hash}.jpg`,
      actions: model.actions || [],
      createdAt: model.createdAt || firestore.FieldValue.serverTimestamp(),
      updatedAt: model.updatedAt || firestore.FieldValue.serverTimestamp()
    }
  },
  fromFirestore: (snapshot: firestore.QueryDocumentSnapshot) => {
    const data = snapshot.data()

    let photoURL = data.photoURL || ''
    if (photoURL.includes('gravatar')) photoURL += '?d=identicon'
    return new User(
      data.email,
      data.providerData,
      data.displayName,
      photoURL,
      data.actions,
      data.createdAt.toDate(),
      data.updatedAt.toDate()
    )
  }
}

export default db.collection('users').withConverter(converter)
