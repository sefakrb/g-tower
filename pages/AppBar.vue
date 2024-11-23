<template>
  <v-app-bar
    min-height="12vh"
    width="100vw"
    v-resize="onResize"
    app
    class="ma-0 pa-0"
  >
    <v-row class="mainRow">
      <v-col cols="1" class="centerize imageSize">
        <v-img
          :max-height="
            windowWidth < 700 ? '130%' : largeScreen ? '90%' : '100%'
          "
          :max-width="windowWidth < 700 ? '130%' : largeScreen ? '90%' : '100%'"
          contain
          :src="'https://g-tower.com/main-logo.svg'"
          :alt="$t('menu.home')"
        ></v-img>
      </v-col>

      <!-- mobile -->
      <v-col v-if="appBarSize" class="centerize" cols="8">
        <v-card text flat class="mx-auto" max-width="70vw">
          <v-slide-group style="background-color: #f5f5f5" multiple show-arrows>
            <v-slide-item
              v-for="item in menuItems"
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
              {{ $t(`menu.${item.name}`) }}
            </v-btn>
            </v-slide-item>
            <v-btn
              color="#43D000"
              class="buttonFont"
              small
              @click="routePage('contactUs')"
              ><span style="color: white">{{ $t('menu.contactUs') }}</span></v-btn
            >
            <language-switcher />
          </v-slide-group>
        </v-card>
      </v-col>

      <!-- large screen -->
      <v-col
        v-if="!appBarSize"
        cols="8"
        :class="largeScreen ? 'largeScreen' : 'centerize'"
      >
        <v-btn
          v-for="item in menuItems"
          :key="item.route"
          depressed
          text
          small
          class="buttonFont"
          @click="routePage(item.route)"
          >
          {{ $t(`menu.${item.name}`) }}
          </v-btn
        >
        <v-btn
          color="#43D000"
          class="buttonFont"
          small
          @click="routePage('contactUs')"
          ><span style="color: white">{{ $t('menu.contactUs') }}</span></v-btn
          >
        <div class="ma-0 pa-0">
          <v-divider
            class="mx-4"
            style="color: #0a1551 !important"
            inset
            vertical
          ></v-divider>
        </div>

        <a
          style="text-decoration: none"
          target="_blank"
          href="https://www.linkedin.com/company/g-tower/"
        >
          <v-icon class="mr-4" large style="color: #0a1551"
            >mdi-linkedin</v-icon
          >
        </a>
        <a
          style="text-decoration: none"
          target="_blank"
          href="https://www.youtube.com/@g-tower6904"
          class="mr-4"
        >
          <v-icon large style="color: #0a1551">mdi-youtube</v-icon>
        </a>
        <language-switcher class="ml-4" /> <!-- Add margin-left -->      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'AppBar',
  components: {
    LanguageSwitcher
  },

  data() {
    return {
      drawer: false,
      menuItems: [
        { name: 'home', route: 'home' },
        { name: 'services', route: 'services' },
        { name: 'projects', route: 'projects' },
        { name: 'aboutUs', route: 'aboutUs' },
        { name: 'ourTeam', route: 'ourTeam' },
        { name: 'industries', route: 'industries' },
      ],
      windowWidth: 0,
      largeScreen: false
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 960
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
      this.largeScreen = window.innerWidth > 1264
      this.appBarSize = window.innerWidth <= 960  // Add this line
    },
    routePage(route) {
      this.drawer = false
      this.$vuetify.goTo(`#${route}`, {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    }
  }
}

</script>

<style scoped>
.v-btn {
  text-transform: unset !important;
}
::v-deep .v-toolbar__content {
  padding: 0px !important;
  margin: 0px !important;
  height: 12vh !important;
}

::v-deep .theme--light.v-divider {
  border-color: #0a1551;
  height: 5vh;
  margin-bottom: 0.2rem;
}
.mainRow {
  height: 12vh;
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
  font-size: 0.9rem;
  font-weight: 600;
}
</style>
