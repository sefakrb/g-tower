<template>
  <v-app-bar v-resize="onResize" app class="ma-0 pa-0">
    <v-row
      style="height: 100%; width: 100vw; justify-content: center !important"
      class="centerize"
    >
      <v-col cols="1" style="height: 100%; width: 100%" class="centerize">
        <v-img max-height="90%" max-width="90%" contain :src="mainLogo"></v-img>
      </v-col>

      <v-col v-if="appBarSize" cols="9">
        <v-card text flat class="mx-auto" max-width="70vw">
          <v-slide-group style="background-color: #f5f5f5" multiple show-arrows>
            <v-slide-item
              v-for="item in items"
              :key="item.route"
              v-slot="{ active }"
            >
              <v-btn
                class="mx-2"
                depressed
                text
                small
                :input-value="active"
                active-class="purple white--text"
                @click="routePage(item.route)"
              >
                {{ item.name }}
              </v-btn>
            </v-slide-item>
            <v-btn color="#B1D234" small @click="routePage('contactus')"
              ><span style="color: white"> Contact Us</span></v-btn
            >
          </v-slide-group>
        </v-card>
      </v-col>

      <v-col v-if="!appBarSize" cols="5" class="centerize" style="height: 100%">
        <v-btn
          v-for="item in items"
          :key="item.route"
          depressed
          text
          small
          @click="routePage(item.route)"
          >{{ item.name }}</v-btn
        >
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn color="#B1D234" small @click="routePage('contactus')"
          ><span style="color: white"> Contact Us</span></v-btn
        >
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      mainLogo: 'https://g-tower.com/wp-content/uploads/2019/05/400dpiLogo.png',
      model: null,
      appBarSize: false,
      items: [
        { name: 'Home', route: '/' },
        { name: 'Services', route: 'services' },
        { name: 'Projects', route: 'projects' },
        { name: 'About Us', route: 'aboutus' },
        { name: 'Our Team', route: 'ourteam' },
        { name: 'Industries', route: 'industries' },
      ],
    }
  },

  methods: {
    onResize() {
      window.innerWidth < 1000
        ? (this.appBarSize = true)
        : (this.appBarSize = false)
    },

    routePage(pageName) {
      console.log('asdasd')
      if (
        (this.$route.name === '/' || this.$route.name === 'index') &&
        pageName === '/'
      ) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        this.$router.push(pageName)
        console.log('asdasd2')
      }
      console.log('asdasd3')
    },
  },
}
</script>

<style scoped>
::v-deep .v-toolbar__content {
  padding: 0px !important;
  margin: 0px !important;
}
.centerize {
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  justify-content: start !important;
  align-items: center !important;
}
</style>
