<template>
  <v-row v-resize="onResize" class="ma-0 pa-0" justify="center" align="center">
    <v-col style="height: 100%" cols="12">
      <Banner></Banner>
      <div class="d-flex">
        <v-card-title
          style="font-weight: bold; font-size: 2rem"
          class="ml-5 mr-2"
          >Services</v-card-title
        ><v-img
          contain
          max-width="20px"
          class="mt-1"
          :src="require('../static/header_dot.png')"
        ></v-img>
      </div>
      <Services></Services>
      <div class="pb-10" style="background-color: #e5f0ff">
        <div class="d-flex">
          <v-card-title
            style="font-weight: bold; font-size: 2rem"
            class="ml-5 mr-2"
            >Projects</v-card-title
          >
          <v-img
            contain
            max-width="20px"
            class="mt-1"
            :src="require('../static/header_dot.png')"
          ></v-img>
        </div>
        <Projects></Projects>
      </div>
      <div class="d-flex">
        <v-card-title
          style="font-weight: bold; font-size: 2rem"
          class="ml-5 mr-2"
          >About Us</v-card-title
        >
        <v-img
          contain
          max-width="20px"
          class="mt-1"
          :src="require('../static/header_dot.png')"
        ></v-img>
      </div>
      <AboutUs></AboutUs>
      <div class="team">
        <div :style="{ 'padding-left': titleSize }" class="d-flex pt-5">
          <v-card-title style="color: white; font-weight: bold; font-size: 2rem"
            >Our Team</v-card-title
          ><v-img
            contain
            max-width="20px"
            :src="require('../static/header_dot.png')"
          ></v-img>
        </div>
        <OurTeam></OurTeam>
      </div>
      <div class="d-flex">
        <v-card-title
          style="font-weight: bold; font-size: 2rem"
          class="ml-5 mr-2"
          >Industries</v-card-title
        ><v-img
          contain
          max-width="20px"
          :src="require('../static/header_dot.png')"
        ></v-img>
      </div>
      <Industries></Industries>
      <div class="d-flex">
        <v-card-title
          style="font-weight: bold; font-size: 2rem"
          class="ml-5 mr-2"
          >Contact Us</v-card-title
        ><v-img
          contain
          max-width="20px"
          :src="require('../static/header_dot.png')"
        ></v-img>
      </div>
      <ContactUs></ContactUs>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      titleSize: null,
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        console.log('yav ne alaka')
        this.titleSize = '15%'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.titleSize = '15%'
      } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
        this.titleSize = '10%'
      } else {
        this.titleSize = '7%'
      }
    },
  },
}
</script>

<style scoped>
.team {
  background-image: url('../static/team-background.png');
  background-repeat: no-repeat, no-repeat;
}
</style>
