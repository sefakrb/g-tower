<template>
  <v-row class="d-felx justify-center">
    <v-card class="px-2" width="60vw" color="#F7FBFD">
      <v-card-text>
        <span style="color: #b1d234">G-Tower</span> is a global support
        structure (tower & pole) solutions company.<br />
        <br />
        G-Tower provides tower engineering, inspection, procurement and project
        management services to the utility scale wind, small wind, power
        transmission & distribution, lighting, solar, offshore wind and wireless
        industries.
      </v-card-text>
      <v-card-text>
        <ul
          style="color: #b1d234; -webkit-text-fill-color: rgba(0, 0, 0, 0.6)"
          v-for="item in items"
          :key="item"
        >
          <div class="d-flex">
            <v-img
              contain
              max-width="10px"
              class="mr-3"
              :src="require('../static/dot.png')"
            ></v-img
            >{{ item }}
          </div>
        </ul>
      </v-card-text>
      <v-card-text>
        G-Tower’s mission is to be a reliable partner in order to enhance and
        add value to the projects of its customer.
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'Treats each customer and project as its own.',
        'Delivers more than what is expected.',
        'Strives to provide quality engineering.',
        'Commits delivering reliable, comprehensive services to meet the needs of its customers.',
        'Supports clean energy.',
        'Offers sound advice and timely cost-effective solutions to technical issues.',
        'Supports local businesses.',
      ],
    }
  },
}
</script>

<style></style>
