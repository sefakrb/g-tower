<template>
  <v-row v-resize="onResize" class="mx-5">
    <v-col cols="12" class="d-flex">
      <v-card-title style="font-weight: bold; font-size: 2rem" class="ma-5"
        >Services</v-card-title
      ><v-img
        contain
        max-width="20px"
        class="mt-1"
        :src="require('../static/header_dot.png')"
      ></v-img>
    </v-col>
    <v-col
      v-for="item in items"
      :key="item.title"
      class="ma-0 pa-0"
      md="3"
      sm="6"
      cols="12"
    >
      <v-card
        class="ma-4"
        style="display: flex; flex-direction: column"
        color="#F9FBFD"
        rounded="lg"
        :height="appBarSize ? '55vh' : '75vh'"
      >
        <v-img
          class="mt-5 mb-5"
          max-height="50px"
          contain
          :src="item.image"
        ></v-img>
        <v-card-title
          class="justify-center mb-5"
          style="font-weight: 600; font-size: 1.2rem; white-space: pre-line"
          >{{ item.title }}</v-card-title
        >
        <div
          style="
            display: flex;
            width: 100%;
            justify-content: start;
            align-items: start !important;
          "
        >
          <ul>
            <li
              class="ml-5"
              style="font-weight: 450; font-size: 1rem"
              v-for="detail in item.details"
              :key="detail"
            >
              {{ detail }}
            </li>
          </ul>
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
          image: 'https://g-tower.com/wp-content/uploads/2019/03/icon2.png',
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
          image: 'https://g-tower.com/wp-content/uploads/2019/03/icon3.png',
          title: 'OVERSEAS FABRICATION \n INSPECTION SERVICES',
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
          image: 'https://g-tower.com/wp-content/uploads/2019/03/icon1.png',
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
          image: 'https://g-tower.com/wp-content/uploads/2019/03/icon2.png',
          title: 'CONSULTING SERVICES',
          details: [
            'Owner’s Engineer',
            'Investor’s Engineer',
            'Business Plans & Strategy',
            'Expert Witness',
            'Technical Advisory',
            'Project Management',
            'Factory Audit',
            ' Factory Acceptance Test',
            'Attending Tower Testing',
          ],
        },
      ],
      appBarSize: false,
    }
  },
  methods: {
    onResize() {
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
