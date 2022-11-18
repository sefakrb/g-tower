<template>
  <v-row class="mainRow centerize">
    <v-col cols="12" class="d-flex pb-0">
      <v-card-title class="mainTitle">Projects</v-card-title>
      <v-img
        contain
        max-width="20px"
        class="mt-1"
        :src="require('../static/header-dot.png')"
      ></v-img>
    </v-col>

    <v-carousel
      hide-delimiters
      v-model="model"
      style="width: 80vw; scroll-behavior: auto"
      height="70vh"
    >
      <v-carousel-item v-for="item in items" :key="item.image">
        <v-card flat class="cardStyle" width="100%" height="100%" rounded="lg">
          <v-progress-circular
            v-if="item.loading"
            indeterminate
            color="rgba(0, 0, 0, 0.6)"
            style="z-index: 2; position: absolute; margin-bottom: 10%"
          ></v-progress-circular>
          <v-img
            max-height="60%"
            contain
            :src="require('../static/projects/' + item.image)"
            style="z-index: 1"
            @load="item.loading = false"
          >
          </v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text style="overflow: auto">{{ item.text }}</v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script>
import { isTSEntityName } from '@babel/types'

export default {
  data() {
    return {
      model: null,
      items: [
        {
          image: 'wataynikaneyap.png',
          title: 'WATAYNIKANEYAP POWER PROJECT of FORTIS',
          text: 'G-Tower provided transmission line engineering consultancy services and prepared 30% preliminary Plan & Profile drawings for Phase-1 which is 300km long 230kV S/C transmission line in Ontario.',
          loading: true,
        },
        {
          image: 'east_west_tie_transmission.jpg',
          title: 'EAST-WEST TIE TRANSMISSION LINE PROJECT of NEXTERA',
          text: 'G-Tower has been Engineer of Record for the lattice towers in this 450km long 230kV D/C transmission line project in Ontario. G-Tower performed overseas fabrication inspection of 20000 metric tons of lattice steel in Turkey.',
          loading: true,
        },
        {
          image: 'samson.jpg',
          title: 'SAMSON 345kV TRANSMISSION LINE PROJECT of RES AMERICAS',
          text: 'G-Tower has been Engineer of Record for the lattice towers. G-Tower engineered all the lattice structures up to 100% IFC Level including drafting and detailing. G-Tower assisted its client in sourcing these towers from overseas. G-Tower performed prototype and mass production inspection of lattice steel in Turkey.',
          loading: true,
        },
        {
          image: 'overland_transmission.png',
          title: 'OVERLAND TRANSMISSION LINE PROJECT of NRS',
          text: 'G-Tower provides transmission line engineering consultancy to this 80 miles long 345kV transmission line project in Colorado. G-Tower prepares 30% preliminary level Plan and Profile drawings.',
          loading: true,
        },
        {
          image: 'centella.jpg',
          title: 'CENTELLA 220kV TRANSMISSION LINE PROJECT of FERROVIAL',
          text: 'G-Tower provided prototype and fabrication inspection services in Turkey for this transmission line project in Chile. G-Tower inspected over 8000 metric tons of lattice steel.',
          loading: true,
        },

        {
          image: 'steel_pole.png',
          title: '144kV & 240kV STEEL POLE OVERSEAS SUPPLY PROJECT of ATCO',
          text: 'G-Tower provided fabrication inspection of over 500 tons of tubular steel in India for various ATCO Projects in Alberta.',
          loading: true,
        },
        {
          image: 'expert_witness.jpg',
          title: 'EXPERT WITNESS PROJECT of STITES & HARBISON ',
          text: 'G-Tower attended to the Court as Expert Witness and provided engineering consultancy regarding to a transmission line project in Kentucky.',
          loading: true,
        },
        {
          image: 'solar_racking.png',
          title: 'SOLAR RACKING STRUCTURES SUPPLY PROJECT of INTERPLUS',
          text: 'G-Tower inspected fabrication of approximately 2400 metric tons of galvanized steel racking structures in Turkey for a utility scale solar farm project in the Middle East.',
          loading: true,
        },
        {
          image: 'north_america_solar.png',
          title: 'NORTH AMERICA SOLAR LIGHTING',
          text: 'G-Tower engineered and supplied smart off-grid structures including lighting poles, solar framing, structural base cabinet, light arms and accessories for various projects in the U.S and Canada.',
          loading: true,
        },
        {
          image: 'nigeria.png',
          title: 'NIGERIA SOLAR TELECOM SITES',
          text: 'G-Tower engineered and supplied solar telecom structures including monopole, solar racking structures, fence, battery cabinets and accessories for 400 rural sites in Nigeria.',
          loading: true,
        },
        {
          image: 'steel_moduler_wind.png',
          title: 'STEEL MODULAR WIND TOWER ENGINEERING WORK of NORTHSTAR WIND',
          text: 'G-Tower provided engineering consultancy and assisted Northstar with technology transfer of its Intellectual Property of Steel Modular Wind Tower Concept from U.S.A to Brazil.',
          loading: true,
        },
        {
          image: 'wind_tower1.png',
          title: 'WIND TOWER AND FOUNDATION DESIGN for DISTRIBUTED WIND ',
          text: 'G-Tower provided tower engineering services, foundation design services, existing structure assessment, retrofit projects consultancy, platform and climbing accessories design to 10+ distributed wind turbine manufacturers in the US. ',
          loading: true,
        },
      ],
    }
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
  margin: 20px;
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
  justify-content: center;
  align-items: center;
}
</style>
