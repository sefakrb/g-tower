<template>
  <v-app-bar width="100vw" v-resize="onResize" app class="ma-0 pa-0">
    <v-row class="mainRow">
      <v-col cols="1" class="centerize imageSize">
        <v-img
          max-height="90%"
          max-width="90%"
          contain
          :src="require('../static/main-logo.png')"
        ></v-img>
      </v-col>

      <v-col v-if="appBarSize" class="centerize" cols="8">
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
            <v-btn color="#B1D234" small @click="routePage('contactUs')"
              ><span style="color: white"> Contact Us</span></v-btn
            >
          </v-slide-group>
        </v-card>
      </v-col>

      <v-col v-if="!appBarSize" cols="6" class="centerize">
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
        <v-btn color="#B1D234" small @click="routePage('contactUs')"
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
      model: null,
      appBarSize: false,
      items: [
        { name: 'Home', route: 'home' },
        { name: 'Services', route: 'services' },
        { name: 'Projects', route: 'projects' },
        { name: 'About Us', route: 'aboutUs' },
        { name: 'Our Team', route: 'ourTeam' },
        { name: 'Industries', route: 'industries' },
      ],
    }
  },

  methods: {
    onResize() {
      window.innerWidth < 950
        ? (this.appBarSize = true)
        : (this.appBarSize = false)
    },

    routePage(pageName) {
      if (pageName === 'industries') {
        document.getElementById('industries').scrollIntoView({ block: 'start' })
      } else if (pageName === 'contactUs') {
        document.getElementById('contactUs').scrollIntoView({ block: 'start' })
        setTimeout(function () {
          document
            .getElementById('contactUs')
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
        }, 150)
      } else {
        document
          .getElementById(pageName)
          .scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped>
::v-deep .v-toolbar__content {
  padding: 0px !important;
  margin: 0px !important;
}
.mainRow {
  height: 100%;
  width: 100%;
  justify-content: center;
}
.centerize {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.imageSize {
  height: 100%;
  width: 100%;
}
</style>
