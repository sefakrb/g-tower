<template>
  <v-row class="ma-0 centerize" v-resize="onResize">
    <v-col class="d-flex" cols="12">
      <v-card-title class="mainTitle">{{ $t('industries.title') }}</v-card-title>
    </v-col>
    <v-col
      v-for="item in items"
      :key="item.image"
      class="ma-0 pa-0"
      :class="cardSize === '6' ? 'ma-0 pa-3' : 'ma-10'"
      :cols="cardSize"
    >
      <v-card
        height="100%"
        class="ma-0 centerize flex-column"
        flat
        rounded="lg"
      >
        <v-img
          max-width="100%"
          contain
          :src="'https://g-tower.com/industries/' + item.image"
          :alt="$t(`industries.${item.translationKey}`)"
        ></v-img>
        <v-card-title
          class="justify-center"
          :class="cardSize === '6' ? 'cardTitlePhone' : 'cardTitle'"
        >{{ $t(`industries.${item.translationKey}`) }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: 'transmission.png',
          translationKey: 'transmission'
        },
        {
          image: 'distrubition.png',
          translationKey: 'distribution'
        },
        {
          image: 'substation.png',
          translationKey: 'substation'
        },
        {
          image: 'utility_scale_wind.png',
          translationKey: 'onshoreWind'
        },
        {
          image: 'offshore_wind.png',
          translationKey: 'offshoreWind'
        },
        {
          image: 'solar.png',
          translationKey: 'solar'
        },
        {
          image: 'telecom.png',
          translationKey: 'telecom'
        },
        {
          image: 'lighting.png',
          translationKey: 'lighting'
        }
      ],
      cardSize: null,
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.cardSize = '6'
      } else if (window.innerWidth > 600 && window.innerWidth < 1000) {
        this.cardSize = '4'
      } else if (window.innerWidth > 1000 && window.innerWidth < 1200) {
        this.cardSize = '5'
      } else {
        this.cardSize = '2'
      }
    },
  },
  mounted() {
    this.onResize()
  }
}
</script>

<style scoped>
.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainTitle {
  font-weight: 700;
  font-size: 2rem;
  margin: 20px;
}

.cardTitle {
  font-weight: 600;
  font-size: 1.2rem;
}

.cardTitlePhone {
  font-weight: 600;
  font-size: 0.8rem;
}
</style>