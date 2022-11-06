<template>
  <v-row v-resize="onResize" class="mx-5">
    <template class="pa-0" v-for="item in items">
      <v-col class="ma-0 pa-0" md="3" cols="12">
        <v-card
          class="ma-4 centerize flex-column"
          color="#F9FBFD"
          rounded="lg"
          :height="appBarSize ? '45vh' : '65vh'"
        >
          <v-img
            max-height="50px"
            contain
            :src="require('../static/' + item.image)"
          ></v-img>
          <v-card-title
            class="justify-center"
            style="font-weight: 600; font-size: 1.2rem"
            >{{ item.title }}</v-card-title
          >
          <div class="d-flex flex-column align-center">
            <li
              class="ml-5"
              style="font-weight: 450; font-size: 1rem"
              v-for="detail in item.details"
              :key="detail"
            >
              {{ detail }}
            </li>
          </div>
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
        {
          image: 'card1-4.png',
          title: 'ENGINEERING SERVICES',
          details: [
            'Transmission Line Design',
            'Lattice tower design',
            'Tubular pole design',
            'Foundation design',
            'Drafting $ detailing',
            'Cost estimates',
          ],
        },
        {
          image: 'card2.png',
          title: 'OVERSEAS FABRICATION INSPECTION SERVICES',
          details: [
            'Tower Testing Attendance',
            'Factory Audit',
            'Prototype Inspection',
            'Fabrication Inspection',
            'Pre-Shipment Inspection',
            'Factory Acceptance Test',
          ],
        },
        {
          image: 'card3.png',
          title: 'SOURCHING SERVICES',
          details: [
            'Lattice Tower Supply',
            'Tubular Pole Supply',
            'Tower And Pole Accessories Supply',
            'Composite Member Supply',
            'After Sales Services Design',
            'Project Supply Management',
          ],
        },
        {
          image: 'card1-4.png',
          title: 'CONSULTING SERVICES',
          details: [
            'Owner’s Engineer',
            'Investor’s Engineer',
            'Business Plans & Strategy',
            'Expert Witness',
            'Technical Advisory',
            'Project Management',
          ],
        },
      ],
      appBarSize: false,
    }
  },
  methods: {
    onResize() {
      console.log(window.innerWidth)
      window.innerWidth < 960
        ? (this.appBarSize = true)
        : (this.appBarSize = false)
    },
  },
}
</script>

<style scoped>
.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
