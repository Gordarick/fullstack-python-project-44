#!/usr/bin/env node
import { startGame } from '../src/index.js'
const description = 'Find the greatest common divisor of given numbers.'
const generateQuestionAndAnswer = () => {
	  const num1 = Math.floor(Math.random() * 100) + 1
	  const num2 = Math.floor(Math.random() * 100) + 1
	  const question = num1 + ' ' + num2

	const gcd = (a, b) => {
		while (b !== 0) {
		const temp = b
		b = a % b
		a = temp
		}
		return a
		}
		const answer = gcd(num1, num2).toString()
	
	  	return { question, answer }
	      	}
	
startGame(description, generateQuestionAndAnswer)
