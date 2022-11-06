<template>
  <v-row v-resize="onResize" class="d-flex justify-center">
    <v-col class="d-flex justify-center" cols="12">
      <v-card width="60vw" flat class="d-flex justify-center">
        <v-img
          max-width="90%"
          contain
          :src="require('../static/map.png')"
        ></v-img>
      </v-card>
    </v-col>

    <v-col class="d-flex justify-start pa-0" cols="12">
      <v-col class="pa-0" :cols="locationSize">
        <v-card height="100%" class="ma-4 d-flex flex-column" flat rounded="lg">
          <v-card-title
            style="font-weight: 700; font-size: 1.2rem; color: #5aae61"
            >United States - Headquarter</v-card-title
          >
          <v-card-text style="font-weight: 450; font-size: 1rem">
            4571 Broadway St, Boulder, CO 80304 <br />
            <br />
            contact.us@g-tower.com
          </v-card-text>
        </v-card></v-col
      >
    </v-col>
    <!-- :style="{
        'flex-direction': locationSize > '4' ? 'row' : 'column',
        'align-items': locationSize > '4' ? 'center' : 'start',
      }" -->
    <template class="pa-0 ma-0" v-for="(item, index) in items">
      <v-col class="pa-0 ma-0" :cols="locationSize">
        <v-card height="100%" class="d-flex" flat rounded="lg">
          <div class="d-flex flex-column">
            <v-card-title
              :color="item.color"
              :style="{ color: item.color }"
              style="font-weight: 700; font-size: 1.2rem"
              >{{ item.region }}</v-card-title
            >
            <v-card-text style="font-weight: 450; font-size: 1rem">
              {{ item.location }} <br />
              <br />
              {{ item.email }}
            </v-card-text>
          </div>
          <v-divider inset vertical></v-divider> </v-card
      ></v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        // {
        //   region: 'United States - Headquarter',
        //   color: '#5AAE61',
        //   location: '4571 Broadway St, Boulder, CO 80304',
        //   email: 'contact.us@g-tower.com',
        // },
        {
          region: 'Canada',
          color: '#FF7F00',
          location: 'Toronto, ON Office',
          email: 'contact.ca@g-tower.com',
        },
        {
          region: 'Turkey',
          color: '#4EB3D3',
          location: 'Ankara Office',
          email: 'contact.tr@g-tower.com',
        },
        {
          region: 'Chile',
          color: '#E31A1C',
          location: 'Santiago Office',
          email: 'contact.cl@g-tower.com',
        },
        {
          region: 'India',
          color: '#084081',
          location: 'Kolkata Office',
          email: 'contact.in@g-tower.com',
        },
      ],
      locationSize: 0,
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.locationSize = '10'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.locationSize = '4'
      } else {
        this.locationSize = '3'
      }
      console.log(this.locationSize)
    },
  },
}
</script>

<style></style>
