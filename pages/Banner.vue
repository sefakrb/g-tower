<template>
  <v-row v-resize="onResize" class="centerize">
    <v-col class="centerize flex-column" cols="12" md="6">
      <v-card-title :style="width < 420 ? { 'font-size': '2.2rem' } : ''"
        >Supporting Good Power</v-card-title
      >

      <v-card-text class="pb-0"
        >Solution Partner for your Renewable Energy Infra-Structure Projects
      </v-card-text>
      <v-btn
        color="green"
        class="mt-6"
        @click="routeHome('about_us')"
        style="text-transform: unset !important; color: white"
        >Who We Are?</v-btn
      >
      <v-card-text class="pt-0">
        Independent Tower Solutions Company</v-card-text
      >
    </v-col>

    <v-col cols="12" md="6" class="centerize mt-10">
      <v-card
        max-height="50vh;"
        max-width="50vw;"
        class="centerize"
        flat
        rounded="xl"
        color="transparent"
      >
        <video class="videoStyle" autoplay playsinline muted loop>
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
    return {
      width: window.innerWidth,
    }
  },
  methods: {
    routeHome(pageName) {
      this.$emit('routeHome', pageName)
    },
    onResize() {
      this.width = window.innerWidth
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
.v-card__text {
  font-weight: 400;
  text-align: center;
  margin-top: 30px;
  font-size: 1.4rem;
}

.v-card__title {
  font-weight: 700;
  text-align: center;
  font-size: 2.7rem;
}

.videoStyle {
  max-height: 90%;
  max-width: 90%;
  border-radius: 3% !important;
}
</style>
