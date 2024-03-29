// Problem 9

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

for(var a = 1; a < 500; a++){
  for(var b = a; b < 1000; b++){
    var c = Math.sqrt(a * a + b * b);
    if(c > b && Number.isInteger(c) && a + b + c == 1000){
      console.log(a * b * c);
    }
  }
}


// solucion 31875000