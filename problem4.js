// Problem 4

// Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function findPalin() {
  let num1;
  let num2 = 1;
  let product;
  let productInvert;
  let arrayNum = [];
  let arrayNum2 = [];

  //Hacer un for para poder multiplicar los numeros
  for (let i = 900; i <= 999; i++) {
    for (let b = 1; b <= 999; b++) {
      num1 = i;
      num2 = b;

      //Realizar la multiplicacion
      product = num1 * num2;

      // Pasamos a string el resultado de la multiplicacion
      let pasarAString = product.toString();

      //Invertir el resultado de la multiplicacion  que pasamos a string
      productInvert = pasarAString.split("").reverse().join("");

      //Comprobar que sea palindromo el resultado
      if (product == productInvert) {
        // Pasar los palindromos a un array y en otro el tamaño
        arrayNum.push(productInvert);
        arrayNum2.push(productInvert.length);
      }
    }
  }

  //Encontrar el elemento mas largo del array
  let maximo = Math.max.apply(null, arrayNum2);
  let newArr = [];
  let last 

  //Crear un for para encontrar los elemtos que tengan el lenght de maximo
  for (let elemento of arrayNum) {
    if (elemento.length === maximo) {
      //Si encontramos un elemento con el mismo lenght lo agregamos a un nuevo array
      newArr.push(elemento);
      // Acomodamos el array de menor a mayor
      let mayor = newArr.sort();
      //Solo traer el ultimo elemento de array que ya habiamos acomodado
      last = newArr[newArr.length - 1];
    //   console.log("Ultmo elemento",last);

    }
  }

        return last;
}

console.log(findPalin());

// Invertir el numero

// function invertido(num) {
//   let pasarAString = num.toString();
//   let numinvert = pasarAString.split("").reverse().join("");
//   return numinvert;
// }

// console.log(invertido(123));


// Answer 906609