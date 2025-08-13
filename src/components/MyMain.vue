<template>
  <div class="extensions">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" lg="4" v-for="k in FilteredExtensions" :key="k.iid" class="pa-1 my-1">
          <v-card class="rounded-xl bg-surface border border-primary" elevation="1">

            <v-card-text class="d-flex align-start pa-5" style="gap: 18px">
              <img :src="k.logo" alt="" class="" width="60" height="60" />
            <v-card-text class="pa-0 pe-4">
              <h2 style="transform: translateY(-1px)" class="text-primary">{{ k.name }}</h2>
              <p class="pt-1 d-flex text-secondary" style="font-size: 16px">
                {{ k.description }}
              </p>
            </v-card-text>
          </v-card-text>

          <v-card-actions class="px-5 pb-3 pt-4">
            <v-btn variant="outlined" elevation="0" class="rounded-xl px-3" style="text-transform: none;font-weight: 700;border: 1px solid grey" color="secondary" @click="rmExt(k.iid)">
              Remove
            </v-btn>
            <v-spacer></v-spacer>
            <v-switch inset hide-details color="error" v-model="k.isActive" flat @click="tgActive(k.iid)"></v-switch>
          </v-card-actions>

        </v-card>
      </v-col>
      <v-col cols="12" v-if="!extensions.length" class="d-flex flex-column">
        <h2 class="text-center text-primary">Yo have no installed extensions</h2>
        <v-btn color="blue-grey" class="mt-5 mx-auto rounded-xl" style="text-transform: none" @click="redownload">Re-download Extensions</v-btn>
      </v-col>
      <v-col cols="12" v-if="(filterOpt == 'isActive' && !FilteredExtensions.length)">
        <h2 class="text-center text-primary" style="font-weight: 500">
          There is no active Extensions
        </h2>
      </v-col>
      <v-col cols="12" v-if="(filterOpt == 'isInactive' && !FilteredExtensions.length)">
        <h2 class="text-center text-primary" style="font-weight: 500">
          All Installed Extensions are activated.
        </h2>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>
<script setup>
import {
ref,
watch,
computed
} from 'vue'

import {
storeToRefs
} from 'pinia'

import {
useExtensions
} from '@/stores/useExtensions.js'

const EXTENSTIONS = useExtensions()

const {
extensions,
filterOpt,
FilteredExtensions
} = storeToRefs(EXTENSTIONS)



const rmExt = EXTENSTIONS.removeExt

const tgActive = EXTENSTIONS.toggleActive

const redownload = EXTENSTIONS.redownload

watch(filterOpt, (newVal) => {
if (newVal == 'all') {
FilteredExtensions.value = computed(() => extensions.value)
}
if (newVal == 'isActive') {
FilteredExtensions.value = computed(() => extensions.value.filter(e => e.isActive))
}
if (newVal == 'isInactive') {
FilteredExtensions.value = computed(() => extensions.value.filter(e => !e.isActive))
}
})

</script>