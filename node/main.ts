export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (!import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const en = Math.random() > 0.75;
        if (!en) {
          return { value: en, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const d of dragonArmy) {
  console.log({ d });
}
