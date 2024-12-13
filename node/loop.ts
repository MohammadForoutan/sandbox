import { log } from "node:console";

outer: for (let i = 0; i < 3; i++) {
  log(`Outer loop iteration: ${i}`);
  for (let j = 0; j < 3; j++) {
    log(`  Inner loop iteration: ${j}`);
    if (j === 1) {
      break outer; // Breaks the "outer" loop
    }
  }
}

log("==============================");

for (let i = 0; i < 3; i++) {
  console.log(`Outer loop iteration: ${i}`);
  inner: for (let j = 0; j < 3; j++) {
    console.log(`  Inner loop iteration: ${j}`);
    if (j === 1) {
      break inner; // Breaks the "inner" loop
    }
  }
}
