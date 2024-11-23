<template>
  <v-row v-resize="onResize" class="ma-0 team centerize">
    <v-col :style="{ 'padding-left': titleSize }" cols="12" class="d-flex">
      <v-card-title class="mainTitle">{{ $t('ourTeam.title') }}</v-card-title>
    </v-col>

    <v-col v-for="item in items" :key="item.image" class="pa-0" 
      :class="cardSize === '5' ? 'ma-2' : 'ma-10'" :cols="cardSize">
      <v-card height="100%" class="ma-0 pa-0 cardStyle" color="#EFFFEF" rounded="lg">
        <v-card rounded="lg" flat color="#EFFFEF" height="70%" width="100%" class="d-flex justify-center">
          <v-img height="100%" width="100%" :src="'https://g-tower.com/employee/' + item.image"
            :lazy-src="'https://g-tower.com/employee/' + item.image">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="black"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
        <v-card-title class="nameTitle pb-0" :class="cardSize === '5' ? 'nameTitlePhone' : 'nameTitle'">
          {{ item.name }} {{ item.surname }}
        </v-card-title>
        <v-card-title class="role pt-0" :class="cardSize === '5' ? 'rolePhone' : 'role'">
          {{ $t(`ourTeam.positions.${item.positionKey}`) }}
        </v-card-title>
        <div class="buttonStyle" style="width: 100%">
          <v-btn small text depressed @click="bio(item)">
            {{ $t('ourTeam.more') }}<v-icon>mdi-arrow-right-thin</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-col>

    <v-dialog @click:outside="resetScroll()" v-if="user.image" v-model="dialog" width="80vw">
      <v-card style="overflow-x: hidden" min-height="60vh" v-model="user">
        <v-row class="ma-0 pa-0 centerize">
          <div style="width: 100%; height: 2%" class="d-flex justify-end pa-2">
            <v-icon @click="dialog = false, resetScroll()">mdi-close</v-icon>
          </div>
          <v-col :cols="cardSize !== '2' ? '10' : '4'" class="centerize align-center">
            <v-card flat class="centerize align-center flex-column" rounded="lg">
              <v-img max-width="75%" :src="'https://g-tower.com/employee/' + user.image"></v-img>
              <a style="text-decoration: none" class="mt-5" :href="'https://linkedin.com/' + user.linkedin"
                target="_blank">
                <v-icon large style="max-width: 75%" color="blue">mdi-linkedin</v-icon>
              </a>
            </v-card>
          </v-col>

          <v-col :cols="cardSize !== '2' ? '10' : '8'" class="centerize flex-column">
            <v-card-title class="dialogTitle pb-0">{{ user.name }}</v-card-title>
            <v-card-title class="dialogTitle">{{ user.surname }}</v-card-title>
            <v-card-text class="dialogText">{{ $t(`ourTeam.positions.${user.positionKey}`) }}</v-card-text>
            <v-card-text>{{ $t(`ourTeam.bios.${user.bioKey}`) }}</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
      {
          image: 'gunes_demirbas.jpg',
          name: 'Gunes',
          surname: 'Demirbas, PE',
          positionKey: 'president',
          bioKey: 'gunesDemirbas',  // Add this bioKey
          linkedin: '/in/gunes-demirbas-pe-06b67930/',
        },
        {
          image: 'ali_gulgeze.jpg',
          name: 'Ali',
          surname: 'Gulgeze, PEng',
          positionKey: 'vicePresident',
          bioKey: 'aliGulgeze',  // Add this bioKey
          linkedin: '/in/ali-gulgeze/',
        },
        {
          image: 'sabrina_ageca.jpg',
          name: 'Sabrina',
          surname: 'Ageca, CWB',
          positionKey: 'qualityManager',
          bioKey: 'sabrinaAgeca',  // Add this bioKey
          linkedin: '/in/sabrina-ageca-b1908b175/',
        },
        {
          image: 'mahir_ergin.jpg',
          name: 'Mahir',
          surname: 'Ergin',
          positionKey: 'regionalManager',
          bioKey: 'mahirErgin',  // Add this bioKey
          linkedin: '/in/hasip-mahir-ergin-ba80a710a/',
        },
        {
          image: 'selma_haciraifoglu.jpg',
          name: 'Selma',
          surname: 'Haciraifoglu',
          positionKey: 'commercialManager',
          bioKey: 'selmaHaciraifoglu',  // Add this bioKey
          linkedin: '/in/selma-kaldzija-hac%C4%B1raifo%C4%9Flu-80417113b/',
        },
          {
      image: 'alper_yavuzer.jpg',
      name: 'Alper',
      surname: 'Yavuzer',
      positionKey: 'seniorQualityEngineer',
      bioKey: 'alperYavuzer',
      linkedin: '/in/alper-yavuzer-379263161/',
    },
    {
      image: 'ensar_duran.jpg',
      name: 'Ensar',
      surname: 'Duran',
      positionKey: 'projectEngineer',
      bioKey: 'ensarDuran',
      linkedin: '/in/ensar-duran-487548142/',
    },


        {
          image: 'nazife_nur_iscan.jpg',
          name: 'Nazife',
          surname: 'Mert',
          positionKey: 'projectEngineer',
          bioKey: 'nazifeMert',
          linkedin: '/in/nazife-nur-i%C5%9Fcan-356278133/',
        },
        {
          image: 'emre_insel.png',
          name: 'Emre',
          surname: 'Insel, PE, PEng',
          positionKey: 'structuralAdvisor',
          bioKey: 'emreInsel',
          linkedin: '/in/emre-insel-msc-pe-pmp/',
        },
        {
          image: 'mehmet_gurdin.jpg',
          name: 'Mehmet',
          surname: 'Gurdin',
          positionKey: 'strategicPartner',
          bioKey: 'mehmetGurdin',
          linkedin: '/in/mehmet-emin-gurdin-62ba0210/',
        },
        {
          image: 'akin_veske.jpg',
          name: 'Akin',
          surname: 'Veske',
          positionKey: 'qualityInspector',
          bioKey: 'akinVeske',
          linkedin: '/in/ak%C4%B1n-veske-635b56190/',
        },
        {
          image: 'serhat-boztogan.jpg',
          name: 'Serhat',
          surname: 'Boztogan',
          positionKey: 'mechanicalEngineer',
          bioKey: 'serhatBoztogan',
          linkedin: '/in/serhat-bozto%C4%9Fan/',
        },
        {
          image: 'alperen-eroglu.png',
          name: 'Alperen',
          surname: 'Eroglu',
          positionKey: 'designEngineer',
          bioKey: 'alperenEroglu',
          linkedin: '/in/alpereneroğlu/',
        },
        {
          image: 'seda_yuksel.jpg',
          name: 'Seda Serife',
          surname: 'Yuksel',
          positionKey: 'qualityEngineer',
          bioKey: 'sedaYuksel',
          linkedin: '/in/seda-ş-yüksel-6a6b8110b/',
        },
        {
          image: 'ekrem_targitay.jpeg',
          name: 'Ekrem',
          surname: 'Targitay',
          positionKey: 'qualityInspector',
          bioKey: 'ekremTargitay',
          linkedin: '/in/ekrem-targıtay-/',
        },
        {
          image: 'gozde_isik.jpeg',
          name: 'Gozde',
          surname: 'Isik',
          positionKey: 'structuralEngineer',
          bioKey: 'gozdeIsik',
          linkedin: 'in/g%C3%B6zde-i%C5%9F%C4%B1k-0866911a9/',
        },
        {
          image: 'ertan_surucu.jpg',
          name: 'Ertan',
          surname: 'Surucu',
          positionKey: 'structuralEngineer',
          bioKey: 'ertanSurucu',
          linkedin: '/in/ertan-s%C3%BCr%C3%BCc%C3%BC-360ab91b8/',
        },
        {
          image: 'emre_manavoglu.jpeg',
          name: 'Emre',
          surname: 'Manavoglu',
          positionKey: 'projectEngineer',
          bioKey: 'emreManavoglu',
          linkedin: '/in/emre-manavo%C4%9Flu/',
        },
        {
          image: 'gungor_sahin.png',
          name: 'Gungor',
          surname: 'Sahin',
          positionKey: 'transmissionLineEngineer',
          bioKey: 'gungorSahin',
          linkedin: '/in/gungor-sahin/',
        }

      ],
      cardSize: false,
      titleSize: null,

      dialog: false,
      user: {},
    }
  },

  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.cardSize = '5'
        this.titleSize = '15%'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.cardSize = '3'
        this.titleSize = '11%'
      } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
        this.cardSize = '3'
        this.titleSize = '10%'
      } else {
        this.cardSize = '2'
        this.titleSize = '4%'
      }
    },
    bio(item) {
      this.dialog = true
      this.user = item
    },
    resetScroll() {
      if (
        document.getElementsByClassName('v-dialog--active')[0] !== undefined
      ) {
        document.getElementsByClassName('v-dialog--active')[0].scrollTop = 0
      }
    },
  },
}
</script>

<style scoped>
.team {
  background-image: url('https://g-tower.com/team-background.png');
  background-repeat: no-repeat, no-repeat;
}

.go-top {
  scroll-margin-top: 0;
}

.centerize {
  display: flex;
  justify-content: center;
}

.mainTitle {
  color: white;
  font-weight: 700;
  font-size: 2rem;
  margin: 20px;
}

.cardStyle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  margin: 16px;
}

.nameTitle {
  font-weight: 600;
  font-size: 1.2rem;
}

.nameTitlePhone {
  font-weight: 600;
  font-size: 0.7rem;
}

.role {
  font-weight: 400;
  font-size: 0.9rem;
}

.rolePhone {
  font-weight: 400;
  font-size: 0.7rem;
}

.buttonStyle {
  display: flex;
  justify-content: flex-end;
}

.dialogTitle {
  font-weight: 600;
  font-size: 2.2rem;
}

.dialogText {
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #b1d234;
}
</style>
