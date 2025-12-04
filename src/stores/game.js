import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    screen: 'main-menu',
    category: '',
    word: '',
    lives: 8,
    guessedLetters: [],
    gameResult: '',
    wordsPool: [],
  }),

  getters: {
    normalizeWord: (state) =>
      state.word
        .toLowerCase()
        .replace(/[^a-z ]/g, '')
        .split(' ')
        .filter((w) => w.length)
        .map((w) => w.split('')),
  },

  actions: {
    setScreen(value) {
      this.screen = value
    },
    setCategory(value) {
      this.category = value
    },
    setWord(value) {
      this.word = value
    },
    loseLife() {
      this.lives--
    },
    addLetter(value) {
      this.guessedLetters.push(value)
    },
  },
})
