<template>
  <v-row class="d-flex justify-center" v-resize="onResize">
    <template class="pa-0" v-for="(item, index) in items">
      <v-col class="ma-8 pa-0" :cols="cardSize">
        <v-card
          height="100%"
          class="ma-4 d-flex flex-column justify-center align-center"
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
    </template>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { image: 'transmission.png', text: 'Transmission' },
        { image: 'distrubition.png', text: 'Distrubition' },
        { image: 'substation.png', text: 'Substation' },
        { image: 'utility_scale_wind.png', text: 'Utility Scale Wind' },
        { image: 'small_wind.png', text: 'Small Wind' },
        { image: 'offshore_wind.png', text: 'Offshore Wind' },
        { image: 'solar.png', text: 'Solar' },
        { image: 'telecom.png', text: 'Telecom' },
        { image: 'lighting.png', text: 'Lighting' },
      ],
      cardSize: null,
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.cardSize = '10'
      } else if (window.innerWidth > 600 && window.innerWidth < '1000') {
        this.cardSize = '4'
      } else {
        this.cardSize = '2'
      }
    },
  },
}
</script>

<style></style>
