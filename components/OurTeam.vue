<template>
  <v-row v-resize="onResize" class="d-flex justify-center">
    <v-col
      v-for="item in items"
      :key="item.image"
      class="ma-8 pa-0"
      :cols="cardSize"
    >
      <v-card
        height="100%"
        class="ma-4 d-flex flex-column justify-center align-center"
        color="#EFFFEF"
        rounded="lg"
      >
        <v-img
          max-width="90%"
          contain
          :src="require('../static/employee/' + item.image)"
        ></v-img>
        <v-card-title
          class="justify-center"
          style="font-weight: 600; font-size: 1.2rem"
          >{{ item.name }}</v-card-title
        >
        <div style="width: 100%" class="d-flex justify-end">
          <v-btn small text depressed
            >More<v-icon>mdi-arrow-right-thin</v-icon></v-btn
          >
        </div>
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
          image: 'gunes_demirbas.png',
          name: 'Günes Demirbas, PE',
          title: 'President',
        },
        {
          image: 'mahir_ergin.png',
          name: 'Mahir Ergin',
          title: 'Regional Manager',
        },
        {
          image: 'sabrina_ageca.png',
          name: 'Sabrina Ageca',
          title: 'Quality Manager',
        },
        {
          image: 'selma_hacirafioglu.png',
          name: 'Selma Hacıraifoglu',
          title: 'Commercial Manager',
        },
        {
          image: 'alper_yavuzer.png',
          name: 'Alper Yavuzer',
          title: 'Quality Engineer',
        },
        {
          image: 'ensar_duran.png',
          name: 'Ensar Duran',
          title: 'Project Engineer',
        },
        {
          image: 'nazife_nur_iscan.png',
          name: 'Nazife Nur Iscan',
          title: 'Project Engineer',
        },
        {
          image: 'didem_ergin.png',
          name: 'Didem Ergin, PE',
          title: 'Environmental Engineer',
        },
        {
          image: 'matt_rogers.png',
          name: 'Matt Rogers, PE',
          title: 'Consultant - Engineer',
        },
        {
          image: 'uncac_saritas.png',
          name: 'Uncac Sarıtaş',
          title: 'Engineer',
        },
        {
          image: 'giray_yilmaz.png',
          name: 'Giray Yılmaz',
          title: 'Engineer',
        },
        { image: 'akin_tekin.png', name: 'Akın Tekin', title: 'Engineer' },
      ],
      cardSize: false,
    }
  },

  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.cardSize = '10'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.cardSize = '4'
      } else {
        this.cardSize = '2'
      }
    },
  },
}
</script>

<style></style>
