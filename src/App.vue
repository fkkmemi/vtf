<template>
  <layout-normal v-if="isAuth" />
  <layout-auth v-else />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutNormal from '@/components/layout/nomal.vue'
import LayoutAuth from '@/components/layout/auth.vue'
import AuthStore from '@/store/auth'

@Component({
  components: {
    LayoutNormal, LayoutAuth
  }
})
export default class App extends Vue {
  get isAuth (): boolean {
    return !!AuthStore.firebaseUser
  }
}
</script>
<style lang="scss">
</style>
