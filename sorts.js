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

// Incomplete Merge Sort
function mergeSort(arr, sort = false) {
    if (arr.length > 1 && sort === false) {
        let left = arr.splice(0, Math.floor(arr.length / 2));
        let right = arr;
        if (left.length > 1) {
            left_sort = mergeSort(left);
        }
        if (right.length > 1) {
            left_sort = mergeSort(right);
        }
    } else if (arr.length <= 1) {
        return
    }
}

mergeSort([7,1,4,9,2]);
