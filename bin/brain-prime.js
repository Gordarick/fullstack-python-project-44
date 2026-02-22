#!/usr/bin/env node

import { startGame } from '../src/index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const generateQA = () => {
  const num = Math.floor(Math.random() * 99) + 2

  const isPrime = (n) => {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

  const answer = isPrime(num) ? 'yes' : 'no'

  return { question: num.toString(), answer }
}

startGame(description, generateQA)
