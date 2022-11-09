<template>
  <v-row v-resize="onResize" class="ma-0 pa-0 justify-center align-center">
    <v-col style="height: 100%" cols="12">
      <Banner data-aos="zoom-in" id="home" @routeHome="routeHome"></Banner>

      <v-main data-aos="fade-up" id="services">
        <Services></Services>
      </v-main>

      <v-main
        data-aos="fade-left"
        class="pb-10"
        style="background-color: #e5f0ff"
        id="projects"
      >
        <Projects></Projects>
      </v-main>

      <v-main data-aos="fade-right" id="aboutus">
        <AboutUs></AboutUs>
      </v-main>

      <v-main data-aos="fade-down" class="team" id="ourteam">
        <OurTeam></OurTeam>
      </v-main>

      <v-main data-aos="zoom-in" id="industries">
        <Industries></Industries>
      </v-main>

      <v-main data-aos="zoom-in-up" id="contactus">
        <ContactUs></ContactUs>
      </v-main>
    </v-col>
  </v-row>
</template>

<script>
import AppBar from './AppBar.vue'
import Banner from './Banner.vue'
import Services from './Services.vue'
import Projects from './Projects.vue'
import AboutUs from './AboutUs.vue'
import OurTeam from './OurTeam.vue'
import Industries from './Industries.vue'
import ContactUs from './ContactUs.vue'

export default {
  name: 'IndexPage',
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
  data() {
    return {
      titleSize: null,
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
    routeHome() {
      this.$router.push('/aboutus')
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
