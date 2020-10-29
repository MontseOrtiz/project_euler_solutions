// Problem 3

// Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function findPrime() {
  let divisor = 2;
  let numberToFind = 600851475143;

  while(numberToFind > 1){
      if(numberToFind % divisor === 0){ 
          numberToFind /= divisor;
      } else {
          divisor++;
      }
  }

  return divisor
}

console.log(findPrime());



// Answer 6857
