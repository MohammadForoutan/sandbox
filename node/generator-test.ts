const obj = { random: 1, aha: 2 };
for (let k of Object.entries(obj)) {
  console.log({ [k[0]]: k[1] });
}
