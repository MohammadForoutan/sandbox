import { swap } from "./util.ts";

function bubble_sort(arr: number[]) {
  console.log(arr);
  let swapFlag;
  let rounds = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    swapFlag = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapFlag = true;
        swap(j, j + 1, arr);
      }
      rounds++;
    }

    if (swapFlag === false) {
      break;
    }
  }

  console.log("rounds = ", rounds);
  console.log("flag = ", swapFlag);
  console.log(arr);
}

// bubble_sort([5, 4, 3, 1, 9, 2]);
