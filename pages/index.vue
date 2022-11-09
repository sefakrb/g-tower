<template>
  <div>
    <AppBar @routePage="routePage"></AppBar>
    <v-main>
      <v-row v-resize="onResize" class="ma-0 pa-0 justify-center align-center">
        <v-col style="height: 100%" cols="12">
          <Banner class="mt-5" id="home" @routePage="routePage"></Banner>
          <v-main id="services">
            <div data-aos="zoom-in">
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
            </div>
          </v-main>

          <v-main id="projects">
            <div
              data-aos="zoom-in"
              class="pb-10"
              style="background-color: #e5f0ff"
            >
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

          <v-main id="about_us">
            <div data-aos="zoom-in">
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
            </div>
          </v-main>

          <v-main id="our_team">
            <div data-aos="zoom-in" class="team">
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
            <div data-aos="zoom-in" class=" ">
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
            </div>
          </v-main>

          <v-main id="contact_us">
            <div class=" " data-aos="zoom-in">
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
            </div>
          </v-main>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import AppBar from './comps/AppBar.vue'
import Banner from './comps/Banner.vue'
import Services from './comps/Services.vue'
import Projects from './comps/Projects.vue'
import AboutUs from './comps/AboutUs.vue'
import OurTeam from './comps/OurTeam.vue'
import Industries from './comps/Industries.vue'
import ContactUs from './comps/ContactUs.vue'

export default {
  components: {
    AppBar,
    Banner,
    Services,
    Projects,
    AboutUs,
    OurTeam,
    Industries,
    ContactUs,
  },
  name: 'IndexPage',
  created() {
    window.onload = (event) => {
      console.log('page is fully loaded')
    }
  },
  data() {
    return {
      titleSize: null,
      show: true,
    }
  },
  methods: {
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
      // const yOffset = -10
      // const y =
      //   document.getElementById(data).getBoundingClientRect().top +
      //   window.pageYOffset +
      //   yOffset
      // window.scrollTo({ top: y, behavior: 'smooth' })
      document.getElementById(data).scrollIntoView({
        behavior: 'smooth',
      })
      // this.$router.replace({ name: this.$route.name, hash: '#' + data })
    },
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.team {
  background-image: url('../static/team-background.png');
  background-repeat: no-repeat, no-repeat;
}
</style>
