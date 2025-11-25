<script setup>
import LetterBox from './LetterBox.vue'

const letters = [
  { letter: 'a', active: false },
  { letter: 'b', active: true },
  { letter: 'c', active: true },
  { letter: 'd', active: true },
  { letter: 'e', active: true },
  { letter: 'f', active: true },
  { letter: 'g', active: true },
  { letter: 'h', active: true },
  { letter: 'i', active: true },
  { letter: 'j', active: true },
  { letter: 'k', active: true },
  { letter: 'l', active: true },
  { letter: 'm', active: true },
  { letter: 'n', active: true },
  { letter: 'o', active: true },
  { letter: 'p', active: true },
  { letter: 'q', active: true },
  { letter: 'r', active: true },
  { letter: 's', active: true },
  { letter: 't', active: true },
  { letter: 'u', active: true },
  { letter: 'v', active: true },
  { letter: 'w', active: true },
  { letter: 'x', active: true },
  { letter: 'y', active: true },
  { letter: 'z', active: true },
]
</script>

<template>
  <div class="keyboard">
    <LetterBox v-for="letter in letters" :letter="letter.letter" :active="letter.active" />
  </div>
</template>
