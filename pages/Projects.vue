<template>
  <v-row v-resize="onResize" class="ma-0 mainRow centerize">
    <v-col cols="12" class="d-flex pb-0">
      <v-card-title class="mainTitle">Projects</v-card-title>
      <v-img
        contain
        max-width="20px"
        :src="require('../static/header-dot.png')"
      ></v-img>
    </v-col>

    <v-carousel
      hide-delimiters
      v-model="model"
      style="width: 80vw; scroll-behavior: auto"
      height="85vh"
    >
      <v-carousel-item v-for="item in items" :key="item.image">
        <v-card flat class="cardStyle" width="100%" height="100%" rounded="lg">
          <v-progress-linear
            v-if="item.loading"
            indeterminate
            color="rgb(177, 210, 52)"
          ></v-progress-linear>
          <v-img
            max-height="60%"
            contain
            :src="require('../static/projects/' + item.image)"
            @load="item.loading = false"
          >
          </v-img>
          <v-card-title style="font-size: 1.6rem; justify-content: center">{{
            item.title
          }}</v-card-title>
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
          title: 'WATAYNIKANEYAP POWER PROJECT',
          client: '                Fortis Ontario',
          info: '     300 km (186 miles) – 230kV S/C \n                           1500 km (930 miles) – 115/44/25kV S/C',
          scope:
            '       Transmission Line Engineering & Consultancy Service\n                           on the preparation of 30% Preliminary Plan & Profile Drawings.',
          loading: true,
        },
        {
          image: 'east_west_tie_transmission.jpg',
          title: 'EAST-WEST TIE TRANSMISSION LINE PROJECT',
          owner: '               NextBridge (NextEra & EnBridge Joint Venture)',
          info: '     450 km (280 miles) – 230kV D/C \n                           Quantity of the project is 20,000 tons (~44,000,000 lbs).',
          scope:
            '       Engineer of Record for the lattice tower structures.\n                           Inspection of overseas fabrication of the lattice tower structures in Turkey.',
          loading: true,
        },
        {
          image: 'samson.jpg',
          title: 'SAMSON 345kV TRANSMISSION LINE PROJECT',
          client: '                RES Americas',
          info: '     Conversion of tubular poles to lattice towers due to site conditions \n                           29 towers – 345kV D/C \n                           Quantity of project 500 tons (~1,100,000 lbs).',
          scope:
            '       100% IFC level drawing preparation and acted as Engineer of Record for the lattice tower structures.\n                           Inspection of overseas fabrication of the lattice tower structures in Turkey. \n                           Prototype fitting inspections of the lattice tower structures in Turkey.',
          loading: true,
        },
        {
          image: 'overland_transmission.png',
          title: 'PAWNEE EXPRESS TRANSMISSION LINE PROJECT',
          owner:
            '               A Renewable Energy Project Developer from U.S.A',
          info: '     128 km (80 miles) – 345kV S/C & D/C',
          scope:
            '       Transmission Line Engineering & Consultancy Service\n                           on the preparation of 30% Preliminary Plan & Profile Drawings.',
          loading: true,
        },
        {
          image: 'centella.jpg',
          title: 'CENTELLA TRANSMISSION LINE PROJECT',
          client: '                Ferrovial S.A.',
          info: '     250 km (155 miles) – 230kV D/C	\n                           Quantity of the project is 8,000 tons (~17,637,000 lbs).',
          scope:
            '       Inspection of overseas fabrication of the lattice tower structures in Turkey. \n                           Prototype fitting inspections of the lattice tower structures in Turkey.',
          loading: true,
        },
        {
          image: 'steel_pole.png',
          title: '144kV & 240kV STEEL POLE SUPPLY PROJECT',
          owner: '               Alberta Transmission Company (ATCO)',
          info: '     Total of 90 tubular pole structures. \n                           Quantity of the project is 500 tons (~1,100,000 lbs).',
          scope:
            '       Inspection of overseas fabrication of tubular pole structures in India. \n                           Prototype fitting inspections of the tubular pole structures in India.',
          loading: true,
        },
        {
          image: 'expert_witness.jpg',
          title: 'EXPERT WITNESS PROJECT',
          client: '                Stites & Harbison PLLC',
          info: '     Expert witness for a proposed transmission line in Kentucky.',
          scope:
            '       Engineering consultancy and expert witness services on behalf of the landowners.',
          loading: true,
        },
        {
          image: 'solar_racking.png',
          title: 'SOLAR RACKING STRUCTURES SUPPLY PROJECT',
          client: '                InterPlus',
          info: '     Fixed solar racking structures for a solar farm in the Middle East. \n                           Quantity of the project is 2,400 tons (~5,300,000 lbs).',
          scope:
            '       Inspection of fabricated galvanized steel racking structures in Turkey.',
          loading: true,
        },
        {
          image: 'north_america_solar.png',
          title: 'NORTH AMERICA SOLAR LIGHTING',
          info: '     Completed 1000+ sites within Canada and the US.',
          scope:
            '       Supply of engineered lighting poles, solar framing, structural base cabinet, light arms, and accessories.',
          loading: true,
        },
        {
          image: 'nigeria.png',
          title: 'NIGERIA SOLAR TELECOM PROJECTS',
          info: '     400 Rural Telecommunication tower structures in Nigeria.',
          scope:
            '       Supply of engineered telecom poles, solar support framing, battery cabinet and accessories.',
          loading: true,
        },
        {
          image: 'steel_moduler_wind.png',
          title: 'STEEL MODULAR WIND TOWER ENGINEERING WORK',
          client: '                NorthStar Wind',
          info: '     Concept design of modular steel wind tower in the US.',
          scope:
            '       Engineering consultancy and assistance on technology and knowhow transfer between companies.',
          loading: true,
        },
        {
          image: 'wind_tower1.png',
          title: 'WIND TOWER AND FOUNDATION DESIGN',
          client: '                Various global client portfolios.',
          scope:
            '       Engineering consultancy on foundation design, tower design, existing structure assessment, \n                           retrofit projects, platform and climbing accessories.',
          loading: true,
        },
      ],
      width: '',
    }
  },
  methods: {
    onResize() {
      this.width = window.innerWidth
    },
  },
}
</script>

<style scoped>
.v-card__title {
  text-align: center;
}

.centerize {
  display: flex;
  justify-content: center;
}

.mainRow {
  background-color: #e5f0ff;
}

.mainTitle {
  font-weight: 700;
  font-size: 2rem;
  margin: 20px;
}

.cardStyle {
  display: flex;
  flex-direction: column;
}

.den {
  font-family: inherit;
  font-weight: normal;
  margin-left: 2%;
}
</style>
