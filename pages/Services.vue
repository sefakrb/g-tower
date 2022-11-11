<template>
  <v-row v-resize="onResize" class="mx-5">
    <v-col cols="12" class="d-flex">
      <v-card-title style="font-weight: bold; font-size: 2rem" class="ma-5"
        >Services</v-card-title
      ><v-img
        contain
        max-width="20px"
        class="mt-1"
        :src="require('../static/header-dot.png')"
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
        <v-card color="#F9FBFD" flat>
          <v-img
            class="mt-5 mb-5"
            max-height="50px"
            contain
            :src="require('../static/services-logo.png')"
          ></v-img
        ></v-card>
        <v-card
          color="#F9FBFD"
          flat
          class="d-flex justify-center align-center"
          min-height="30%"
        >
          <v-card-title
            class="justify-center mb-5"
            style="font-weight: 600; font-size: 1.2rem; white-space: pre-line"
            >{{ item.title }}</v-card-title
          ></v-card
        >
        <v-card color="#F9FBFD" flat>
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
          </div></v-card
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
          title: 'ENGINEERING SERVICES',
          details: [
            'Transmission Line Design',
            'Lattice Tower Design',
            'Tubular Pole Design',
            'Foundation Design',
            'Drafting $ Detailing',
            'Cost Estimates',
          ],
        },
        {
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
          title: 'SOURCING SERVICES',
          details: [
            'Lattice Tower Supply',
            'Tubular Pole Supply',
            'Tower Accessories Supply',
            'Composite Member Supply',
            'After Sales Services',
            'Project Supply Management',
          ],
        },
        {
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
