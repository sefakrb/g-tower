<template>
  <v-row class="centerize ma-0 pa-0">
    <v-col cols="12" class="d-flex">
      <v-card-title>About Us</v-card-title>
      <v-img
        contain
        max-width="20px"
        :src="require('../static/header-dot.png')"
      ></v-img>
    </v-col>
    <v-card class="px-5 pb-10 pt-10" width="80vw" color="#F7FBFD">
      <v-card-text style="font-size: 1.2rem">
        <span style="color: #b1d234">G-Tower</span> is a global support
        structure solutions company.<br />
        <br />
        G-Tower provides tower engineering, inspection, procurement and project
        management services to Power Transmission & Distribution, Wind Energy,
        Solar Energy, Lighting and Telecom industries.
      </v-card-text>
      <v-card-text style="font-size: 1.2rem">
        <ul v-for="item in items" :key="item">
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
      <v-card-text style="font-size: 1.2rem">
        G-Tower’s mission is to be a reliable partner and add value to the
        projects of its customer.
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
        'Proposes cost-effective solutions to technical issues.',
        'Supports local businesses.',
      ],
    }
  },
}
</script>

<style scoped>
.centerize {
  display: flex;
  justify-content: center;
}

.v-card__title {
  margin: 20px;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
}
</style>
