<template>
  <v-row
    v-resize="onResize"
    class="ma-0 mt-5 pa-0 d-flex justify-center"
    style="width: 100vw"
  >
    <v-col cols="12" class="d-flex justify-center">
      <v-card-title style="color: red; font-size: 2.7em; font-weight: 800"
        >REFERENCES & PRESENTATIONS</v-card-title
      >
    </v-col>
    <v-col style="margin-bottom: 3%" cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col v-for="item in presentations" :key="item.text" :cols="colSize">
      <v-card flat>
        <v-img
          contain
          :src="require('../static/presentations/' + item.image)"
        ></v-img>
        <v-card-text class="d-flex justify-center align-center">
          <a
            style="
              text-decoration: none;
              font-size: 1.5em;
              font-weight: 600;
              color: #b1d234;
            "
            target="_blank"
            :href="item.link"
            >{{ item.text }}</a
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      colSize: '',
      presentations: [
        {
          image: 'G-Tower_Inspection_Flyer-300x169.png',
          text: 'Inspection Services Flyer',
          link: 'https://g-tower.com/wp-content/uploads/2022/09/G-Tower_Inspection_Flyer.pdf',
        },
        {
          image: 'Why_Work_G-Tower-300x169.png',
          text: 'Why work with G-Tower',
          link: 'https://g-tower.com/wp-content/uploads/2022/08/Why_Work_G-Tower.pdf',
        },
        {
          image: 'G-Tower_Engineering_Services-300x169.png',
          text: 'Engineering Services Flyer',
          link: 'https://g-tower.com/wp-content/uploads/2022/09/G-Tower-Engineering-Services-Flyer.jpg',
        },
        {
          image: 'G-Tower_Inspection_Services-300x169.png',
          text: 'Inspection Services Presentation',
          link: 'https://g-tower.com/wp-content/uploads/2022/08/Why_Work_G-Tower.pdf',
        },
        {
          image: 'G-Tower_Engineering_Services-300x169.png',
          text: 'Engineering Services Presentation',
          link: 'https://g-tower.com/wp-content/uploads/2022/09/G-Tower_Engineering_Services.pdf',
        },
      ],
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.colSize = '8'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.colSize = '5'
      } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
        this.colSize = '4'
      } else {
        this.colSize = '4'
      }
    },
  },
}
</script>

<style></style>
