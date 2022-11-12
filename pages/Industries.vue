<template>
  <v-row class="ma-5 centerize" v-resize="onResize">
    <v-col cols="12">
      <div class="d-flex">
        <v-card-title class="mainTitle">Industries</v-card-title
        ><v-img
          contain
          max-width="20px"
          :src="require('../static/header-dot.png')"
        ></v-img>
      </div>
    </v-col>
    <v-col
      v-for="item in items"
      :key="item.image"
      class="ma-8 pa-0"
      :cols="cardSize"
    >
      <v-card
        height="100%"
        class="ma-4 centerize flex-column"
        flat
        rounded="lg"
      >
        <v-img
          max-width="100%"
          contain
          :src="require('../static/industries/' + item.image)"
        ></v-img>
        <v-card-title
          class="justify-center"
          style="font-weight: 600; font-size: 1.2rem"
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
          text: 'Distrubition',
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
        this.cardSize = '10'
      } else if (window.innerWidth > 600 && window.innerWidth < 1000) {
        this.cardSize = '4'
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
</style>
