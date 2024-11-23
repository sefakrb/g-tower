<template>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on" class="language-btn">
          <v-icon>mdi-translate</v-icon>
          <span class="language-text">{{ getCurrentLanguageName }}</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="changeLanguage(locale.code)"
          :class="{ 'selected-language': locale.code === currentLocale }"
        >
          <v-list-item-title>{{ locale.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
    
  <script>
  import { setI18nLanguage } from '@/i18n'
  
  export default {
    name: 'LanguageSwitcher',
    
    data() {
      return {
        availableLocales: [
          { code: 'en', name: 'English' },
          { code: 'tr', name: 'Türkçe' },

        ],
        currentLocale: this.$i18n.locale
      }
    },
  
    computed: {
      getCurrentLanguageName() {
        const locale = this.availableLocales.find(l => l.code === this.currentLocale)
        return locale ? locale.name : 'English'
      }
    },
  
    methods: {
      changeLanguage(locale) {
        this.currentLocale = locale
        setI18nLanguage(locale)
        this.$i18n.locale = locale
        localStorage.setItem('userLanguage', locale)
      }
    },
  
    created() {
      // Initialize with saved language or browser language
      const savedLanguage = localStorage.getItem('userLanguage')
      if (savedLanguage) {
        this.changeLanguage(savedLanguage)
      }
    }
  }
  </script>
  
  <style scoped>
.language-btn {
  color: black !important;
  min-width: 0 !important;
  padding: 0 8px !important;
}

.selected-language {
  background-color: #f5f5f5;
}

/* Hide text on mobile, show only icon */
@media (max-width: 600px) {
  .language-text {
    display: none;
  }
  
  .language-btn {
    padding: 0 4px !important;
    width: 40px !important;
  }
}

/* Show both icon and text on desktop */
@media (min-width: 601px) {
  .language-text {
    margin-left: 4px;
  }
}
  </style>