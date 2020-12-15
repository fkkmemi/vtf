<template>
  <v-card>
    <v-card-title>model test</v-card-title>
    <v-card-text>
      <v-text-field v-model="name" label="name"/>
      <v-textarea v-model="text" auto-grow/>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="read">read</v-btn>
      <v-btn @click="write">write</v-btn>
      <v-btn @click="update">update</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import userCollection, { User } from '@/models/users'

@Component
export default class ModelTest extends Vue {
  name = ''
  text = ''
  ref = userCollection

  async read () {
    const doc = await this.ref.doc('u1').get()
    this.text = JSON.stringify(doc.data(), null, 2)
  }

  async write () {
    // const user = { name: this.name, createdAt: new Date(), updatedAt: new Date() }
    const user = new User(this.name)
    await this.ref.doc('u1').set(user)
    await this.read()
  }

  async update () {
    const user = { name: this.name }
    await this.ref.doc('u1').set(user, { merge: true })
    await this.read()
  }
}
</script>

<style scoped>

</style>
