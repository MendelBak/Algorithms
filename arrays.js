// Interleave two unsorted arrays while creating a new array.
function interleaveArrays(arr1, arr2) {
    let newArr = [];
    let shortArr;
    let longArr;
    let i = 0;
    if (arr1.length >= arr2.length) {
        longArr = arr1;
        shortArr = arr2;
    } else {
        longArr = arr2;
        shortArr = arr1;
    }
    for (i; i < longArr.length; i++) {
        if (i < shortArr.length) {
            newArr.push(shortArr[i]);
            newArr.push(longArr[i]);
        } else {
            newArr.push(longArr[i]);
        }
    }
    return newArr;
}
// Function Call
interleaveArrays([1, 2, 3], [-9, -10, -123, 123]);

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
