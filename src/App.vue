<script setup>
import { ref, provide } from 'vue'

import MainMenuScreen from './components/screens/MainMenuScreen.vue'
import HowToPlayScreen from './components/screens/HowToPlayScreen.vue'

const screenState = ref('main-menu')
screenState.value = 'how-to-play'

provide('screenState', screenState)
</script>

<template>
  <MainMenuScreen v-if="screenState === 'main-menu'" />
  <HowToPlayScreen v-if="screenState === 'how-to-play'" />
</template>
