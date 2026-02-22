#!/usr/bin/env node
import { startGame } from '../src/index.js'
const description = 'What is the result of the expression?'
const generateQA = () => {
  const operations = ['+', '-', '*']
  const operation = operations[Math.floor(Math.random() * operations.length)]
  const num1 = Math.floor(Math.random() * 11)
  const num2 = Math.floor(Math.random() * 11)
  const question = `${num1} ${operation} ${num2}`
  let answer
  switch (operation) {
    case '+':
      answer = (num1 + num2).toString()
      break
    case '-':
      answer = (num1 - num2).toString()
      break
    case '*':
      answer = (num1 * num2).toString()
      break
  }
  return { question, answer }
}

startGame(description, generateQA)
