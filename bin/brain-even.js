#!/usr/bin/env node

import readlineSync from 'readline-sync'

const startGame = () => {
	console.log('Welcome to the Brain Even!')
	const playerName = readlineSync.question('May I have your name? ')
	console.log('Hello, ' + playerName + '!')
	console.log('Answer "yes" if the number is even, otherwise answer "no".')

	const numOfGames = 3

	for (let i = 0; i < numOfGames; i++) {
		const num = Math.floor(Math.random() * 100)
		const answer = readlineSync.question('Question: ' + num + '\nYour answer (yes/no): ')
		const isEven = num % 2 === 0
		const correctAnswer = isEven ? 'yes' : 'no'
	if (answer.toLowerCase() !== correctAnswer) {
		console.log(answer + ' is wrong answer ;(. Correct answer was ' + correctAnswer +'.')
		console.log('Let\'s try again, ' + playerName + '!')
		return
	}
		console.log('Correct!')
	}
	console.log('Congratulations, ' + playerName + '!')
}

		
startGame();
