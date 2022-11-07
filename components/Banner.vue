<template>
  <v-row class="centerize">
    <v-col class="centerize flex-column" cols="12" md="6">
      <v-card-title class="centerize font-weight-bold" style="font-size: 2.5rem"
        >Stop Climate Change</v-card-title
      >
      <v-card-text class="centerize" style="font-size: 1.2rem"
        >Cooperate with us and help the nature.</v-card-text
      >
      <v-btn
        small
        color="green"
        style="text-transform: unset !important; color: white"
        >Who We Are?</v-btn
      >
    </v-col>
    <v-col cols="12" md="6" class="centerize ma-0 pa-0">
      <v-img
        max-height="50vh"
        contain
        class="ma-0"
        :src="require('../static/banner-image.png')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style scoped>
.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
