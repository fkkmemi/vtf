import userCollection, { User } from './models/users'

const test = async () => {
  const ref = userCollection.doc('a')
  const user = new User('name ok')
  await ref.set(user)
  const doc = await ref.get()
  console.log(doc.data())
}

test()

console.log('functions start')
