<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
  
</script>

<style>
  .v-application {
    font-family: "Noto Sans", Sans-Serif;
  }
  .v-application.v-theme--customDark {
    background-image: linear-gradient(180deg, #040918 0%, #091540 100%);
  }
  .v-application.v-theme--customLight {
    background-image: linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%);
  }
</style>