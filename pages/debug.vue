<template>
    <div>
      <p>Current locale: {{ $i18n.locale }}</p>
      <p>Available messages: {{ JSON.stringify($i18n.messages, null, 2) }}</p>
      <button @click="$i18n.locale = 'en'">English</button>
      <button @click="$i18n.locale = 'tr'">Turkish</button>
      <p>Test Turkish: {{ $t('industries.title') }}</p>
    </div>
  </template>