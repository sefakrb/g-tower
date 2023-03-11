<template>
  <v-row class="mainLayout" v-resize="onResize">
    <app-bar :marketing="true"></app-bar>
    <!-- sidebar -->
    <!-- <v-col class="sideBarLayout" cols="1">
      <v-card
        height="100%"
        rounded="0"
        elevation="0"
        :width="currentWidth < 600 ? '100%' : '70%'"
        class="sideBarCardLayout"
      >
        <v-img
          max-height="72px"
          contain
          class="mt-7"
          :src="require('../static/main-logo.svg')"
        ></v-img>
        <v-divider class="mt-10"></v-divider>

        <div class="sideBar" @click="pushPage('/contactUs')">Contact Us</div>
        <div class="sideBar" @click="pushPage('/')">Home</div>
      </v-card>
    </v-col> -->

    <!-- content -->
    <v-col class="contentPart" cols="12">
      <v-row
        id="first-project"
        class="ma-0 pa-0"
        style="margin-top: 5% !important"
      >
        <v-col class="d-flex flex-column align-center" :cols="colSize">
          <v-img
            :max-width="currentWidth < 600 ? '60vw' : '40vw'"
            class=""
            style="border-radius: 15px"
            :src="require('../static/marketing/first-image.jpg')"
          ></v-img>
        </v-col>

        <v-col style="margin-top: 3%" :cols="colSize">
          <v-card-title
            class="mainTitle"
            :style="currentWidth < 600 ? { 'font-size': '1.9em' } : ''"
            >REFERENCES & PRESENTATIONS</v-card-title
          >
          <v-card-text
            style="margin-top: 10%; font-weight: 500"
            :style="
              currentWidth < 600
                ? { 'font-size': '1em' }
                : { 'font-size': '1.2em' }
            "
          >
            Who we are?</v-card-text
          >
          <v-card-text
            style="font-weight: 300 !important"
            :style="
              currentWidth < 600
                ? { 'font-size': '1em' }
                : { 'font-size': '1.1em' }
            "
          >
            G-Tower is an engineering & inspection services company focusing on
            tower & pole portion of the energy infra-structure
            projects</v-card-text
          >
          <v-card-text
            style="margin-top: 5%; font-weight: 500"
            :style="
              currentWidth < 600
                ? { 'font-size': '1em' }
                : { 'font-size': '1.2em' }
            "
          >
            What we do?</v-card-text
          >
          <v-row class="ma-0 pa-0 d-flex">
            <v-col cols="6">
              <ul>
                <li
                  style="font-weight: 300"
                  :style="
                    currentWidth < 600
                      ? { 'font-size': '1em' }
                      : { 'font-size': '1.1em' }
                  "
                >
                  Engineering Services
                </li>
                <li
                  style="font-weight: 300"
                  :style="
                    currentWidth < 600
                      ? { 'font-size': '1em' }
                      : { 'font-size': '1.1em' }
                  "
                >
                  Consulting Services
                </li>
                <li
                  style="font-weight: 300"
                  :style="
                    currentWidth < 600
                      ? { 'font-size': '1em' }
                      : { 'font-size': '1.1em' }
                  "
                >
                  Inspection Services
                </li>
              </ul>
            </v-col>
            <v-col cols="6">
              <ul>
                <li
                  style="font-weight: 300"
                  :style="
                    currentWidth < 600
                      ? { 'font-size': '1em' }
                      : { 'font-size': '1.1em' }
                  "
                >
                  Manufacturing Inspection
                </li>
                <li
                  style="font-weight: 300"
                  :style="
                    currentWidth < 600
                      ? { 'font-size': '1em' }
                      : { 'font-size': '1.1em' }
                  "
                >
                  Prototype Inspection
                </li>
                <li
                  style="font-weight: 300"
                  :style="
                    currentWidth < 600
                      ? { 'font-size': '1em' }
                      : { 'font-size': '1.1em' }
                  "
                >
                  Third Party Inspection
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>

        <!-- <v-col class="ma-0 pa-0" style="margin-top: 2rem !important" cols="12">
          <v-divider></v-divider>
        </v-col> -->
      </v-row>

      <v-row style="width: 100%" class="projectStyle" id="second-project">
        <v-col :cols="colSize">
          <v-card-title class="titleStyle">INSPECTION FLYER</v-card-title>
          <v-card-text class="contentStyle"
            >Supporting Good Power with our experienced, in-house and skilled
            staff in three countries</v-card-text
          >
          <a
            class="redirectButton"
            href="https://g-tower.com/wp-content/uploads/2022/09/G-Tower_Inspection_Flyer.pdf"
            target="_blank"
            >Learn More</a
          >
        </v-col>

        <v-col class="centerize" :cols="colSize">
          <v-img
            :max-width="currentWidth < 600 ? '60vw' : '40vw'"
            contain
            class=""
            style="border-radius: 15px"
            :src="require('../static/marketing/second-image.png')"
          ></v-img>
        </v-col>
      </v-row>

      <v-row class="projectStyle" id="third-project">
        <v-col :cols="colSize" class="d-flex justify-center">
          <v-img
            :max-width="currentWidth < 600 ? '60vw' : '40vw'"
            contain
            class=""
            :src="require('../static/marketing/third-image.png')"
          ></v-img>
        </v-col>
        <v-col :cols="colSize">
          <v-card-title class="titleStyle"
            >WHY WORK WITH G-TOWER AS YOUR QA/QC PARTNER</v-card-title
          >

          <a
            class="redirectButton"
            href="https://g-tower.com/wp-content/uploads/2022/09/Why_Work_G-Tower.pdf"
            target="_blank"
            style="text-decoration: underline; color: black"
            >Learn More</a
          >
        </v-col>
      </v-row>

      <v-row class="projectStyle" id="fourth-project">
        <v-col :cols="colSize">
          <v-card-title class="titleStyle"
            >ENGINEERING SERVICES FLYER</v-card-title
          >
          <v-card-text class="contentStyle"
            >G-Tower Engineers provide tailored engineering solutions for
            various industries. Like power transmission, wind power, solar
            power, telecommunication, lighting.</v-card-text
          >
          <a
            class="redirectButton"
            href="https://g-tower.com/wp-content/uploads/2022/09/G-Tower-Engineering-Services-Flyer.jpg"
            target="_blank"
            style="text-decoration: underline; color: black"
            >Learn More</a
          >
        </v-col>

        <v-col :cols="colSize" class="d-flex justify-center">
          <v-img
            :max-width="currentWidth < 600 ? '60vw' : '40vw'"
            style="border-radius: 15px"
            contain
            class=""
            :src="require('../static/marketing/fourth-image.jpg')"
          ></v-img>
        </v-col>
      </v-row>

      <v-row class="projectStyle" id="fifth-project">
        <v-col :cols="colSize" class="d-flex justify-center">
          <v-img
            :max-width="currentWidth < 600 ? '60vw' : '40vw'"
            contain
            class=""
            style="border-radius: 15px"
            :src="require('../static/marketing/fifth-image.jpg')"
          ></v-img>
        </v-col>
        <v-col :cols="colSize">
          <v-card-title class="titleStyle"
            >OVERSEAS FABRICATION INSPECTION SERVICES</v-card-title
          >
          <a
            class="redirectButton"
            href="https://g-tower.com/wp-content/uploads/2022/09/G-Tower_Inspection_Services.pdf"
            target="blank"
            style="text-decoration: underline; color: black"
            >Learn More</a
          >
        </v-col>
      </v-row>

      <v-row class="projectStyle" id="sixth-project">
        <v-col :cols="colSize">
          <v-card-title class="titleStyle">ENGINEERING SERVICES</v-card-title>
          <v-card-text class="contentStyle"
            >G-Tower is an independent tower solutions company. G-Tower provides
            engineering services to renewable energy infra-structure
            projects.</v-card-text
          >
          <a
            class="redirectButton"
            href="https://g-tower.com/wp-content/uploads/2022/09/G-Tower_Engineering_Services.pdf"
            target="_blank"
            style="text-decoration: underline; color: black"
            >Learn More</a
          >
        </v-col>

        <v-col :cols="colSize" class="d-flex justify-center">
          <v-img
            :max-width="currentWidth < 600 ? '60vw' : '40vw'"
            contain
            class=""
            style="border-radius: 15px"
            :src="require('../static/marketing/sixth-image.jpg')"
          ></v-img>
        </v-col>
      </v-row>
    </v-col>

    <!-- footer -->
    <v-row class="ma-0 pa-0">
      <v-col cols="12" class="ma-0 pa-0">
        <v-footer color="#181818" style="margin-top: 8rem">
          <v-col cols="2">
            <a
              href="https://www.linkedin.com/company/g-tower/"
              target="_blank"
              style="text-decoration: none"
            >
              <v-icon color="white">mdi-linkedin</v-icon>
            </a>
            <a
              href="https://www.youtube.com/@g-tower6904"
              target="_blank"
              style="text-decoration: none"
            >
              <v-icon color="white">mdi-youtube</v-icon>
            </a>
          </v-col>
          <v-col cols="10">
            <v-card-text
              style="display: flex; justify-content: flex-end; color: white"
              >[© 2023] G-Tower, All Rights Reserved.</v-card-text
            >
          </v-col>
        </v-footer>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import AppBar from './AppBar.vue'
export default {
  components: { AppBar },
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
          link: 'https://g-tower.com/wp-content/uploads/2022/09/Why_Work_G-Tower.pdf',
        },
        {
          image: 'G-Tower_Engineering_Services-300x169.png',
          text: 'Engineering Services Flyer',
          link: 'https://g-tower.com/wp-content/uploads/2022/09/G-Tower-Engineering-Services-Flyer.jpg',
        },
        {
          image: 'G-Tower_Inspection_Services-300x169.png',
          text: 'Inspection Services Presentation',
          link: 'https://g-tower.com/wp-content/uploads/2022/09/Why_Work_G-Tower.pdf',
        },
        {
          image: 'G-Tower_Engineering_Services-300x169.png',
          text: 'Engineering Services Presentation',
          link: 'https://g-tower.com/wp-content/uploads/2022/09/G-Tower_Engineering_Services.pdf',
        },
      ],
      currentWidth: '',
    }
  },
  methods: {
    pushPage(page) {
      this.$router.push({ path: page })
    },
    onResize() {
      this.currentWidth = window.innerWidth
      if (window.innerWidth < 600) {
        this.colSize = '12'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.colSize = '5'
      } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
        this.colSize = '6'
      } else {
        this.colSize = '6'
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800&display=swap');

.mainLayout {
  font-family: 'Jost', sans-serif !important;

  max-width: 100vw;
  margin: 0;
  padding: 0;
}

.sideBarLayout {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.sideBarCardLayout {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  border-right: 1px solid black;
}

.sideBar {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin: 20%;
  margin-top: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.sideBar:hover {
  cursor: pointer;
}

.contentPart {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
}

.projectStyle {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 4% !important;
}

.mainTitle {
  font-style: normal;
  font-size: 2.5em;
  font-weight: 800;
  color: #8fcc6e;

  line-height: 110%;

  justify-content: center;
  align-content: center;
  text-align: center;
  word-break: break-word;
}

.titleStyle {
  font-style: normal;
  font-size: 1.8em;
  font-weight: 500;
  color: #759ecc;

  line-height: 100%;

  margin-bottom: 4%;

  justify-content: center;
  align-content: center;
  text-align: center;
  word-break: break-word;
}

.redirectButton {
  font-style: normal;
  font-weight: 500;

  display: flex;
  justify-content: flex-end;
  margin-top: 5%;
  margin-right: 5%;

  text-decoration: underline;
  color: black;
}

.contentStyle {
  font-style: normal;
  font-size: 1em;
  text-align: center;
  word-break: break-word;
}

.centerize {
  display: flex;
  justify-content: center;
  align-items: center;
}

.theme--light.v-divider {
  border-color: rgba(1, 1, 1, 1) !important;
}
</style>
