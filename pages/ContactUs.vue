<template>
  <v-row class="ma-0" v-resize="onResize">
    <v-col style="padding: 12px !important" class="d-flex" cols="12">
      <v-card-title class="mainTitle">{{ $t('contactUs.title') }}</v-card-title>
    </v-col>
    <v-col class="centerize" cols="12">
      <v-card width="85vw" flat class="centerize">
        <v-img
          max-width="90%"
          contain
          :src="'https://g-tower.com/map.png'"
        ></v-img>
      </v-card>
    </v-col>

    <div class="d-flex justify-center" style="width: 100%">
      <v-col cols="6" class="d-flex justify-center">
        <v-card height="100%" class="d-flex flex-column" flat rounded="lg">
          <v-card-title class="country">{{ $t('contactUs.usHeadquarter') }}</v-card-title>
          <v-card-text
            :class="locationSize === '6' ? 'contextMobile' : 'context'"
            style="font-weight: 450"
            class="pb-0"
          >{{ $t('contactUs.usAddress') }}</v-card-text>
          <v-card-text
            :class="locationSize === '6' ? 'contextMobile' : 'context'"
            style="font-weight: 450"
            class="pt-0 text-center"
          >{{ $t('contactUs.usEmail') }}</v-card-text>
        </v-card>
      </v-col>
    </div>

    <v-row class="ma-0 pa-0 d-flex justify-center">
      <v-col
        :style="locationSize === '2' ? { margin: '1%' } : ''"
        v-for="office in offices"
        :key="office.region"
        :cols="locationSize"
        class="pa-0 d-flex justify-center"
      >
        <v-card class="cardContext mr-2" flat rounded="lg">
          <div>
            <v-card-title
              :style="{ color: office.color }"
              class="pb-2 country d-flex justify-center"
            >{{ $t(`contactUs.regions.${office.region}`) }}</v-card-title>
            <v-card-text
              :class="locationSize === '6' ? 'contextMobile' : 'context'"
              class="pb-0 d-flex justify-center"
            >{{ $t(`contactUs.offices.${office.region}`) }}</v-card-text>
            <v-card-text
              :class="locationSize === '6' ? 'contextMobile' : 'context'"
              class="pt-0 d-flex justify-center"
              @click="mailTo(office)"
            >
              <a
                class="text-center"
                style="text-decoration: none; color: rgba(0, 0, 0, 0.6); width: 100%"
                :href="`mailto:${office.email}?subject=${$t('contactUs.emailSubject')}`"
              >
                {{ office.email }}
              </a>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      offices: [
        {
          region: 'canada',
          color: '#FF7F00',
          email: 'contact.ca@g-tower.com',
        },
        {
          region: 'turkey',
          color: '#4EB3D3',
          email: 'contact.tr@g-tower.com',
        },
        {
          region: 'chile',
          color: '#E31A1C',
          email: 'contact.cl@g-tower.com',
        },
        {
          region: 'india',
          color: '#084081',
          email: 'contact.in@g-tower.com',
        },
        {
          region: 'australia',
          color: 'rgb(136, 65, 157)',
          email: 'contact.au@g-tower.com',
        },
      ],
      locationSize: 0,
    }
  },
  methods: {
    mailTo(office) {},
    onResize() {
      this.show = true
      if (window.innerWidth < 300) {
        this.locationSize = '12'
      } else if (window.innerWidth < 600) {
        this.locationSize = '6'
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
.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainTitle {
  font-weight: bold;
  font-size: 2rem;
  margin: 20px;
}
.country {
  font-weight: 700;
  font-size: 1.2rem;
  color: #5aae61;
  display: flex;
  justify-content: center;
}

.cardContext {
  display: flex;
  height: 100%;
}

.context {
  font-size: 1rem;
}
.contextMobile {
  font-size: 0.8rem;
}
</style>
