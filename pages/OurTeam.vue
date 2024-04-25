<template>
  <v-row v-resize="onResize" class="ma-0 team centerize">
    <v-col :style="{ 'padding-left': titleSize }" cols="12" class="d-flex">
      <v-card-title class="mainTitle">Our Team</v-card-title>
    </v-col>

    <v-col
      v-for="item in items"
      :key="item.image"
      class="pa-0"
      :class="cardSize === '5' ? 'ma-2' : 'ma-10'"
      :cols="cardSize"
    >
      <v-card
        height="100%"
        class="ma-0 pa-0 cardStyle"
        color="#EFFFEF"
        rounded="lg"
      >
        <v-card
          rounded="lg"
          flat
          color="#EFFFEF"
          height="70%"
          width="100%"
          class="d-flex justify-center"
        >
          <v-img
            height="100%"
            width="100%"
            :src="'https://g-tower.com/employee/' + item.image"
            :lazy-src="'https://g-tower.com/employee/' + item.image"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="black"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-card>
        <v-card-title
          class="nameTitle pb-0"
          :class="cardSize === '5' ? 'nameTitlePhone' : 'nameTitle'"
          >{{ item.name }} {{ item.surname }}</v-card-title
        >
        <v-card-title
          class="role pt-0"
          :class="cardSize === '5' ? 'rolePhone' : 'role'"
          >{{ item.title }}</v-card-title
        >
        <div class="buttonStyle" style="width: 100%">
          <v-btn small text depressed @click="bio(item)"
            >More<v-icon>mdi-arrow-right-thin</v-icon></v-btn
          >
        </div>
      </v-card></v-col
    >
    <v-dialog
      @click:outside="resetScroll()"
      v-if="user.image"
      v-model="dialog"
      width="80vw"
    >
      <v-card style="overflow-x: hidden" min-height="60vh" v-model="user">
        <v-row class="ma-0 pa-0 centerize">
          <div style="width: 100%; height: 2%" class="d-flex justify-end pa-2">
            <v-icon @click=";(dialog = false), resetScroll()">mdi-close</v-icon>
          </div>
          <v-col
            :cols="cardSize !== '2' ? '10' : '4'"
            class="centerize align-center"
          >
            <v-card
              flat
              class="centerize align-center flex-column"
              rounded="lg"
            >
              <v-img
                max-width="75%"
                :src="'https://g-tower.com/employee/' + user.image"
              ></v-img>
              <a
                style="text-decoration: none"
                class="mt-5"
                :href="'https://linkedin.com/' + user.linkedin"
                target="_blank"
                ><v-icon large style="max-width: 75%" color="blue">
                  mdi-linkedin</v-icon
                ></a
              >
            </v-card>
          </v-col>

          <v-col
            :cols="cardSize !== '2' ? '10' : '8'"
            class="centerize flex-column"
          >
            <v-card-title class="dialogTitle pb-0">{{
              user.name
            }}</v-card-title>
            <v-card-title class="dialogTitle">{{ user.surname }}</v-card-title>
            <v-card-text class="dialogText">{{ user.title }}</v-card-text>
            <v-card-text>{{ user.bio }}</v-card-text>
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
          title: 'President',
          bio: 'Gunes has almost 20 years of engineering and project management experience specializing in tower business including wind towers up to 6MW, electric transmission & distribution towers up to 600kV, telecommunication towers and lighting poles. Before founding G-Tower, he worked for well-known tower manufacturers; Valmont Industries and Mitas Energy. He holds M.Sc. and B.Sc. Degrees in Civil Engineering from Middle East Technical University. He is a currently licensed Professional Engineer in Colorado, Texas and New York; holding NCEES record. He enjoys travelling, cycling, swimming and hiking.',
          linkedin: '/in/gunes-demirbas-pe-06b67930/',
        },
        {
          image: 'ali_gulgeze.jpg',
          name: 'Ali',
          surname: 'Gulgeze, PEng',
          title: 'Vice President',
          bio: 'Ali is experienced in the structural design of a diverse range of structural systems and has experience in contract administration and cost estimating studies on a variety of projects. Ali has been involved in projects of different scales and has interpreted his technical knowledge to formulate new design concepts with economical and functional solutions. Currently managing large transmission line projects and overseas staff for company’s international work. Ali is a Professional Engineer registered in Ontario, Manitoba, Alberta and Saskatchewan, Canada and holds a M.Eng. degree from University of Western Ontario. He enjoys coding, loves discovering new technology and sailing.',
          linkedin: '/in/ali-gulgeze/',
        },
        {
          image: 'sabrina_ageca.jpg',
          name: 'Sabrina',
          surname: 'Ageca, CWB',
          title: 'Quality Manager',
          bio: 'Sabrina has almost 20 years of experience as Project Manager and Weld Engineer in the energy sector. She is a Level I Weld Inspector certified by CWB (Canadian Welding Bureau). She is experienced in weld management systems (EN 1090-2/ISO 3834-2) and integrated quality/environmental/safety (ISO 9001:2015 / ISO 14001:2015 / OHSAS 18001:2007) management systems. Worked for reputable tower manufacturers Mitas, Valmont and Şa-Ra in the past. She has B.Sc. in Engineering from Dokuz Eylul University. Completed multiple certification programs in Weld Engineering at Middle East Technical University and European Welding Federation. She enjoys painting, ceramics, trekking and cycling.',
          linkedin: '/in/sabrina-ageca-b1908b175/',
        },

        {
          image: 'mahir_ergin.jpg',
          name: 'Mahir',
          surname: 'Ergin',
          title: 'Regional Manager',
          bio: 'After graduated from Istanbul Kabatas High School, Mahir studied Mathematics. He holds M.Sc. and B.Sc. degrees in Mathematics. Because of his passion and interest in wind energy, he decided to join G-Tower in 2018. He is based in Ankara, Turkey. He is responsible from quality control of all the manufactured tower and pole products within Turkey prior to ship overseas. In addition to that he supports business development activities in the Middle East. He enjoys watching soccer and spending time with his two children Can & Umut Efe.',
          linkedin: '/in/hasip-mahir-ergin-ba80a710a/',
        },

        {
          image: 'selma_haciraifoglu.jpg',
          name: 'Selma',
          surname: 'Haciraifoglu',
          title: 'Commercial Manager',
          bio: 'Selma has dynamic and outstanding management professional offering over 20 years of experience as Import-Export and Logistics Specialist as well as in Project Management in the sector of Energy, Telecommunication and Lighting. Worked for tower and pole manufacturer Mitas, Mitas-Valmont JV and construction company Emta. She has BBA from Hacettepe University. Completed certification programs in foreign trade, finance, managing supply chain and logistics, contract management and so on. Proven ability to interact effectively with people of different nationalities and comfortable working in a multicultural setting. She loves skiing and enjoys travelling.',
          linkedin: '/in/selma-kaldzija-hac%C4%B1raifo%C4%9Flu-80417113b/',
        },
        {
          image: 'alper_yavuzer.jpg',
          name: 'Alper',
          surname: 'Yavuzer',
          title: 'Senior Quality Engineer',
          bio: 'Alper is Senior Quality Engineer at G-Tower, with mechanical engineering background. He has 15+ years of construction, steel and quality control experience. He joined G-Tower in 2019 and he is responsible from manufacturing inspection and quality control process for the utility projects. He leads and manages lattice tower factory audit work of G-Tower in overseas. Alper likes travelling and discovering different cultures. He enjoys fishing in his hometown Zonguldak on the Black Sea Coast.',
          linkedin: '/in/alper-yavuzer-379263161/',
        },

        {
          image: 'ensar_duran.jpg',
          name: 'Ensar',
          surname: 'Duran',
          title: 'Project Engineer',
          bio: 'Ensar is a Project Engineer at G-Tower. He has a Civil Engineering degree from Abdullah Gül University (AGU), Turkey. He earned an English Language certificate from a learning institution in Michigan, MI. He has involved in various international projects and has experience in engineering design and analysis of power transmission lines and telecommunication structures. He leads G-Tower’s business development efforts in Santiago, Chile for the South American Market. Ensar is a professional snowboarder and he represented his university at various national tournaments. He also has an interest in other outdoor sports such as trekking, climbing, and camping.',
          linkedin: '/in/ensar-duran-487548142/',
        },

        {
          image: 'nazife_nur_iscan.jpg',
          name: 'Nazife Nur',
          surname: 'Iscan',
          title: 'Project Engineer',
          bio: 'Nazife is a Project Engineering at G-Tower. She graduated from Süleyman Demirel University, Civil Engineering Department in 2020. She is also studied at Cracow University of Technology for certain amount of period as part of the Erasmus Project in 2019. During the Erasmus Project, She visited 11 countries and experienced different cultures. She developed her organization and communication skills by participating in volunteer and social activities in student clubs. Nazife uses PLS-CADD, PLS-Tower and PLS-Pole. She designs transmission lines and support structures including lattice towers and tubular poles. From time to time, she visits tower factories to support G-Tower’s prototype and fabrication inspection projects. She enjoys travelling and hiking.',
          linkedin: '/in/nazife-nur-i%C5%9Fcan-356278133/',
        },
        {
          image: 'emre_insel.png',
          name: 'Emre',
          surname: 'Insel',
          title: 'Volunteer Consultant',
          bio: 'Emre has over 15 years of experience in the design of a diverse range of structures and in project management, with projects spanning four continents. He is currently engaged in research at the University of Ottawa in Ontario, Canada, focusing on the application of high ductility cementitious materials under blast loads. This research complements his extensive expertise in structural design and innovative materials, enabling him to offer unique solutions to complex engineering challenges. Emre is a professional civil engineer in California and Oregon. He enjoys biking and hiking.',
          linkedin: '/in/emre-insel-msc-pe-pmp/',
        },
        {
          image: 'mehmet_gurdin.jpg',
          name: 'Mehmet',
          surname: 'Gurdin',
          title: 'Strategic Partner',
          bio: 'Mehmet is the owner of IMG Energy based in Konya, Turkey. IMG Energy is G-Tower’s arm in the EMEA (Europe – Middle East – Africa) Market. Mehmet has almost 25 years of experience in the management, supply and engineering of tower/pole part of energy, telecom and lighting infra-structure projects in the EMEA Market. He holds M.Sc. and B.Sc. Degrees in Civil Engineering from Middle East Technical University. He enjoys playing and watching basketball.',
          linkedin: '/in/mehmet-emin-gurdin-62ba0210/',
        },
        {
          image: 'akin_veske.jpg',
          name: 'Akin',
          surname: 'Veske',
          title: 'Quality Inspector',
          bio: 'Akin is Civil Engineering student at Middle East Technical University. He supports G-Tower’s inspection services including tower prototyping, mass production, pre-shipment and factory acceptance test. In addition to that Akin attends tower testing of our clients in Turkey. His youth and dynamism bring lots of positive energy to G-Tower Team. Although his gentle nature, he is big fan of Marshall arts. The Karate Kid is one his favorite movie series. His dream is to move to Africa and start G-Tower’s entity to expand our business in Africa.',
          linkedin: '/in/ak%C4%B1n-veske-635b56190/',
        },
        {
          image: 'serhat-boztogan.jpg',
          name: 'Serhat',
          surname: 'Boztogan',
          title: 'Mechanical Engineer',
          bio: 'Serhat is a mechanical engineer graduated from Middle East Technical University. He worked in the Formula Student team of his university and was the technical team captain of the first electric Formula car they built. He is interested in structural & mechanical design, structural analysis, mechanical vibrations and aims to improve himself in these subjects continuously. He follows the developments in renewable energy, aerospace and automotive technologies. His hobbies include fountain pen collecting, leather crafting and cooking. Together with the G-Tower, he aims to make vertical axis wind turbines more efficient and to be used more widely around the world.',
          linkedin: '/in/serhat-bozto%C4%9Fan/',
        },
        {
          image: 'alperen-eroglu.png',
          name: 'Alperen',
          surname: 'Eroglu',
          title: 'Design Engineer',
          bio: 'Alperen is a design engineer at G-Tower. He graduated from Middle East Technical University’s Civil Engineering Department in 2019 as an honour student. After graduation, he started working in the private sector as a design engineer and gained experience in various projects across civil engineering disciplines, including structural and geotechnical engineering. Through these projects, he has improved himself in the manner of using design softwares, application of specifications & codes, achieving engineering design approaches and time- project management skills. In recent years, he has focused primarily on structural design and analysis of polygonal poles and lattice towers used for lighting, monitoring, energy transmission & telecommunication purposes. Beyond his professional career, he enjoys swimming, scuba diving, sailing, camping, cooking, and following scientific & historical documentaries.',
          linkedin: '/in/alpereneroğlu/',
        },
        {
          image: 'seda_yuksel.jpg',
          name: 'Seda Serife',
          surname: 'Yuksel',
          title: 'Quality Engineer',
          bio: 'Seda is a Quality Engineer at G-tower. She graduated from Iskenderun Technical University, Mechanical Engineering Department in 2018. She supports to G-tower’s inspection service including production inspection, factory acceptance testing, prototype inspection.She enjoys travelling, discovering new places, drawing and hiking.',
          linkedin: '/in/seda-ş-yüksel-6a6b8110b/',
        },
        {
          image: 'ekrem_targitay.jpeg',
          name: 'Ekrem',
          surname: 'Targitay',
          title: 'Quality Inspector',
          bio: 'Ekrem is studying Metallurgical and Materials Engineering at Manisa Celal Bayar University. In his graduation project, he is working on "Aluminum/graphite powder doped hybrid composites" supported by the Turkish aerospace industry. He is interested in the properties and forming processes of metal materials. He is involved in production supervision, factory acceptance tests, and quality control processes at G-Tower. He enjoys traveling and swimming. He is a confident table tennis player.',
          linkedin: '/in/ekrem-targıtay-/',
        },
        {
          image: 'gozde_isik.jpeg',
          name: 'Gozde',
          surname: 'Isik',
          title: 'Structural Engineer',
          bio: 'Gözde is Structural Engineer at G-Tower.She graduated from Atilim University Faculty of Civil Engineering in 2022 and studied project management at Istanbul Technical University.She completed her school internships at Mitek A.Ş. steel fabrication assembly and Kalyon Temelli solar energy factory where she gained practical experience in steel construction fabrication and renewable energy fields.After graduation, she worked at Ural Engineering for more than a year on superstructure steel construction projects. After working at Yüksel Proje for a short time, she joined the G-Tower team. She has the ability to analyze steel construction projects and perform static calculations using softwares such as Sap2000, IdeaStatiCa, AutoCAD and Tekla. With her knowledge of English and Russian, she is able to collaborate effectively in multi-cultural environments. Beyond her professional career, she enjoys fitness, pilates, yoga, figure skating and traveling.',
          linkedin: 'in/g%C3%B6zde-i%C5%9F%C4%B1k-0866911a9/',
        },
        {
          image: 'ertan_surucu.jpg',
          name: 'Ertan',
          surname: 'Surucu',
          title: 'Structural Engineer',
          bio: 'Ertan is a dynamic civil engineer, graduated from Middle East Technical University in 2023, with a passion for innovation and a dedication to excellence. Currently pursuing a Masters degree at Middle East Technical University, he continues to expand his knowledge and expertise in the field. Known for his boundless energy and enthusiasm, he approaches every project with vigor, striving to incorporate the latest advancements in engineering while maintaining a focus on sustainability and efficiency.Outside of the professional realm, he leads an active lifestyle, finding joy in a variety of hobbies. Whether hitting the gym for an intense workout session, engaging in friendly matches of football and basketball, or exploring new destinations through travel, he embraces life with zest and curiosity. Additionally, he nurtures a deep appreciation for culture and the arts, often spending leisure time wandering through museums and art galleries, drawing inspiration from the creativity of others.',
          linkedin: '/in/ertan-s%C3%BCr%C3%BCc%C3%BC-360ab91b8/',
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
