// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.



function collatz_num(num) {
    if(num % 2 == 0) {
      return num / 2;
    }
    else {
      return (num * 3) + 1;
    }
  }
  
  function collatz_sequence(num) {
    var counter = 1;
    while(num != 1) {
      num = collatz_num(num);
      counter++;
    }
    return counter;
  }
  
  function longest_chain(num) {
    var max = 0;
    var max_index;
      
    for(var i=1; i<num; i++) {
      var sequence = collatz_sequence(i);
      if(sequence > max) {
        max = sequence;
        max_index = i;
      }
    }
    return max_index;
  }
  
  console.log(longest_chain(1000000));

  //Solution
//   837799