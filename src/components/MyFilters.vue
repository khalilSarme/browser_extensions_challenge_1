<template>
  <div class="filters" v-if="extensions.length">
    <v-container class="d-flex flex-wrap justify-center justify-sm-space-between align-center" style="gap: 20px">
      <h1 class="text-primary">
        Extensions List
      </h1>
      <v-btn-toggle v-model="filterOpt" mandatory>
        <v-btn
          v-for="item in buttons":key="item.value":value="item.value":class="buttonClass(item.value)"
          style="text-transform: none; font-size: 19px; font-weight: 400;"
          class="rounded-xl border ms-4"
          >
          {{ item.text }}
        </v-btn>
      </v-btn-toggle>
    </v-container>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    useTheme
  } from 'vuetify'
  
  import {
    storeToRefs
  } from 'pinia'

  import {
    useExtensions
  } from '@/stores/useExtensions.js'

  const EXTENSTIONS = useExtensions()

  const {
    extensions,
    filterOpt
  } = storeToRefs(EXTENSTIONS)

  const buttons = [{
    value: 'all',
    text: 'All'
  },
    {
      value: 'isActive',
      text: 'Active'
    },
    {
      value: 'isInactive',
      text: 'Inactive'
    },
  ]

  const theme = useTheme()

  const buttonClass = (value) => {
    const isSelected = filterOpt.value == value
    const isDark = theme.global.current.value.dark

    if (isSelected) return isDark? 'btn-active-dark': 'btn-active-light'
    else return isDark? 'btn-inactive-dark': 'btn-inactive-light'
  }
</script>

<style scoped>

  .btn-active-dark {
    background-color: hsl(3, 86%, 64%) !important;
    color: hsl(227, 75%, 14%) !important;
  }

  .btn-inactive-dark {
    color: #FEFEFE !important;
  }

  .btn-active-light {
    background-color: hsl(3, 77%, 44%) !important;
    color: white!important;
  }

  .btn-inactive-light {
    color: hsl(227, 75%, 14%) !important;
  }
</style>