// Problem 3

// Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function findPrime() {
  let primeFactorsArray = [];
  let numberToFind = 600851475143;
  // let start = numberToFind / 2

  for (let i2 = numberToFind; i2 >= 1; i2--) {
    //Primero debemos saber si el numero es divisible entre el number to find y es exacto

    if (numberToFind % i2 === 0) {
      //Debemos conocer si el numero es primo

        let squareRoot = Math.sqrt(i2).toFixed();
        let prime = [];
        let noPrime = [];
      
        for (let i = 0; i <= squareRoot; i++) {
          if (i2 % i === 0) {
            //  console.log("no soy primo", i);
            noPrime.push(i);
            // console.log(noPrime, "noprime");
            // console.log(i);
          } else {
            // console.log(" soy primo", i);
            prime.push(i);
            // console.log(prime, "prime");
          }
        }
      
        if (prime.length === 0) {
          console.log("No soy primo");

        } else{
            // console.log(i2, "numero m`primommm ");
            // console.log("soy primo");
            primeFactorsArray.push(i2)
            // console.log(i2, "numero m`primommm ");
            // console.log( primeFactorsArray, "------->" );
        }
      


    }

    //  if (primeFactorsArray.length === 2){
    //     break
    //  }
  }

  return primeFactorsArray;
}

console.log(findPrime());

//how to know if a number is prme

function isPrime(num) {
  let squareRoot = Math.sqrt(num).toFixed();
  let prime = [];
  let noPrime = [];

  console.log(squareRoot, "raiz cuadrada");

  for (let i = 0; i <= squareRoot; i++) {
    if (num % i === 0) {
      //  console.log("no soy primo", i);
      noPrime.push(i);
      console.log(noPrime, "noprime");
      console.log(i);
    } else {
      // console.log(" soy primo", i);
      prime.push(i);
      console.log(prime, "prime");
    }
  }

  if (prime.length === 0) {
    console.log("No soy primo");
  } else{
      console.log("soy primo");
  }
}

// console.log(isPrime(2));

// Answer
