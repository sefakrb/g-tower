<template>
  <v-row v-resize="onResize" class="ma-0 mainRow centerize">
    <v-col cols="12" class="d-flex pb-0">
      <v-card-title class="mainTitle">{{ $t('projects.title') }}</v-card-title>
    </v-col>
    <v-slide-group
      style="padding: 1rem"
      v-model="model"
      center-active
      show-arrows
      selected
      active-class="activeClassStyle"
      mandatory
      @click:next="nextSlide()"
      @click:prev="previousSlide()"
    >
      <v-slide-item
        v-for="item in $t('projects.items')"
        :key="item.image"
        class="passiveClassStyle"
      >
        <v-card flat class="cardStyle" :width="cardWidth" rounded="lg">
          <!-- loading image -->
          <v-progress-linear
            v-if="loading"
            indeterminate
            color="rgb(177, 210, 52)"
          ></v-progress-linear>

          <!-- image -->
          <v-img
            min-height="50vh"
            max-height="50vh"
            contain
            :src="'https://g-tower.com/projects/' + item.image"
            @load="loading = false"
          >
          </v-img>

          <!-- title -->
          <v-card-title
            style="
              font-size: 1.6rem;
              font-weight: 700;
              justify-content: center;
              min-height: 15%;
            "
            >{{ item.title }}</v-card-title
          >

          <!-- content -->
          <div style="overflow: auto" class="d-flex">
            <v-card-text
              style="
                overflow: auto;
                font-size: 1.2rem;
                white-space: pre-line;
                margin-bottom: 2%;
              "
            >
              <div
                style="font-weight: 700; font-size: 1.1rem"
                v-if="item.client"
              >
                {{ $t('projects.details.client') }}:<span class="contentStyle">{{ item.client }}</span>
              </div>

              <div
                style="font-weight: 700; font-size: 1.1rem"
                v-if="item.owner"
              >
                {{ $t('projects.details.owner') }}:<span class="contentStyle">{{ item.owner }}</span>
              </div>

              <div style="font-weight: 700; font-size: 1.1rem" v-if="item.info">
                {{ $t('projects.details.projectInfo') }}:<span class="contentStyle">{{ item.info }}</span>
              </div>

              <div style="font-weight: 700; font-size: 1.1rem">
                {{ $t('projects.details.ourScope') }}:<span class="contentStyle">{{ item.scope }}</span>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      model: null,
      width: '',
      cardWidth: '',
      loading: true
    }
  },
  methods: {
    previousSlide() {
      this.model -= 1
    },

    nextSlide() {
      this.model += 1
      setTimeout(() => {
        this.model += 1
        this.model -= 1
      }, 200)
    },

    onResize() {
      this.width = window.innerWidth
      if (this.width < 600) {
        this.model = 0
        this.cardWidth = '60vw'
      } else if (this.width > 600 && this.width < 900) {
        this.model = 0
        this.cardWidth = '40vw'
      } else if (this.width > 900 && this.width < 1200) {
        this.model = 1
        this.cardWidth = '30vw'
      } else {
        this.model = 1
        this.cardWidth = '25vw'
      }
    },
  },

  watch: {
    model: {
      handler(n, o) {
        if (n === 10) {
          this.model = 1
          setTimeout(() => {
            this.nextSlide()
            this.model = 1
          }, 200)
        }
      },
      deep: true,
    },
  },
}

</script>

<style scoped>
.passiveClassStyle {
  margin: 40px;
  opacity: 0.9;
  background: rgba(240, 240, 240);
  filter: blur(0.03rem);
}
.activeClassStyle {
  opacity: 1 !important;
  background: white;

  filter: blur(0px) !important;
}

.v-card__title {
  text-align: center;
}

.centerize {
  display: flex;
  justify-content: center;
}

.mainRow {
}

.mainTitle {
  font-weight: 700;
  font-size: 2rem;
  margin: 20px;
}

.cardStyle {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3) !important;
  border-radius: 8px;
}

::v-deep .theme--light.v-icon.v-icon.v-icon--disabled,
::v-deep .theme--light.v-icon {
  color: white !important;
  border: 1px solid white;
  border-radius: 40px;
  background-color: #43d000;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.4));
}

::v-deep .v-icon.v-icon {
  font-size: 2.5rem;
}

.contentStyle {
  font-weight: normal;
  font-size: 1rem;
  color: #2e2e2e;
  margin-left: 4px;
}
</style>
