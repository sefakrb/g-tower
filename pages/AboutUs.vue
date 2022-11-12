<template>
  <v-row class="centerize">
    <v-col cols="12" class="d-flex">
      <v-card-title>About Us</v-card-title>
      <v-img
        contain
        max-width="20px"
        class="mt-1"
        :src="require('../static/header-dot.png')"
      ></v-img>
    </v-col>
    <v-card class="px-2" width="60vw" color="#F7FBFD">
      <v-card-text>
        <span style="color: #b1d234">G-Tower</span> is a global support
        structure solutions company.<br />
        <br />
        G-Tower provides tower engineering, inspection, procurement and project
        management services to Power Transmission & Distribution, Wind Energy,
        Solar Energy, Lighting and Telecom industries.
      </v-card-text>
      <v-card-text>
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
      <v-card-text>
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
  margin: 20px;
}

.v-card__title {
  margin: 20px;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
}
</style>
