// Unoptimized Insertion Sort
function insertionSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let idx = 1;
    let idx2;
    let current;
    for (idx; idx < arr.length; idx++) {
        idx2 = idx - 1;
        current = arr[idx];
        while (current < arr[idx2] && idx2 >= 0) {
            arr[idx2 + 1] = arr[idx2];
            arr[idx2] = current;
            idx2--;
        }
    }
    return arr;
}

insertionSort([7, 613, 770, 3, 1, 4, -1, -7, 0, 0, 0, 613]);

// Incomplete Merge Sort Function
function mergeSort(arr) {
    if (arr.length > 1) {
        let left = arr.splice(0, Math.floor(arr.length / 2));
        let right = arr;
        left_sort = mergeSort(left);
        left_sort = mergeSort(right);
        return
    }
    // Function call
    mergeSort([7, 1, 4, 9, 2]);


    // Incomplete Quick Sort Function
    // There are two rules to follow in a Quick Sort function
    // Rule #1: if(arr[left] >= arr[pivot] && arr[right] <= arr[pivot]) { swap those two values};
    // Rule #2: if(left >= right) { split the array and recursively call the original quickSort function on both of the new arrays}

    function quickSort(arr) {
        // Variable Declarations
        let left = arr[0];
        let right = arr[arr.length - 1];
        let pivot = arr[Math.floor(arr.length / 2)];
        let temp;

        // Compare and swap elements that are on the left and right of the pivot point
        while (left <= right) {
            if (arr[left] >= arrr[pivot]) {
                while (right >= left) {
                    if (arr[right] >= arr[pivot]) {
                        temp = arr[left];
                        arr[left] = arr[right];
                        arr[right] = temp;
                    }
                    right--;
                }
            }
            left++;
        }
    }
    // Function Call
    quickSort([3, 7, 9, 4, 0, 1, 2, 3]);