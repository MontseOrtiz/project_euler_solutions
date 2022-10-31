// Problem 7 

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function nthPrime(nth){
  var P= [2], n= 3, div, i, limit,isPrime;
  while(P.length<nth){
      div= 3, i= 1;
      limit= Math.sqrt(n)+1;
      isPrime= true;
      while(div<limit){
          if(n%div=== 0){
              isPrime= false;
              div= limit;
          }
          else div= P[i++] || div+ 2;
      }
      if(isPrime) P.push(n);
      n+= 2;
  }
  return P[P.length-1];
}

console.log(nthPrime(10001))

// 104743 solucion