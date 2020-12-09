<template>
  <v-app>
    <v-main>
      <v-container class="justify-center align-center fill-height">
        <v-card>
          <v-card-actions>
            <v-btn @click="test">test</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LayoutAuth extends Vue {
  async test () {
    const ref = this.$firebase.firestore().collection('test').doc('abc')
    await ref.set({ a: 1 })
    const sn = await ref.get()
    console.log(sn.data())
  }
}
</script>

<style scoped>

</style>
