<template>
  <div>
    <AppBar @routePage="routePage"></AppBar>
    <v-main>
      <v-row
        v-resize="onResize"
        class="ma-0 pa-0"
        justify="center"
        align="center"
      >
        <v-col style="height: 100%" cols="12">
          <Banner ref="target" @routePage="routePage"></Banner>
          <v-main id="services">
            <div class="d-flex">
              <v-card-title
                style="font-weight: bold; font-size: 2rem"
                class="ma-5"
                >Services</v-card-title
              ><v-img
                contain
                max-width="20px"
                class="mt-1"
                :src="require('../static/header_dot.png')"
              ></v-img>
            </div>
            <Services></Services>
          </v-main>
          <v-main id="projects">
            <div class="pb-10" style="background-color: #e5f0ff">
              <div class="d-flex">
                <v-card-title
                  style="font-weight: bold; font-size: 2rem"
                  class="ma-5"
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
          </v-main>
          <!-- <v-btn @click="deneme">s</v-btn> -->
          <v-main data-aos="zoom-in" id="about_us">
            <div class="d-flex">
              <v-card-title
                style="font-weight: bold; font-size: 2rem"
                class="ma-5"
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
          </v-main>
          <v-main id="our_team">
            <div class="team">
              <div :style="{ 'padding-left': titleSize }" class="d-flex pt-5">
                <v-card-title
                  style="color: white; font-weight: bold; font-size: 2rem"
                  >Our Team</v-card-title
                ><v-img
                  contain
                  max-width="20px"
                  :src="require('../static/header_dot.png')"
                ></v-img>
              </div>
              <OurTeam></OurTeam>
            </div>
          </v-main>
          <v-main id="industries">
            <div class="d-flex">
              <v-card-title
                style="font-weight: bold; font-size: 2rem"
                class="ma-5"
                >Industries</v-card-title
              ><v-img
                contain
                max-width="20px"
                :src="require('../static/header_dot.png')"
              ></v-img>
            </div>
            <Industries></Industries>
          </v-main>
          <v-main id="contact_us">
            <div class="d-flex">
              <v-card-title
                style="font-weight: bold; font-size: 2rem"
                class="ma-5"
                >Contact Us</v-card-title
              ><v-img
                contain
                max-width="20px"
                :src="require('../static/header_dot.png')"
              ></v-img>
            </div>
            <ContactUs></ContactUs>
          </v-main>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      titleSize: null,
      show: true,
    }
  },
  methods: {
    deneme() {
      console.log('LKADLKASJDLKASD')
    },

    onResize() {
      if (window.innerWidth < 600) {
        this.titleSize = '15%'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.titleSize = '15%'
      } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
        this.titleSize = '10%'
      } else {
        this.titleSize = '7%'
      }
    },
    routePage(data) {
      this.$router.push('#' + data)
      // this.$router.replace()
      // const newData = '#' + data
      // this.$route.newData
    },
  },
}
</script>

<style scoped></style>
