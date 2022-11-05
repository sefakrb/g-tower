<template>
  <v-app dark>
    <AppBar></AppBar>
    <v-main style="border: 2px solid darkblue">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>

<style>
html {
  overflow: auto;
  overflow-x: hidden;
}
</style>
