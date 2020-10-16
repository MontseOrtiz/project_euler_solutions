// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


const findMultiples = function () {
    let multiples = []
    for (let i = 0; i < 1000; i++) {

        if (i % 3 === 0 && i != 0) {
            multiples.push(i)
        } else if (i % 5 === 0 && i != 0) {
            multiples.push(i)
        }
    }
    let sumaMultiples = multiples.reduce((a, b) => a + b)
    return sumaMultiples
}

console.log(findMultiples())

// Answer 233168