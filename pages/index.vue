<template>
  <v-row v-resize="onResize" class="mainRow">
    <v-col style="height: 100%" class="ma-0 pa-0" cols="12">
      <Banner
        class="bannerStyle ma-0 pb-6"
        data-aos="zoom-in"
        @routeHome="routeHome"
      ></Banner>

      <div id="concat" class="ma-0 pa-0">
        <v-main class="" id="services" data-aos="fade-up">
          <Services></Services>
        </v-main>

        <v-main id="projects" data-aos="fade-down" class="projectStyle">
          <Projects></Projects>
        </v-main>
      </div>

      <v-main class="" id="aboutUs" data-aos="fade-right">
        <AboutUs></AboutUs>
      </v-main>

      <v-main id="ourTeam" data-aos="fade-down" class="">
        <OurTeam></OurTeam>
      </v-main>

      <v-main id="industries">
        <Industries></Industries>
      </v-main>

      <v-main id="contactUs">
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
      document
        .getElementById('aboutUs')
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
  },
}
</script>

<style>
.mainRow {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-content: center;
}

.projectStyle {
  padding-bottom: 50px !important;
}

#concat {
  background-image: url('../static/concat-background.svg');
  background-repeat: no-repeat, no-repeat;
}
</style>
