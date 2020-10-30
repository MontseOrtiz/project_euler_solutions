// Problem 5

// Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let arrayNumbers = [];
let array2 = [];



// function numberToFind() {
//     for (let i = 0; i < 10; i++) {
//       for (let b = 0; b <= 10; b++) {
//         let num1 = i;
//         let num2 = b;
//         let division = num1 % num2;
  
//         if (division === 0) {
//           arrayNumbers.push(num1);
//           array2.push(num2);
//         }
//         console.log(num1, num2, division, arrayNumbers);
//       }
//     }
  
//     console.log(arrayNumbers.includes(2));
  
//     for (let i = 0; i <= 10; i++) {
//       let incluye = [];
//       let numAbuscar = arrayNumbers.includes(i);
  
  
  
//       if (arrayNumbers.includes(i)) {
//       }
//     }
//   }


let  numberToFind = () => {
    main:
  for (let i = 1;true; i++) {
    
    for (let b = 1; b < 20; b++) {
        if(i % (b+1) !=0 ){
           continue main
        }
    }
   console.log(i);
   break
  }

}

console.log(numberToFind());


// Answer 232792560