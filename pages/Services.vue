<template>
  <v-row
    class="ma-0"
    style="display: flex; justify-content: center"
    v-resize="onResize"
  >
    <v-col cols="12" class="d-flex">
      <v-card-title class="mainTitle">Services</v-card-title>
      <!-- <v-img
        contain
        max-width="20px"
        :src="require('../static/header-dot.png')"
      ></v-img> -->
    </v-col>

    <v-row
      style="
        width: 100%;
        display: flex;
        padding-right: 2rem;
        padding-left: 2rem;
      "
    >
      <v-col
        v-for="item in items"
        :key="item.title"
        class="ma-0 pa-0"
        md="3"
        sm="6"
        cols="12"
      >
        <v-card
          class="cardStyle"
          color="#F9FBFD"
          :width="isLarge ? '80%' : ''"
          :height="
            !appBarSize && isLarge ? '40vh' : appBarSize ? '55vh' : '60vh'
          "
        >
          <!-- image -->
          <v-card color="#F9FBFD" flat>
            <v-img
              class="mt-10 mb-5"
              max-height="80px"
              contain
              :src="require('../static/services/' + item.image)"
            ></v-img>
          </v-card>
          <!-- title -->
          <v-card color="#F9FBFD" flat class="centerize" height="20%">
            <v-card-title class="itemTitle">{{
              item.title
            }}</v-card-title></v-card
          >
          <!-- detail -->
          <v-card style="margin-bottom: 1.5rem" color="#F9FBFD" flat>
            <ul>
              <li
                class="itemDetail"
                v-for="detail in item.details"
                :key="detail"
              >
                {{ detail }}
              </li>
            </ul></v-card
          >
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: 'engineering-img.png',
          title: 'ENGINEERING',
          details: [
            'Transmission Line Design',
            'Lattice Tower Design',
            'Tubular Pole Design',
            'Foundation Design',
            'Drafting & Detailing',
            'Cost Estimates',
          ],
        },
        {
          image: 'overseas-img.svg',
          title: 'OVERSEAS FABRICATION \n INSPECTION',
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
          image: 'sourcing-img.svg',
          title: 'SOURCING',
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
          image: 'consulting-img.svg',
          title: 'CONSULTING',
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
      isLarge: false,
    }
  },
  methods: {
    onResize() {
      window.innerWidth < 960
        ? (this.appBarSize = true)
        : (this.appBarSize = false)

      window.innerWidth > 1500 ? (this.isLarge = true) : (this.isLarge = false)
    },
  },
}
</script>

<style scoped>
.centerize {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.mainTitle {
  font-weight: bold;
  font-size: 2rem;
  margin: 20px;
}

.cardStyle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.7rem !important;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
}

.itemTitle {
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
}

.itemDetail {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7rem;
  margin-left: 20px;
  color: #1a1a1a;
}

ul li::marker {
  color: #5f5f5f;
}
</style>
