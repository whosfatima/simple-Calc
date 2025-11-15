

let add = (num1, num2) => num1 + num2
let subtract = (num1, num2) => num1 - num2
let multiply = (num1, num2) => num1 * num2
let divide = (num1, num2) => num1 / num2
const addButtons = document.getElementById('add').onclick = () => {
  let number1 = +input1.value
  let number2 = +input2.value
  let final = add(number1, number2)
  result.textContent = final
}
const subtractButtons = document.getElementById('subtract').onclick = () => {
  let number1 = +input1.value
  let number2 = +input2.value
  let final = subtract(number1, number2)
  result.textContent = final
}
const multiplyButtons = document.getElementById('multiply').onclick = () => {
  let number1 = +input1.value
  let number2 = +input2.value
  let final = multiply(number1, number2)
  result.textContent = final
}
const divideButtons = document.getElementById('divide').onclick = () => {
  let number1 = +input1.value
  let number2 = +input2.value
  let final = divide(number1, number2)
  result.textContent = final
}

// inputs DOM
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

// p DOM
const result = document.querySelector('p')