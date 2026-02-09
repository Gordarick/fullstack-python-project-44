#!/usr/bin/env node
import { startGame } from '../src/index.js'
const description = 'What number is missing in the progression?'
const generateQA = () => {
	  const start = Math.floor(Math.random() * 20)
	  const step = Math.floor(Math.random() * 10) + 1
	  const length = Math.floor(Math.random() * 5) + 10
	  const missingIndex = Math.floor(Math.random() * length)

	  const sequence = []
	  for (let i = 0; i < length; i++) {
		      sequence.push(start + i * step)
		    }

	  const answer = sequence[missingIndex].toString()

	  const questionItems = sequence.map((num, index) =>
		      index === missingIndex ? '..' : num.toString()
		    )

	  const question = questionItems.join(' ')

	  return { question, answer }
}

startGame(description, generateQA)
