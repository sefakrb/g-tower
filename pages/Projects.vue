<template>
  <v-row v-resize="onResize" class="ma-0 mainRow centerize">
    <v-col cols="12" class="d-flex pb-0">
      <v-card-title class="mainTitle">Projects</v-card-title>
      <!-- <v-img
        contain
        max-width="20px"
        :src="require('../static/header-dot.png')"
      ></v-img> -->
    </v-col>
    <v-slide-group
      style="padding: 1rem"
      v-model="model"
      center-active
      show-arrows
      selected
      active-class="activeClassStyle"
      mandatory
      @click:next="nextSlide()"
      @click:prev="previousSlide()"
    >
      <v-slide-item
        v-for="item in items"
        :key="item.image"
        class="passiveClassStyle"
      >
        <v-card flat class="cardStyle" :width="cardWidth" rounded="lg">
          <!-- loading image -->
          <v-progress-linear
            v-if="item.loading"
            indeterminate
            color="rgb(177, 210, 52)"
          ></v-progress-linear>

          <!-- image -->
          <v-img
            min-height="50vh"
            max-height="50vh"
            contain
            :src="require('../static/projects/' + item.image)"
            @load="item.loading = false"
          >
          </v-img>

          <!-- title -->
          <v-card-title
            style="
              font-size: 1.6rem;
              font-weight: 700;
              justify-content: center;
              min-height: 15%;
            "
            >{{ item.title }}</v-card-title
          >

          <!-- content -->
          <div style="overflow: auto" class="d-flex">
            <v-card-text
              style="
                overflow: auto;
                font-size: 1.2rem;
                white-space: pre-line;
                margin-bottom: 2%;
              "
            >
              <div
                style="font-weight: 700; font-size: 1.1rem"
                v-if="item.client"
              >
                Client:<span class="contentStyle">{{ item.client }}</span>
              </div>

              <div
                style="font-weight: 700; font-size: 1.1rem"
                v-if="item.owner"
              >
                Owner:<span class="contentStyle">{{ item.owner }}</span>
              </div>

              <div style="font-weight: 700; font-size: 1.1rem" v-if="item.info">
                Project Info:<span class="contentStyle">{{ item.info }}</span>
              </div>

              <div style="font-weight: 700; font-size: 1.1rem">
                Our Scope:<span class="contentStyle">{{ item.scope }}</span>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <!-- eski carousel kısmı display none -->
    <v-carousel
      hide-delimiters
      v-model="model"
      style="width: 80vw; scroll-behavior: auto; display: none"
      height="85vh"
    >
      <v-carousel-item v-for="item in items" :key="item.image">
        <v-card flat class="cardStyle" width="100%" height="100%" rounded="lg">
          <!-- loading image -->
          <v-progress-linear
            v-if="item.loading"
            indeterminate
            color="rgb(177, 210, 52)"
          ></v-progress-linear>

          <!-- image -->
          <v-img
            max-height="60%"
            contain
            :src="require('../static/projects/' + item.image)"
            @load="item.loading = false"
          >
          </v-img>

          <!-- title -->
          <v-card-title style="font-size: 1.6rem; justify-content: center">{{
            item.title
          }}</v-card-title>

          <!-- content -->
          <div style="overflow: auto" class="d-flex">
            <v-card-text
              style="
                overflow: auto;
                font-size: 1.2rem;
                white-space: pre-line;
                margin-bottom: 2%;
              "
            >
              <div style="font-weight: bold" v-if="item.client">
                Client:<span
                  style="white-space: pre; font-weight: normal"
                  :style="
                    width < 400
                      ? { 'white-space': 'normal' }
                      : { 'white-space': 'pre' }
                  "
                  >{{ item.client }}</span
                >
              </div>

              <div style="font-weight: bold" v-if="item.owner">
                Owner:<span
                  style="white-space: pre; font-weight: normal"
                  :style="
                    width < 400
                      ? { 'white-space': 'normal' }
                      : { 'white-space': 'pre' }
                  "
                  >{{ item.owner }}</span
                >
              </div>

              <div style="font-weight: bold" v-if="item.info">
                Project Info:<span
                  style="white-space: pre; font-weight: normal"
                  :style="
                    width < 400
                      ? { 'white-space': 'normal' }
                      : { 'white-space': 'pre' }
                  "
                  >{{ item.info }}</span
                >
              </div>

              <div style="font-weight: bold">
                Our Scope:<span
                  style="white-space: pre; font-weight: normal"
                  :style="
                    width < 400
                      ? { 'white-space': 'normal' }
                      : { 'white-space': 'pre' }
                  "
                  >{{ item.scope }}</span
                >
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      items: [
        {
          image: 'wataynikaneyap.png',
          title: 'Wataynikaneyap Power Project',
          client: '                Fortis Ontario',
          info: '     300 km (186 miles) – 230kV S/C \n                           1500 km (930 miles) – 115/44/25kV S/C',
          scope:
            '       Transmission Line Engineering & Consultancy Service\n                           on the preparation of 30% Preliminary Plan & Profile Drawings.',
          loading: true,
        },
        {
          image: 'east_west_tie_transmission.jpg',
          title: 'East-West Tie Transmission Line Project',
          owner: '               NextBridge (NextEra & EnBridge Joint Venture)',
          info: '     450 km (280 miles) – 230kV D/C \n                           Quantity of the project is 20,000 tons (~44,000,000 lbs).',
          scope:
            '       Engineer of Record for the lattice tower structures.\n                           Inspection of overseas fabrication of the lattice tower structures in Turkey.',
          loading: true,
        },
        {
          image: 'samson.jpg',
          title: 'Samson 345kV Transmission Line Project',
          client: '                RES Americas',
          info: '     Conversion of tubular poles to lattice towers due to site conditions \n                           29 towers – 345kV D/C \n                           Quantity of project 500 tons (~1,100,000 lbs).',
          scope:
            '       100% IFC level drawing preparation and acted as Engineer of Record for the lattice tower structures.\n                           Inspection of overseas fabrication of the lattice tower structures in Turkey. \n                           Prototype fitting inspections of the lattice tower structures in Turkey.',
          loading: true,
        },
        {
          image: 'overland_transmission.png',
          title: 'Pawnee Express Transmission Line Project',
          owner:
            '               A Renewable Energy Project Developer from U.S.A',
          info: '     128 km (80 miles) – 345kV S/C & D/C',
          scope:
            '       Transmission Line Engineering & Consultancy Service\n                           on the preparation of 30% Preliminary Plan & Profile Drawings.',
          loading: true,
        },
        {
          image: 'centella.jpg',
          title: 'Centella Transmission Line Project',
          client: '                Ferrovial S.A.',
          info: '     250 km (155 miles) – 230kV D/C	\n                           Quantity of the project is 8,000 tons (~17,637,000 lbs).',
          scope:
            '       Inspection of overseas fabrication of the lattice tower structures in Turkey. \n                           Prototype fitting inspections of the lattice tower structures in Turkey.',
          loading: true,
        },
        {
          image: 'steel_pole.png',
          title: '144kV & 240kV Steel Pole Supply Project',
          owner: '               Alberta Transmission Company (ATCO)',
          info: '     Total of 90 tubular pole structures. \n                           Quantity of the project is 500 tons (~1,100,000 lbs).',
          scope:
            '       Inspection of overseas fabrication of tubular pole structures in India. \n                           Prototype fitting inspections of the tubular pole structures in India.',
          loading: true,
        },
        {
          image: 'expert_witness.jpg',
          title: 'Expert Witness Project',
          client: '                Stites & Harbison PLLC',
          info: '     Expert witness for a proposed transmission line in Kentucky.',
          scope:
            '       Engineering consultancy and expert witness services on behalf of the landowners.',
          loading: true,
        },
        {
          image: 'solar_racking.png',
          title: 'Solaf Racking Structures Supply Project',
          client: '                InterPlus',
          info: '     Fixed solar racking structures for a solar farm in the Middle East. \n                           Quantity of the project is 2,400 tons (~5,300,000 lbs).',
          scope:
            '       Inspection of fabricated galvanized steel racking structures in Turkey.',
          loading: true,
        },
        {
          image: 'north_america_solar.png',
          title: 'North America Solar Lighting',
          info: '     Completed 1000+ sites within Canada and the US.',
          scope:
            '       Supply of engineered lighting poles, solar framing, structural base cabinet, light arms, and accessories.',
          loading: true,
        },
        {
          image: 'nigeria.png',
          title: 'Nigeria Solar Telecom Projects',
          info: '     400 Rural Telecommunication tower structures in Nigeria.',
          scope:
            '       Supply of engineered telecom poles, solar support framing, battery cabinet and accessories.',
          loading: true,
        },
        {
          image: 'steel_moduler_wind.png',
          title: 'Steel Modular Wind Tower Engineering Work',
          client: '                NorthStar Wind',
          info: '     Concept design of modular steel wind tower in the US.',
          scope:
            '       Engineering consultancy and assistance on technology and knowhow transfer between companies.',
          loading: true,
        },
        {
          image: 'wind_tower1.png',
          title: 'Wind Tower and Foundation Design',
          client: '                Various global client portfolios.',
          scope:
            '       Engineering consultancy on foundation design, tower design, existing structure assessment, \n                           retrofit projects, platform and climbing accessories.',
          loading: true,
        },
      ],
      width: '',
      cardWidth: '',
    }
  },
  methods: {
    previousSlide() {
      this.model -= 1
    },

    nextSlide() {
      this.model += 1
      setTimeout(() => {
        this.model += 1
        this.model -= 1
      }, 200)
    },

    onResize() {
      this.width = window.innerWidth
      if (this.width < 600) {
        this.model = 0
        this.cardWidth = '60vw'
      } else if (this.width > 600 && this.width < 900) {
        this.model = 0
        this.cardWidth = '40vw'
      } else if (this.width > 900 && this.width < 1200) {
        this.model = 1
        this.cardWidth = '30vw'
      } else {
        this.model = 1
        this.cardWidth = '25vw'
      }
    },
  },

  watch: {
    model: {
      handler(n, o) {
        if (n === 10) {
          this.model = 1
          setTimeout(() => {
            this.nextSlide()
            this.model = 1
          }, 200)
        }
      },
      deep: true,
    },
  },
}
</script>

<style scoped>
.passiveClassStyle {
  margin: 40px;
  opacity: 0.9;
  background: rgba(240, 240, 240);
  filter: blur(0.03rem);
}
.activeClassStyle {
  opacity: 1 !important;
  background: white;

  filter: blur(0px) !important;
}

.v-card__title {
  text-align: center;
}

.centerize {
  display: flex;
  justify-content: center;
}

.mainRow {
}

.mainTitle {
  font-weight: 700;
  font-size: 2rem;
  margin: 20px;
}

.cardStyle {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3) !important;
  border-radius: 8px;
}

::v-deep .theme--light.v-icon.v-icon.v-icon--disabled,
::v-deep .theme--light.v-icon {
  color: white !important;
  border: 1px solid white;
  border-radius: 40px;
  background-color: #43d000;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.4));
}

::v-deep .v-icon.v-icon {
  font-size: 2.5rem;
}

.contentStyle {
  font-weight: normal;
  font-size: 1rem;
  color: #2e2e2e;
  margin-left: 4px;
}
</style>
