<template>
  <v-row class="ma-0 centerize" v-resize="onResize">
    <v-col class="d-flex" cols="12">
      <v-card-title class="mainTitle">Industries</v-card-title>
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
        ></v-img>
        <v-card-title
          class="justify-center"
          style=""
          :class="cardSize === '6' ? 'cardTitlePhone' : 'cardTitle'"
          >{{ item.text }}</v-card-title
        >
      </v-card></v-col
    >
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: 'transmission.png',
          text: 'Transmission',
        },
        {
          image: 'distrubition.png',
          text: 'Distribution',
        },
        {
          image: 'substation.png',
          text: 'Substation',
        },
        {
          image: 'utility_scale_wind.png',
          text: 'Onshore Wind',
        },
        {
          image: 'offshore_wind.png',
          text: 'Offshore Wind',
        },
        {
          image: 'solar.png',
          text: 'Solar',
        },
        {
          image: 'telecom.png',
          text: 'Telecom',
        },
        {
          image: 'lighting.png',
          text: 'Lighting',
        },
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
