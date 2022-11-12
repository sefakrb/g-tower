<template>
  <v-row v-resize="onResize" class="ma-5">
    <v-col class="d-flex" cols="12">
      <v-card-title class="mainTitle">Contact Us</v-card-title
      ><v-img
        contain
        max-width="20px"
        :src="require('../static/header-dot.png')"
      ></v-img>
    </v-col>
    <v-col class="centerize" cols="12">
      <v-card width="70vw" flat class="centerize">
        <v-img
          max-width="90%"
          contain
          :src="require('../static/map.jpg')"
        ></v-img>
      </v-card>
    </v-col>

    <v-col :cols="locationSize">
      <v-card height="100%" class="d-flex flex-column" flat rounded="lg">
        <v-card-title class="country">United States Headquarter</v-card-title>
        <v-card-text style="font-weight: 450; font-size: 1rem">
          4571 Broadway St, Boulder, CO 80304 <br />
          <br />
          contact.us@g-tower.com
        </v-card-text>
      </v-card></v-col
    >
    <v-col cols="12"></v-col>

    <v-col v-for="item in items" :key="item.region" :cols="locationSize">
      <v-card class="cardContext" flat rounded="lg">
        <div>
          <v-card-title :style="{ color: item.color }" class="country">{{
            item.region
          }}</v-card-title>
          <v-card-text style="font-size: 1rem">
            {{ item.location }} <br />
            <br />
            {{ item.email }}
          </v-card-text>
        </div>
        <v-divider inset vertical></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
        {
          region: 'Australia',
          color: 'rgb(136, 65, 157)',
          location: 'Sydney Office',
          email: 'contact.au@g-tower.com',
        },
      ],
      locationSize: 0,
    }
  },
  methods: {
    onResize() {
      this.show = true
      if (window.innerWidth < 600) {
        this.locationSize = '7'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.locationSize = '4'
      } else {
        this.locationSize = '2'
      }
    },
  },
}
</script>

<style scoped>
.col {
  margin: 0 !important;
  padding: 0 !important;
}
.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainTitle {
  font-weight: 700;
  font-size: 2rem;
  margin: 20px;
}
.country {
  font-weight: 700;
  font-size: 1.2rem;
  color: #5aae61;
}

.cardContext {
  display: flex;
  height: 100%;
}
</style>
