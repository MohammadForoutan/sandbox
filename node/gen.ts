import { scryptSync } from "node:crypto";
import { Readable } from "node:stream";
import { setTimeout} from "node:timers/promises"

function* gen() {
  yield 2;
  yield 1;
  yield 3;
}

// const res = gen();
// console.log({ res: res.return });

// const res = scryptSync("passaslkjklasd", "salt", 2);
// console.log({ res: res.toString() });

const ac = new AbortController();

  const stream = Readable.from([1], { signal: ac.signal}).on("data")
  .map(d => setImmediate(d))

setTimeout(100)