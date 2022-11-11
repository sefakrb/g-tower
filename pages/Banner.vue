<template>
  <v-row class="centerize">
    <v-col class="centerize flex-column" cols="12" md="6">
      <v-card-title
        class="centerize font-weight-bold text-center"
        style="font-size: 2.5rem"
        >Supporting Good Power
      </v-card-title>
      <!-- <v-card-title
        class="centerize font-weight-bold pt-0"
        style="font-size: 2.5rem"
        ></v-card-title
      > -->
      <v-card-text
        class="mt-5 font-weight-medium centerize text-center"
        style="font-size: 1rem"
        >Solution Partner for your Renewable Energy Infra-Structure Projects.
        <br />
        an Independent Tower Solutions Company.</v-card-text
      >
      <v-btn
        small
        color="green"
        class="mt-5"
        @click="routeHome('about_us')"
        style="text-transform: unset !important; color: white"
        >Who We Are?</v-btn
      >
    </v-col>
    <v-col cols="12" md="6" class="centerize mt-10 ma-0 pa-0">
      <v-card
        max-height="50vh;"
        max-width="50vw;"
        class="d-flex justify-center align-center"
        flat
        rounded="xl"
      >
        <video
          style="max-height: 90%; max-width: 90%; border-radius: 3%"
          autoplay
          muted
          loop
        >
          <source
            :src="require('../static/banner-video.mp4')"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    routeHome(pageName) {
      this.$emit('routeHome', pageName)
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
