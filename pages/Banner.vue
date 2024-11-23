<template>
  <v-row v-resize="onResize" class="centerize">
    <v-col class="centerize flex-column" cols="12" md="5">
      <h1
        :style="
          width < 420
            ? { 'font-size': '2.2rem' }
            : {
                'font-size': '2.2rem',
                'font-weight': '700',
                'text-align': 'center',
                'font-size': '2.5rem',
                'line-height': '2rem',
              }
        "
      >
        {{ $t('banner.title') }}
      </h1>
      <v-card-text class="pb-0">
        {{ $t('banner.subtitle1') }}<br />
        {{ $t('banner.subtitle2') }}
      </v-card-text>
      <v-btn
        color="#43D000"
        class="mt-6"
        @click="routeHome('about_us')"
        style="text-transform: unset !important; color: white"
      >{{ $t('banner.whoWeAreButton') }}</v-btn>
      <v-card-text class="pt-0">
        {{ $t('banner.companyDescription') }}
      </v-card-text>
    </v-col>

    <v-col cols="12" md="7" class="centerize mt-10">
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
            :src="$t('banner.videoUrl')"
            type="video/mp4"
          />
          {{ $t('banner.browserNotSupported') }}
        </video>
      </v-card>
    </v-col>
    <v-col class="centerize">
      <v-img 
        :src="$t('banner.certificateImage')" 
        :alt="$t('banner.certificateAlt')" 
        max-width="300" 
        max-heigth="300"
      />
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
  font-size: 2.5rem;
}
.videoStyle {
  max-height: 90%;
  max-width: 90%;
  border-radius: 3% !important;
  margin-top: 4rem;
}
</style>
