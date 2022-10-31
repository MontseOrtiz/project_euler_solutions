// Problem 6

// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


const sumSquares = (num) => {
  const squares = [];
  for (let i = 1; i <= num; i++) {
    squares.push(Math.pow(i,2))
  }
  const total = squares.reduce((a, b) => a + b, 0)
  return total
}

const sumSquaresDouble = (num) => {
  const numbers = [];
  for (let i = 1; i <= num; i++) {
    numbers.push(i)
  }
  const total = numbers.reduce((a, b) => a + b, 0)
  const totalSquare = Math.pow(total, 2)
  return totalSquare
}


const difference = (num) =>{
  return sumSquaresDouble(num) - sumSquares(num)
}

console.log(sumSquares(10))
console.log(sumSquaresDouble(10))
console.log(difference(100))

// answer 25164150