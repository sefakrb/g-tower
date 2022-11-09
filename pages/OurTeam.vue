<template>
  <v-row v-resize="onResize" class="team d-flex justify-center">
    <v-col :style="{ 'padding-left': titleSize }" cols="12" class="d-flex">
      <v-card-title
        style="color: white; font-weight: bold; font-size: 2rem"
        class="ma-5"
        >Our Team</v-card-title
      ><v-img
        contain
        max-width="20px"
        class="mt-1"
        :src="require('../static/header_dot.png')"
      ></v-img>
    </v-col>
    <v-col
      v-for="item in items"
      :key="item.image"
      class="ma-8 pa-0"
      :cols="cardSize"
    >
      <v-card
        height="100%"
        class="ma-4 d-flex flex-column align-center"
        style="justify-content: space-around"
        color="#EFFFEF"
        rounded="lg"
      >
        <v-card rounded="lg" flat class="d-fex justify-center">
          <v-img contain :src="item.image"></v-img>
        </v-card>
        <v-card-title
          class="justify-center"
          style="font-weight: 600; font-size: 1.2rem"
          >{{ item.name }}</v-card-title
        >
        <div style="width: 100%" class="d-flex justify-end">
          <v-btn small text depressed @click="bio(item)"
            >More<v-icon>mdi-arrow-right-thin</v-icon></v-btn
          >
        </div>
      </v-card></v-col
    >
    <v-dialog v-if="user.image" v-model="dialog" width="70vw"
      ><v-card style="overflow-x: hidden" min-height="70vh" v-model="user">
        <v-row class="ma-0 pa-0 d-flex justify-center" style="min-height: 70vh">
          <v-col
            :cols="cardSize === '10' ? '10' : '4'"
            class="d-flex align-center justify-center"
          >
            <v-card
              flat
              class="d-flex flex-column justify-center align-center"
              rounded="lg"
            >
              <v-img contain :src="user.image"></v-img>

              <v-card-title>Contact Info</v-card-title>

              <div style="width: 100%" class="d-flex">
                <v-icon color="green">mdi-phone</v-icon>
                <v-card-text>{{ user.contact_info.Phone }}</v-card-text>
              </div>

              <div style="width: 100%" class="d-flex">
                <v-icon color="blue">mdi-mail</v-icon>
                <v-card-text>{{ user.contact_info.email }}</v-card-text>
              </div>

              <v-btn text :href="user.contact_info.linkedin" target="_blank"
                ><v-icon color="blue">mdi-linkedin</v-icon></v-btn
              >
            </v-card>
          </v-col>

          <v-col
            :cols="cardSize === '10' ? '10' : '6'"
            class="d-flex flex-column justify-center"
          >
            <v-card-title style="font-size: 2.2rem">{{
              user.name
            }}</v-card-title>
            <v-card-text
              class="mb-5"
              style="font-size: 1.2rem; color: #b1d234"
              >{{ user.title }}</v-card-text
            >
            <v-card-text>{{ user.bio }}</v-card-text>
          </v-col>
        </v-row>
      </v-card></v-dialog
    >
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/07/gunes_demirbas1.jpg',
          name: 'Günes Demirbas, PE',
          title: 'President',
          contact_info: {
            Phone: '+1-205-616-4905',
            email: 'gdemirbas@g-tower.com',
            linkedin: 'https://www.linkedin.com/in/gunes-demirbas-pe-06b67930/',
          },
          bio: 'Gunes has over 15 years of engineering and project management experience specializing in tower business including wind towers up to 6 MW, electric transmission & distribution towers up to 600 kV, telecommunication towers and lighting poles. Prior to start G-Tower, he worked for well-known tower manufacturers; Valmont Industries and Mitas Energy. He holds M.Sc. (Geotechnical) and B.Sc. Degrees in Civil Engineering from Middle East Technical University. He is a currently licensed Professional Engineer in Colorado, Texas and New York; holding NCEES record. He enjoys travelling, cycling, swimming and hiking.',
        },
        {
          image: 'https://g-tower.com/wp-content/uploads/2019/07/IMG_8913.jpg',
          name: 'Uncac Saritas',
          title: 'Vice President',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'null',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/06/Ageca-e1565148244110.jpg',
          name: 'Sabrina Ageca',
          title: 'Quality Manager',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'Sabrina has 15+ years of experience as Project Manager and Weld Engineer in the energy sector. She is experienced in weld management systems (EN 1090-2/ISO 3834-2) and integrated quality/environmental/safety (ISO 9001:2015 / ISO 14001:2015 / OHSAS 18001:2007) management systems. Worked for reputable tower manufacturers Mitas, Valmont and Şa-ra in the past. She has B.Sc. in engineering from Dokuz Eylul University. Completed multiple certification programs in weld engineering at Middle East Technical University and European Welding Federation. She enjoys painting, ceramics, trekking and cycling.',
        },
        {
          image: 'https://g-tower.com/wp-content/uploads/2019/10/4.jpg',
          name: 'Mahir Ergin',
          title: 'Regional Manager',
          contact_info: {
            Phone: '+90-505-397-2316',
            email: 'hmergin@g-tower.com',
            linkedin: 'https://www.linkedin.com/in/gunes-demirbas-pe-06b67930/',
          },
          bio: 'After graduated from Istanbul Kabatas High School, Mahir studied Mathematics. He holds M.Sc. and B.Sc. degrees in Mathematics. Because of his passion and interest in wind energy, he decided to join G-Tower in 2018. He is based in Ankara, Turkey. He is responsible from quality control of all the manufactured tower and pole products within Turkey prior to ship overseas. In addition to that he supports business development activities in the Middle East. He enjoys watching soccer and spending time with his two children Can & Umut Efe.',
        },

        {
          image:
            'https://g-tower.com/wp-content/uploads/2020/09/IMG_E4415-600x800.jpg',
          name: 'Selma Hacıraifoglu',
          title: 'Commercial Manager',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'Selma has dynamic and outstanding management professional offering over 12 years of experience as İmport-Export and Logistics Specialist as well as in Project Management in the sector of Energy, Telecommunication and Lighting.Worked for Tower and Poles manufacturer MITAS, Mitas-Valmont JV and construction company Emta.She has BBA from Hacettepe University. Completed certification programs in foreign trade, finance, managing supply chain and logistics, contract management and so on…Proven ability to interact effectively with people of different nationalities and comfortable working in a multicultural setting.She loves skiing and enjoys travelling.',
        },
        {
          image: 'https://g-tower.com/wp-content/uploads/2019/10/6.jpg',
          name: 'Alper Yavuzer',
          title: 'Quality Engineer',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'Alper is Quality Engineer at G-Tower, with mechanical engineering background. He has 10+ years of construction, steel and quality control experience. He joined G-Tower in 2019 and he is responsible from manufacturing inspection and quality control process for the utility projects. Alper likes travelling and discovering different cultures. He enjoys fishing in his hometown Zonguldak on the Blacksea Coast.',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/07/Profil-cropped-2-600x800.jpg',
          name: 'Ensar Duran',
          title: 'Project Engineer',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'Ensar is a project engineer at G-Tower. He has a Civil Engineering degree from Abdullah Gül University (AGU), Turkey. He earned an English Language certificate from a learning institution in Michigan, MI. He has involved in various international projects and has experience in engineering design and analysis of power transmission lines and telecommunication structures. Ensar is a professional snowboarder and he represented his university at various national tournaments. He also has an interest in other outdoor sports such as trekking, climbing, and camping.',
        },
        {
          image: 'https://g-tower.com/wp-content/uploads/2020/12/nazife.jpg',
          name: 'Nazife Nur Iscan',
          title: 'Project Engineer',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'Nazife is an engineering intern at G-Tower. She graduated from Süleyman Demirel University, Civil Engineering Department in 2020. She is also studied at Cracow University of Technology for a term as part of the Erasmus+ project in 2019. During the Erasmus+ project, She visited 11 countries and experienced different cultures. She developed her organization and communication skills by participating in volunteer and social activities in student clubs. She enjoys doing pilates, travelling, and hiking.',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2019/03/Didem-600x800.jpg',
          name: 'Didem Ergin, PE',
          title: 'Environmental Engineer',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'Didem is an environmental engineer with over 10 years of diverse technical and project management experience. Her expertise includes managing the environmental aspects throughout the life cycle of a wide range of large capital projects, including site selection and alternative analysis; schedule and budgeting; impact assessments; federal, state, and local permitting and regulatory compliance; environmental plan preparation; and auditing, reporting, and agency negotiations. Didem is a licensed P.E. in Texas. Didem has worked for top-notch environmental consultancy and engineering firms throughout her career.',
        },
        {
          image: 'https://g-tower.com/wp-content/uploads/2019/10/5.jpg',
          name: 'Matt Rogers, PE',
          title: 'Consultant - Engineer',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'Matt is a licensed Professional Engineer in Colorado with approximately 10 years of experience in consulting and project management. He holds an M. E. in Engineering Management and a B.Sc. in Civil Engineering from Colorado University Boulder. He performs statistical analysis and modeling projects for a variety of mid-sized businesses. He excels in stakeholder management, multi-million-dollar contract negotiations and purchase orders, cost-effective system engineering, health and safety auditing, and logistics coordination. He enjoys hiking in wilderness and traveling. ',
        },
        {
          image: 'https://g-tower.com/wp-content/uploads/2019/10/2.jpg',
          name: 'Mehmet Gurdin',
          title: 'Strategic Partner',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'null',
        },
        {
          image:
            'https://g-tower.com/wp-content/uploads/2020/10/Vani-600x800.jpeg',
          name: 'Jerry Vaninetti',
          title: 'Senior Advisor',
          contact_info: {
            Phone: 'null',
            email: 'null',
            linkedin: 'null',
          },
          bio: 'null',
        },
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
        this.titleSize = '15%'
        this.cardSize = '10'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.titleSize = '15%'
        this.cardSize = '4'
      } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
        this.cardSize = '4'
        this.titleSize = '10%'
      } else {
        this.cardSize = '2'
        this.titleSize = '7%'
      }
    },
    bio(item) {
      this.dialog = true
      this.user = item
    },
  },
}
</script>

<style scoped>
.team {
  background-image: url('../static/team-background.png');
  background-repeat: no-repeat, no-repeat;
}
</style>
