/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2    4   15
 \ /   / | \ /
  3   5  8  9
   \ / \     \
    6   7    11


numOfParents = 1;

const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6], [15, 9],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
];

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.


Output may be in any order:

findNodesWithZeroAndOneParents(parentChildPairs) => [
  [1, 2, 4, 15],       // Individuals with zero parents
  [5, 7, 8, 11]        // Individuals with exactly one parent
]

n: number of pairs in the input
*/

function findNodesWithNoParents(arr) {
  let currentNum = arr[0][0];
  let foundParent = false;
  let nodesWithZeroParents = [];
  
  for(let i = 1; i < arr.length - 1; i++) {
   for(let j = 0; j < arr.length; j++) {
     
    if(arr[j][1] === currentNum) {
      foundParent = true;
      break;      
    }
   }
    
    
   if (!foundParent) {
     if(!nodesWithZeroParents.includes(currentNum)) {
        nodesWithZeroParents.push(currentNum)
     }
    }
    
    foundParent = false;
    currentNum = arr[i][0];
    
  }
  
  console.log(nodesWithZeroParents)
}

const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6], [15, 9],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
];

findNodesWithNoParents(parentChildPairs);




function findNodesWithOneParent(arr) {

  let parentCount = 0;
  let currentNum = arr[0][1];
  let nodesWithOneParent = [];
  
  for(let i = 1; i <= arr.length; i++) {       
   for(let j = 0; j < arr.length; j++) {
     
    if(arr[j][1] === currentNum) {
      parentCount++;
    }
   }
    
   if (parentCount === 1) {
     if(!nodesWithOneParent.includes(currentNum)) {
        nodesWithOneParent.push(currentNum)
     }
    }
    
    parentCount = 0;
    
    if(i < arr.length) {
      currentNum = arr[i][1];  
    }
    
    
  }
  console.log(nodesWithOneParent)
}



findNodesWithOneParent(parentChildPairs);





