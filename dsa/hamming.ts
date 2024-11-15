function hamming(str: string, str2: string): number {
  if (str.length !== str2.length) throw new Error("should same length")

  let dist = 0;

  for (let i = 0; i < str.length; i++) if (str[i] !== str2[i]) ++dist;

  return dist;
}

const res = hamming("raza", "reze")
console.log({ res })
