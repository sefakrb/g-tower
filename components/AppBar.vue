<template>
  <v-app-bar v-resize="onResize" app class="ma-0 pa-0">
    <v-row
      style="height: 100%; justify-content: center !important"
      class="centerize"
    >
      <v-col cols="1" style="height: 100%; width: 100%" class="centerize">
        <v-img
          max-height="90%"
          max-width="90%"
          contain
          :src="require('../static/main-logo.png')"
        ></v-img>
      </v-col>

      <v-col v-if="appBarSize" cols="9">
        <v-card flat class="mx-auto" max-width="70vw">
          <v-slide-group style="background-color: #f5f5f5" multiple show-arrows>
            <v-slide-item
              v-for="item in items"
              :key="item"
              v-slot="{ active, toggle }"
            >
              <v-btn
                class="mx-2"
                depressed
                flat
                small
                :input-value="active"
                active-class="purple white--text"
                @click="toggle"
              >
                {{ item }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-card>
      </v-col>

      <v-col v-if="!appBarSize" cols="5" class="centerize" style="height: 100%">
        <v-btn depressed flat small>Home</v-btn>
        <v-btn depressed flat small>Services</v-btn>
        <v-btn depressed flat small>Projects</v-btn>
        <v-btn depressed flat small>About Us</v-btn>
        <v-btn depressed flat small>Our Team</v-btn>
        <v-btn depressed flat small>Industries</v-btn>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn color="yellow" flat small>Contact Us</v-btn>
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
        'Home',
        'Services',
        'Projects',
        'About Us',
        'Our Team',
        'Industries',
        'Contact Us',
      ],
    }
  },

  methods: {
    onResize() {
      window.innerWidth < 1000
        ? (this.appBarSize = true)
        : (this.appBarSize = false)
    },
  },
}
</script>

<style scoped>
/deep/ .v-toolbar__content {
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
