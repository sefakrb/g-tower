<template>
  <v-row v-resize="onResize">
    <app-bar :marketing="true"></app-bar>
    
    <!-- content -->
    <v-col class="mainLayout contentPart" cols="12">
      <v-row id="first-project" class="ma-0 pa-0" style="margin-top: 5% !important">
        <v-col class="d-flex flex-column align-center" :cols="colSize">
          <v-img
            :max-width="currentWidth < 600 ? '60vw' : '40vw'"
            style="border-radius: 15px"
            :src="$t('marketing.firstImage')"
          ></v-img>
        </v-col>

        <v-col style="margin-top: 3%" :cols="colSize">
          <v-card-title
            class="mainTitle"
            :style="currentWidth < 600 ? { 'font-size': '1.9em' } : ''"
          >{{ $t('marketing.mainTitle') }}</v-card-title>
          
          <v-card-text
            style="margin-top: 10%; font-weight: 500"
            :style="currentWidth < 600 ? { 'font-size': '1em' } : { 'font-size': '1.2em' }"
          >{{ $t('marketing.whoWeAre.question') }}</v-card-text>
          
          <v-card-text
            style="font-weight: 300 !important"
            :style="currentWidth < 600 ? { 'font-size': '1em' } : { 'font-size': '1.1em' }"
          >{{ $t('marketing.whoWeAre.answer') }}</v-card-text>
          
          <v-card-text
            style="margin-top: 5%; font-weight: 500"
            :style="currentWidth < 600 ? { 'font-size': '1em' } : { 'font-size': '1.2em' }"
          >{{ $t('marketing.whatWeDo.question') }}</v-card-text>
          
          <v-row class="ma-0 pa-0 d-flex">
            <v-col cols="6">
              <ul>
                <li v-for="(service, index) in $t('marketing.whatWeDo.services1')" :key="index"
                  style="font-weight: 300"
                  :style="currentWidth < 600 ? { 'font-size': '1em' } : { 'font-size': '1.1em' }"
                >{{ service }}</li>
              </ul>
            </v-col>
            <v-col cols="6">
              <ul>
                <li v-for="(service, index) in $t('marketing.whatWeDo.services2')" :key="index"
                  style="font-weight: 300"
                  :style="currentWidth < 600 ? { 'font-size': '1em' } : { 'font-size': '1.1em' }"
                >{{ service }}</li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Projects section -->
      <v-row v-for="(project, index) in $t('marketing.projects')" :key="index"
        :style="project.style"
        :id="project.id"
        class="projectStyle"
      >
        <template v-if="index % 2 === 0">
          <v-col :cols="colSize">
            <v-card-title class="titleStyle">{{ project.title }}</v-card-title>
            <v-card-text v-if="project.description" class="contentStyle">
              {{ project.description }}
            </v-card-text>
            <a
              class="redirectButton"
              :href="project.link"
              target="_blank"
              :style="project.linkStyle || 'text-decoration: underline; color: black'"
            >{{ $t('marketing.learnMore') }}</a>
          </v-col>
          <v-col :cols="colSize" class="d-flex justify-center">
            <v-img
              :max-width="currentWidth < 600 ? '60vw' : '40vw'"
              contain
              style="border-radius: 15px"
              :src="project.image"
            ></v-img>
          </v-col>
        </template>
        <template v-else>
          <v-col :cols="colSize" class="d-flex justify-center">
            <v-img
              :max-width="currentWidth < 600 ? '60vw' : '40vw'"
              contain
              style="border-radius: 15px"
              :src="project.image"
            ></v-img>
          </v-col>
          <v-col :cols="colSize">
            <v-card-title class="titleStyle">{{ project.title }}</v-card-title>
            <v-card-text v-if="project.description" class="contentStyle">
              {{ project.description }}
            </v-card-text>
            <a
              class="redirectButton"
              :href="project.link"
              target="_blank"
              :style="project.linkStyle || 'text-decoration: underline; color: black'"
            >{{ $t('marketing.learnMore') }}</a>
          </v-col>
        </template>
      </v-row>
    </v-col>

    <!-- footer -->
    <v-row class="mainLayout ma-0 pa-0">
      <v-col cols="12" class="ma-0 pa-0">
        <v-footer color="#181818" style="margin-top: 8rem">
          <v-col cols="2">
            <a
              :href="$t('marketing.socialLinks.linkedin')"
              target="_blank"
              style="text-decoration: none"
            >
              <v-icon color="white">mdi-linkedin</v-icon>
            </a>
            <a
              :href="$t('marketing.socialLinks.youtube')"
              target="_blank"
              style="text-decoration: none"
            >
              <v-icon color="white">mdi-youtube</v-icon>
            </a>
          </v-col>
          <v-col cols="10">
            <v-card-text
              style="display: flex; justify-content: flex-end; color: white"
            >{{ $t('marketing.copyright') }}</v-card-text>
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
