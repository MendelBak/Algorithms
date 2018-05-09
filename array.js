// Interleave two unsorted arrays while creating a new array.
// Longer code (redundant if/else statements) reduces the space complexity caused by reassigning the arrays to new shortArr/longArr variables.
function interleaveArrays(arr1, arr2) {
    let newArr = [];
    let i = 0;
    if (arr1.length >= arr2.length) {
        for (i; i < arr1.length; i++) {
            if (i < arr2.length) {
                newArr.push(arr2[i]);
                newArr.push(arr1[i]);
            } else {
                newArr.push(arr1[i]);
            }
        }
    } else {
        for (i; i < arr2.length; i++) {
            if (i < arr1.length) {
                newArr.push(arr1[i]);
                newArr.push(arr2[i]);
            } else {
                newArr.push(arr2[i]);
            }
        }
    }
    return newArr;
}
// Function Call
interleaveArrays([4, 6, 2, 5, 9], [5, 4, 6, 5, 10, 11, 12]);

// Interleave two unsorted arrays in place.
function interleaveArrays(arr1, arr2) {
    let j = 1;
    let longer;
    let shorter;
    if (arr1 <= arr2) {
        longer = arr2;
        shorter = arr1;
    } else {
        longer = arr1;
        shorter = arr2;
    }
    for (var i = 0; i < shorter.length; i++) {
        longer.splice(j, 0, shorter[i]);
        j += 2;
    }
    return longer;
}
// Function Call
interleaveArrays([4, 6, 2, 5, 9], [5, 4, 6, 5, 10, 11, 12]);


// Incomplete.
// Merge two pre-sorted arrays.
function mergeSortedArr(arr1, arr2) {
	let newArr = [];
	let counter1 = 0;
	let counter2 = 0;
	while (counter1 < arr1.length || counter2 < arr2.length) {
		console.log('counter1', counter1);
		console.log('counter2', counter2);
		if (arr1[counter1] <= arr2[counter2]) {
			newArr.push(arr1[counter1]);
		} else if (arr2[counter2] <= arr1[counter1]) {
			newArr.push(arr2[counter2]);
			console.log('newArr', newArr);
		}
		if (counter1 <= arr1.length - 1) {
			counter1++;
		}
		if (counter2 <= arr2.length - 1) {
			counter2++;
		}
	}
	return newArr;
}

mergeSortedArr([1, 2, 3], [4, 5, 6]);
