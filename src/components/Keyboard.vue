<script setup>
import LetterBox from './LetterBox.vue'

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const emit = defineEmits(['pressed'])

function onLetterPressed(letter) {
  emit('pressed', letter)
}
</script>

<template>
  <div class="keyboard">
    <LetterBox v-for="letter in letters" :letter="letter" @pressed="onLetterPressed" />
  </div>
</template>
