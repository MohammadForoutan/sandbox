class Resource {
  constructor(private name: string) {
    this.name = name;
    console.log(`${this.name} acquired`);
  }

  [Symbol.dispose]() {
    console.log(`${this.name} disposed`);
  }
}

{
  using resource = new Resource("MyResource");
  console.log("Inside the scope");
}
