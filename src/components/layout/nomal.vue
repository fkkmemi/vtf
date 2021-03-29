<template>
  <v-app>
    <v-main>
      <v-container>
        normal
        <v-btn @click="signOut">
          signOut
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { auth } from '@/plugins/firebase'
@Component
export default class LayoutNormal extends Vue {
  signOut (): void {
    auth.signOut()
  }
}
</script>

<style scoped>

</style>
