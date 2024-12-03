interface StackInterface {
  top?: string;
  data: string[];
  pop: () => string | undefined;
  push: (d: string) => void;
}
function isValid(s: string): boolean {
  const stack: StackInterface = {
    top: undefined,
    data: [] as string[],
    pop: function () {
      if (this.data.length < 2) {
        this.top = undefined;
        return this.data.pop();
      } else {
        this.top = this.data.at(-2);
        return this.data.pop();
      }
    },
    push(d: string) {
      this.top = d;
      this.data.push(d);
    },
  };

  for (const c of s) {
    // array is empty but we have close parenthese
    if (stack.top === undefined && (c === "}" || c === ")" || c === "]")) {
      return false;
    }

    if (c === "{" || c === "(" || c === "[") {
      stack.push(c);
    } else if (c === "}" && stack.top !== "{") {
      return false;
    } else if (c === ")" && stack.top !== "(") {
      return false;
    } else if (c === "]" && stack.top !== "[") {
      return false;
    } else {
      stack.pop();
    }
  }

  return stack.top === undefined;
}

console.log(isValid("()[]{}"));
