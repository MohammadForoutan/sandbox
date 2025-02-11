function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract elements from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move the current root (largest element) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap

    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr: number[], n: number, i: number): void {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // left = 2*i + 1
  const right = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
