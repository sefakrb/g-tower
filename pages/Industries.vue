<template>
  <v-row class="mx-5 d-flex justify-center" v-resize="onResize">
    <v-col cols="12">
      <div class="d-flex">
        <v-card-title style="font-weight: bold; font-size: 2rem" class="ma-5"
          >Industries</v-card-title
        ><v-img
          contain
          max-width="20px"
          :src="require('../static/header_dot.png')"
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
        class="ma-4 d-flex flex-column justify-center align-center"
        flat
        rounded="lg"
      >
        <v-img max-width="100%" contain :src="item.image"></v-img>
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
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_3.png',
          text: 'Transmission',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_8.png',
          text: 'Distrubition',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_9.png',
          text: 'Substation',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_1.png',
          text: 'Utility Scale Wind',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_2.png',
          text: 'Small Wind',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_4.png',
          text: 'Offshore Wind',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_7.png',
          text: 'Solar',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_5.png',
          text: 'Telecom',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/10/Vectors_reduced_6.png',
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
