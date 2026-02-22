import readlineSync from 'readline-sync'

const greetingGames = () => {
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
}

export { greetingGames }
