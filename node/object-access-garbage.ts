// Define a custom symbol for unaryMinus
const unaryMinus = Symbol("unaryMinus");

// Define a Money class with the unaryMinus behavior
class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Implement the custom unaryMinus symbol
  [unaryMinus]() {
    return new Money(-this.amount, this.currency);
  }

  // Override toString for better logging
  toString() {
    return `${this.currency}${this.amount.toFixed(2)}`;
  }
}

// Create an instance of Money
const salary = new Money(5000, "$");

// Use the custom unaryMinus symbol to negate the money amount
const debt = salary[unaryMinus]();

console.log(salary.toString()); // "$5000.00"
console.log(debt.toString()); // "-$5000.00"
