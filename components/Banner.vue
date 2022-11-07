<template>
  <v-row class="centerize">
    <v-col class="centerize flex-column" cols="12" md="6">
      <v-card-title class="centerize font-weight-bold" style="font-size: 2.5rem"
        >Stop Climate Change</v-card-title
      >
      <v-card-text class="centerize" style="font-size: 1.2rem"
        >Cooperate with us and help the nature.</v-card-text
      >
      <v-btn
        small
        @click="routePage('about_us')"
        color="green"
        style="text-transform: unset !important; color: white"
        >Who We Are?</v-btn
      >
    </v-col>
    <v-col cols="12" md="6" class="centerize ma-0 pa-0">
      <!-- <video width="400" controls autoplay>
        <source src="../static/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video> -->
      <v-img
        max-height="50vh"
        contain
        class="ma-0"
        :src="require('../static/banner-image.png')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    routePage(pageName) {
      this.$emit('routePage', pageName)
    },
  },
}
</script>

<style scoped>
.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
