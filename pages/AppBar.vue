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
                class="mx-2 buttonFont"
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
            <v-btn
              color="#43D000"
              class="buttonFont"
              small
              @click="routePage('contactUs')"
              ><span style="color: white"> Contact Us</span></v-btn
            >
          </v-slide-group>
        </v-card>
      </v-col>

      <v-col
        v-if="!appBarSize"
        cols="6"
        :class="largeScreen ? 'largeScreen' : 'centerize'"
      >
        <v-btn
          v-for="item in items"
          :key="item.route"
          depressed
          text
          small
          class="buttonFont"
          @click="routePage(item.route)"
          >{{ item.name }}</v-btn
        >
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn
          color="#43D000
"
          class="buttonFont"
          small
          @click="routePage('contactUs')"
          ><span style="color: white"> Contact Us</span></v-btn
        >
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import vue from 'vue'
const VueScrollTo = require('vue-scrollto')
vue.use(VueScrollTo)

export default {
  data() {
    return {
      model: null,
      appBarSize: false,
      largeScreen: false,
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
      window.innerWidth > 1200
        ? (this.largeScreen = true)
        : (this.largeScreen = false)
    },

    routePage(pageName) {
      const options = {
        // container: '#container',
        easing: 'ease-in',
        lazy: false,
        offset: 0,
        force: true,
        cancelable: true,
        onStart: function (element) {
          // scrolling started
        },
        onDone: function (element) {
          // scrolling is done
        },
        onCancel: function () {
          // scrolling has been interrupted
        },
        x: false,
        y: true,
      }
      if (pageName === 'industries') {
        VueScrollTo.scrollTo(
          document.getElementById('industries'),
          1100,
          options
        )
      } else if (pageName === 'contactUs') {
        VueScrollTo.scrollTo(
          document.getElementById('contactUs'),
          1100,
          options
        )
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
  justify-content: space-around;
}
.centerize {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.largeScreen {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageSize {
  height: 100%;
  width: 100%;
}

.buttonFont {
  font-weight: 600;
}
</style>
