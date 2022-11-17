<template>
  <v-app id="home" dark>
    <AppBar></AppBar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '~/pages/AppBar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppBar,
  },
  methods: {},
}
</script>

<style>
html {
  overflow: auto;
  overflow-x: hidden;
}
.v-card__text,
.v-card__title {
  word-break: break-word;
}
.v-card__title {
}
</style>
