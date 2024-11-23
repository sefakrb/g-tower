<template>
  <v-row class="centerize ma-0 pa-0">
    <v-col cols="12" class="d-flex">
      <v-card-title>{{ $t('aboutUs.title') }}</v-card-title>
    </v-col>
    <v-card class="px-5 pb-10 pt-10" width="95vw" color="#F7FBFD">
      <v-card-text style="font-size: 1rem; font-weight: 500; color: #0e0e0e">
        <span style="color: #43d000; font-weight: 900">G-Tower</span>
        {{ $t('aboutUs.description.part1') }}<br />
        <br />
        {{ $t('aboutUs.description.part2') }}
      </v-card-text>
      <v-card-text style="font-size: 1.2rem">
        <ul v-for="(item, index) in $t('aboutUs.items')" :key="index" style="margin-bottom: 0.3rem">
          <div class="d-flex">
            <v-img
              contain
              max-width="10px"
              class="mr-3"
              :src="'https://g-tower.com/dot.png'"
            ></v-img>
            <span style="font-weight: 500; font-size: 1rem; color: #0e0e0e">
              {{ item }}
            </span>
          </div>
        </ul>
      </v-card-text>
      <v-card-text style="font-size: 1rem; font-weight: 500; color: #0e0e0e">
        {{ $t('aboutUs.vision') }}
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
