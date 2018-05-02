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