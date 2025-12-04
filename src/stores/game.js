import { defineStore } from 'pinia'
import data from '@/data/data.json'

export const useGameStore = defineStore('game', {
  state: () => ({
    wordsPool: data,
    screen: 'main-menu',
    category: '',
    word: '',
    lives: 8,
    guessedLetters: [],
    gameStatus: '',
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
    setWord() {
      const pool = this.wordsPool[this.category]

      if (!pool) {
        console.error(`No category found for "${this.category}"`)
        return
      }

      // get all unselected words
      let unused = pool.filter((item) => !item.selected)

      // reset the pool if all got selected
      if (unused.length === 0) {
        pool.forEach((item) => (item.selected = false))
        unused = pool
      }

      // pick a random word
      const randomIndex = Math.floor(Math.random() * unused.length)
      const chosen = unused[randomIndex]

      // mark as selected
      chosen.selected = true

      // store the game word
      this.word = chosen.name
    },
    checkLetter(value) {
      // take the normalized word and make 1 array
      const letters = this.normalizeWord.flat().map((l) => l.toLowerCase())

      if (!letters.includes(value.toLowerCase())) {
        this.lives--

        // game over
        if (this.lives <= 0) {
          this.gameStatus = 'You Lose'
        }
      }

      this.guessedLetters.push(value)
    },
  },
})
