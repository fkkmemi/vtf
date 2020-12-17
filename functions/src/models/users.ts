import { db } from '../plugins/firebase'
import firestore from '@google-cloud/firestore'

export class User {
  constructor (
    readonly name: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) { }
}

export const converter: firestore.FirestoreDataConverter<User> = {
  toFirestore: (model: User, setOptions?: firestore.SetOptions) => {
    if (setOptions?.merge) {
      return Object.assign(model, { updatedAt: firestore.FieldValue.serverTimestamp() })
    }
    return {
      name: model.name,
      createdAt: model.createdAt || firestore.FieldValue.serverTimestamp(),
      updatedAt: model.updatedAt || firestore.FieldValue.serverTimestamp()
    }
  },
  fromFirestore: (snapshot: firestore.QueryDocumentSnapshot) => {
    const data = snapshot.data()
    return new User(
      data.name,
      data.createdAt.toDate(),
      data.updatedAt.toDate()
    )
  }
}

export default db.collection('users').withConverter(converter)
