// This is a collection of algorithm challenges and their solutions that I've solved. They range in complexity and elegance of their solutions.
// All solutions are written in Javascript 


// Recursively finds index of first unique letter in a string. (empty space counts as a unique character)
// Case insensitive
function rIdxOfFirstUniqueLetter(string, idx = 1, current = 0, found = false) {
  if (current >= string.length) {
    return false;
  }
  if (idx >= string.length) {
    if (found === true) {
      current++;
      idx = 0;
      found = false;
    } else {
      // sucess
      return current;
    }
  } else if (string[current].toUpperCase() === string[idx].toUpperCase() && current !== idx) {
    found = true;
    idx++;
  } else {
    idx++;
  }
  return rIdxOfFirstUniqueLetter(string, idx, current, found);
}
// Function Call
rIdxOfFirstUniqueLetter("aABbc");

// Find all the unique letters in a string and return them in a new string. 
// Case insensitive
function findUniqueLetters(string) {
  let current = 0;
  let idx = 1;
  let uniqueLetters = "";
  let unique = true;
  for (current; current <= string.length - 1; current++) {
    // reset these values to check the whole string one more after a loop has finished.
    idx = 0;
    unique = true;
    for (idx; idx <= string.length - 1; idx++) {
      if (string[idx].toUpperCase() === string[current].toUpperCase() && idx !== current) {
        unique = false;
        // This stops it from searching the rest of the string since we already know that it's not unique.
        idx = string.length - 1;
      }
    }
    if (unique === true) {
      uniqueLetters += string[current];
    }
  }
  return uniqueLetters;
}
// Function call
findUniqueLetters("Aa bV Bv");


// ProjectEuler.net Question #1
// Find sum of all multiples of 3 and 5 from 0 - 1000.
function multiplesof3and5() {
  var sum = 0;
  for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return (sum);
}

multiplesof3and5(); // Function Call


// ProjectEuler.net Question #2
// Find sum of all even numbers using Fibonacci sequence.
function fibSum() {
  var placeholder1 = 1;
  var placeholder2 = 1;
  var current = 0;
  var sum = 0;
  while (current <= 4000000) {
    current = placeholder1 + placeholder2;
    placeholder1 = placeholder2;
    placeholder2 = current;
    if (current % 2 === 0) {
      sum += current;
    }
  }
  return sum;
}

fibSum(); // Function Call


// Create Binary Search Tree and Add New Node. (Equal values insert to the left side).
function BST() {
  this.root = null;

  function Node(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }

  // Adds a new node to the BST. Does not reorder nodes but appends the new node to the end of the BST following the standard BST chain of logic (placed on right or left side depending on the previous node value compared to new node value).

  	this.add = function(val) {
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}
		let walker = this.root;
		while (true) {
			if (val >= walker.value && walker.right) {
				walker = walker.right;
			} else if (val >= walker.value && !walker.right) {
				walker.right = new Node(val);
				return this;
			}

			if (val < walker.value && walker.left) {
				walker = walker.left;
			} else if (val < walker.value && !walker.left) {
				walker.left = new Node(val);
				return this;
			}
		}
	};


  // Inserts a new node to the BST while ensuring the node is in the correct position based on its numerical value. (reorders *only* conflicting BST nodes to place new node in proper numerical location).
  this.insert = function (val) {
    let root = this.root;

    if (!root) {
      this.root = new Node(val);
      console.log(`A root has been defined for your BST with a value of ${val}.`);
      return this;
    }

    let currentNode = this.root;
    const newNode = new Node(val);

    while (currentNode) {
      if (newNode.value <= currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else if (
          newNode.value <= currentNode.value &&
          newNode.value > currentNode.left.value
        ) {
          let temp = currentNode.left;
          currentNode.left = newNode;
          newNode.left = temp;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
      if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else if (
          newNode.value > currentNode.value &&
          newNode.value < currentNode.right.value
        ) {
          let temp = currentNode.right;
          currentNode.right = newNode;
          newNode.right = temp;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    console.log(`A new node with the value of {val} has been inserted in the BST in a position that corresponds to its numerical value.`);
  };
  console.log("A new BST has been created with a null root and no nodes.");
}


var MyBST = new BST();
MyBST.add(770);
// End BST


// Recursive Fibbonacci Function
function rFib(target, temp, prevSum = 0, sum = 1, current = 2) {
  if (current > target) {
    return sum;
  }
  temp = sum;
  sum += prevSum;
  prevSum = temp;
  current++;
  return rFib(target, temp, prevSum, sum, current);
}

rFib(21);



// This function allows a user to input an index value (non zero indexed for ease of user use) and receives the correct value from the fibonacci sequence.
function findInFib(num) {
  let big = 1;
  let small = 1;
  let temp;
  let count = 2;
  while (count < num) {
    temp = big;
    big += small;
    small = temp;
    count++
    console.log(count, small, big);
  }
  return big;

}

findInFib(10);


// Recursively return the factorial of a number.
function rFactorial(num, sum = 1, current = 2) {
  if (current > num) {
    return sum;
  }
  sum *= current;
  current++;
  return rFactorial(num, sum, current);
}
// Function Call
rFactorial(4);


// Recursively return the Sigma value of a number
function rSigma(num, sum = 1, current = 2) {
  if (current > num) {
    return sum;
  }
  sum += current;
  current++;
  return rSigma(num, sum, current);
}
// Function Call
rSigma(5);


// Recursive function that returns Max, Min, and Avg from a user inputted array. (ES6 syntax)
function rMaxMinAvg(arr, i = 1, max = arr[0], min = arr[0], sum = arr[0]) {
  if (i >= arr.length) {
    console.log(max, min, sum, sum / arr.length);
    return;
  }
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
  sum += arr[i];
  rMaxMinAvg(arr, i += 1, max, min, sum);
}
// Function Call
rMaxMinAvg([1, 2, 3, 4, 5]);


// Recursive function that checks a user submitted array for negative numbers. Returns only positive numbers. 
function rNoNeg(arr, i = 0, newArr = []) {
  if (i >= arr.length) {
    console.log(newArr);
    return;
  }
  if (arr[i] >= 0) {
    newArr.push(arr[i]);
  }
  rNoNeg(arr, i += 1, newArr);

}
// Function Call
rNoNeg([1, 2, -4, 8, -30]);

// Given two numbers, return array of length num1 with each value num2. Print "Jinx" if they are the same.
// Note: Does not work with negative numbers, obviously.
function twoVals(val1, val2) {
  // This performs type checking on the submitted variables. Kinda clever, actually.
  if (Math.floor(val1) !== val1 || Math.floor(val2) !== val2) {
    return "Please provide a number.";
  }
  const newArr = [];
  for (var i = 0; i < val1; i++) {
    if (val1 === val2) {
      newArr.push("Jinx");
    }
    else {
      newArr.push(val2);
    }
  }
  return newArr;
}
// Function call
twoVals(1, 1);


// Simple F to C and C to F converter
function approximateFtoCConversion(num, tempType) {
  if (tempType == "F" || tempType == "f") {
    // Math.round ensures that two decimals are displayed.
    return `${num} degrees Fahrenheit is ${Math.round(((num - 32) / 1.8) * 100) / 100} Celsius`;
  }
  else if (tempType == "C" || tempType == "c") {
    return `${num} degrees Celsius is ${Math.round((num * 1.8 + 32) * 100) / 100} Fahrenheit`;
  }
}
// Function call
approximateFtoCConversion(32, "F");

// Function checks if a passed in number is divisible by 4 and 6. It uses two callbacks to deliver an error or success message.
function errorHandler(num) {
  if (num % 4 !== 0) {
    console.log("Num is not divisible by 4!");
  }
  if (num % 6 !== 0) {
    console.log("Num is not divisible by 6!");
  }
}

function successHandler(num) {
  console.log("Num is divisible by 4 and 6!");
  for (var i = 2; i < 11; i++) {
    if (num % i === 0) {
      console.log("Num is also divisible by", i);
    }
  }
}


function checkDivisibilityBy4and6(num, errorHandler, successHandler) {
  if (num % 4 === 0 || num % 6 === 0) {
    return successHandler(num);
  } else {
    return errorHandler(num);
  }
}
// Function Call
checkDivisibilityBy4and6(12, errorHandler, successHandler);

// Checks a passed in number against all numbers in an array. Will only return a success message if it is divisible by ALL the numbers in the array, else, returns an error message.
function checkDivisibilityByArr(num, arr) {
  var error_counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
      continue;
    } else {
      error_counter++;
    }
  }
  if (error_counter <= 0) {
    return ("Num is divisible by all the values in the array!");
  } else {
    return ("Num is not divisible by all the values in the array.");
  }
}
// Function Call
checkDivisibilityByArr(12, [1, 2, 4, 3, 6]);


// Curry function. Takes a  function (add_num) that uses two parameter and returns a new function that executes the callback and uses "ingredient" as the first parameter for that callback function.
function add_num(x, y) {
  return x + y;
}

function Curry(callback, ingredient) {
  return (y) => {
    return callback(ingredient, y);
  };
}

var add1 = Curry(add_num, 5);
add1(10);


//Return Boolean whether input string is a palindrome or not.
function isPalindrome(str) {
  var i = 0;
  for (i = 0; i < str.length / 2; i++) {
    console.log(str[i]);
    console.log(str[str.length - (i + 1)]);
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

// Function Call
isPalindrome("racecar"); //function call



//Return the numerical value (base-10) of an input of Roman numerals.
function RomeInt(str) {
  var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (values[str[i]] < values[str[i + 1]]) {
      sum += values[str[i + 1]] - values[str[i]];
      i++;
    } else {
      sum += values[str[i]];
    }
  }
  return sum;
}


RomeInt("MMMMMDCCLXXVIII"); //function call

//Return boolean if there is a balance point in a given array. Balance point is where the sum of one side of the array equals the sum of the other side.

function balancePoint(arr) {
  var leftSum = arr[0];
  var rightSum = 0;

  for (var i = 1; i < arr.length; i++) {
    rightSum += arr[i];
  }
  if (leftSum === rightSum) {
    return true;
  }

  for (var j = 1; j < arr.length - 1; j++) {
    rightSum -= arr[j];
    leftSum += arr[j];
    if (leftSum === rightSum) {
      return true;
    }
  }
  return false;
}
balancePoint([1, 2, 3, 4, 10]); // Function Call
// Function call
balancePoint([1, 1]);


// Takes a number that represents a number of US cents and returns the optimal number of US coins to return. This is not a great implementation. I believe there is a better way to do this. Can be easily modified to allow input of numbers greater than 99 cents (whole dollars + cents).
function coinChange(change) {
  if (Math.floor(change) !== change) {
    return "Please input a whole number";
  }
  if (change > 99) {
    return "Change due must be less than one whole dollar. Please input a number between 1 and 99.";
  }
  const q = 25;
  const d = 10;
  const n = 5;
  const p = 1;
  let qCount = 0;
  let dCount = 0;
  let nCount = 0;
  let pCount = 0;
  let totalChange = 0;

  while (totalChange < change) {
    while (totalChange + q <= change) {
      totalChange += q;
      qCount++;
    }
    while (totalChange + d <= change) {
      totalChange += d;
      dCount++
    }
    while (totalChange + n <= change) {
      totalChange += n;
      nCount++;
    }
    while (totalChange + p <= change) {
      totalChange += p;
      pCount++;
    }
  }
  return `Quarters ${qCount}, Dimes ${dCount}, Nickels ${nCount}, Pennies ${pCount}, Total Change Due $0.${totalChange}`;
}
// Function call
coinChange(97);
// Reverses a given array. Does so without iterating through each item multiple times (not Bubble Sort derived).
function reverseArray(arr) {
  let i;
  let j = arr.length - 1;
  let temp1;

  for (i = 0; i < Math.floor(arr.length / 2); i++) {
    console.log(`j is ${j}. i is ${i}. Array is ${arr}`);
    temp1 = arr[i];
    arr[i] = arr[j];
    arr[j] = temp1;
    j--;
  }
  console.log(Math.floor(arr.length / 2));
  return arr;
}
// Function call
reverseArray([0, 1, 2, 3, 4, 5, 6]);


//Flatten Array. Given an array that contains arrays inside, remove the items from the subarray and place them in a new array.
function flattenArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var arr_holder = arr[i];
      for (var k = 0; k < arr_holder.length; k++) {
        newArr.push(arr_holder[k]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// Function call
flattenArr([1, 9, [7, 3, 4], 8, [3]]);

// Reduce Array: takes an array and a callback function and returns the result.
// function "multiply" is the callback function that will be used below.
function multiply(a, b) {
  return a * b;
}

// Solution #1 overwrites the user inputted array.
// function reduce(arr, callback) {
//   for(let i = 0; i < arr.length-1; i++){
//     arr[i+1] = callback(arr[i], arr[i+1]);
//   }
//   return arr[arr.length-1]
// }

// Solution #2 does not overwrite the array but saves the results to a new variable.
function reduce(arr, callback) {
  var results = 0;
  results = callback(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    results = callback(arr[i], results);
  }
  return results;
}
// Function call
reduce([2, 2, 2, 2], multiply);


// Filter Array. Runs a callback on each element in the array, if the result of the callback is false, remove the element from the array.
// This is the callback function used below.
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// This solution takes the true elements and pushes them into a new array which is then returned.
function filterArr(arr, callback) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    var temp = callback(arr[i]);
    if (temp) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// Function call
filterArr([1, 2, 3, 4], isEven);