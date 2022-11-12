<template>
  <v-row v-resize="onResize" class="mainRow">
    <v-col style="height: 100%" cols="12">
      <Banner data-aos="zoom-in" @routeHome="routeHome"></Banner>

      <v-main data-aos="fade-up">
        <Services></Services>
      </v-main>

      <v-main data-aos="fade-down" class="projectStyle">
        <Projects></Projects>
      </v-main>

      <v-main data-aos="fade-right">
        <AboutUs></AboutUs>
      </v-main>

      <v-main data-aos="fade-down" class="team pa-0">
        <OurTeam></OurTeam>
      </v-main>

      <v-main data-aos="zoom-in">
        <Industries></Industries>
      </v-main>

      <v-main data-aos="zoom-in-up">
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
.mainRow {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-content: center;
}

.projectStyle {
  background-color: #e5f0ff;
  padding: 0 !important;
  padding-bottom: 50px !important;
}
.team {
  background-image: url('../static/team-background.png');
  background-repeat: no-repeat, no-repeat;
}
</style>
