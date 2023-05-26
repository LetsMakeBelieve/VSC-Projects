console.log("Watch this:\n")

function fibonacci(n) {
    var sequence = [0, 1]; // Initialize the sequence with the first two numbers
  
    for (var i = 2; i < n; i++) {
      var num = sequence[i - 1] + sequence[i - 2]; // Calculate the next number in the sequence
      sequence.push(num); // Add the number to the sequence
    }
  
    return sequence;
  }
  
  // Testing the function
  var n = 10; // Change this value to generate a different number of Fibonacci numbers
  var result = fibonacci(n);
  console.log(result);