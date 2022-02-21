// 3.first ager kaj 

// system Number 1
function add(sum1, sum2) {
    return sum1 + sum2
}


const number = add(32, 43)


// system number 2:(function Expresion)
const add2 = function (sum1, sum2) {
    return sum1 + sum2
}
const add3 = add2(32, 43)

// system number 3:(Anonymous Function)
const add4 = function (sum1, sum2) {
    return sum1 + sum2
}
const addNumber = add4(32, 43)

// Arrow Function 
// 3.a-One Parameter Using an Arrow Function
const addNumber2 = (num1) => num1 / 5
const addNumber1 = addNumber2(50)

// 3.b-Two Parameters and will add two Each Number 
const eachNumberCalculation = (num1, num2) => (num1 + num2) * 10
const moreNumberCalculation = eachNumberCalculation(50, 60)
// 3.c-Three parameter Multiply 
const threeNumber = (num1, num2, num3) => num1 * num2 * num3
const threeNumbermultipyResult = threeNumber(20, 5, 43)

// 3.d - two parameter and oparetion the multiLine 
const oparetionNumber = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2
    const Multiply = sum * diff
    const finalResult = Multiply / 10
    return finalResult


}
const totalNumber = oparetionNumber(50, 40)
console.log(add3, number, addNumber, addNumber1, moreNumberCalculation, threeNumbermultipyResult, totalNumber)