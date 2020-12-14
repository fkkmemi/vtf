<template>
  <v-app>
    <v-main>
      <v-container class="justify-center align-center fill-height">
        <auth-sign/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthSign from '@/components/auth/sign.vue'

@Component({ components: { AuthSign } })
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
