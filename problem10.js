//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

//Find the sum of all the primes below two million.

function sumPrimes(num) {

    let sum = 0;

    const isPrime = n => {
        for (let i = 2; i < n; i++)
            if (n % i === 0) return false;
        return n !== 1;
    }

    for (i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
            console.log(i);
            console.log(isPrime(i));
        }
    }

    console.log(sum);
    return sum;
}

// test here
sumPrimes(2000000);

//solution
//142913828922