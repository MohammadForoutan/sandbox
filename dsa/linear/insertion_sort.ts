import { swap } from "./util.ts";

function insertion_sort(arr: number[]) {
    console.log(arr);

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) { // if (arr[j] > arr[j - 1]) {
                swap(j, j - 1, arr);
            }
        }
    }

    console.log(arr);
}

// insertion_sort([2, 1, 3, 5]);
