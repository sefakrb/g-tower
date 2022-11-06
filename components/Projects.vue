<template>
  <v-row class="mx-5 d-flex justify-center">
    <v-carousel hide-delimiters v-model="model" style="width: 60vw">
      <v-carousel-item v-for="(item, i) in items" :key="item">
        <v-card
          flat
          class="d-flex flex-column justify-center align-center"
          width="100%"
          height="100%"
          rounded="lg"
        >
          <v-img
            max-width="60%"
            contain
            :src="require('../static/' + item.image)"
          ></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      items: [
        {
          image: 'project1.png',
          title: 'Wataynikaneyap Power Project',
          text: 'G-Tower provided transmission line engineering services and prepared 30% preliminary Plan & Profile drawings for Phase-1 300km long 230kV S/C Tline in Ontarion.',
        },
        {
          image: 'project1.png',
          title: 'Wataynikaneyap Power Project',
          text: 'G-Tower provided transmission line engineering services and prepared 30% preliminary Plan & Profile drawings for Phase-1 300km long 230kV S/C Tline in Ontarion.',
        },
      ],
    }
  },
}
</script>

<style></style>
