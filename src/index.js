import readlineSync from 'readline-sync'

export const startGame = (description, getQuestionAndAnswer) => {
	  console.log('Welcome to the Brain Games!')
	  const name = readlineSync.question('May I have your name? ')
	  console.log('Hello, ' + name + '!')
	  console.log('What is the result of the expression?')

	  const roundsCount = 3

	  for (let i = 0; i < roundsCount; i++) {
		      const { question, answer } = getQuestionAndAnswer()

		      const userAnswer = readlineSync.question('Question: ' + question + '\nYour answer: ')

		      if (userAnswer !== answer) {
			            console.log("'" + userAnswer + "' is wrong answer ;(. Correct answer was '" + answer + "'.")
			            console.log("Let's try again, " + name + '!')
			            return
			          } 
		      else {
			  console.log('Correct!')
			 }
		    }
	  console.log('Congratulations, ' + name + '!')
}
