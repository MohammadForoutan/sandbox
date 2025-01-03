class Item {
  constructor(public name: string, public price: number) {}
}

class CreditCardPayment {
  processPayment(amount: number, cardInfo: any): void {
    console.log(
      `Processing credit card payment of ${amount} with info:`,
      cardInfo
    );
    // Payment processing logic here...
  }
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart
  private paymentMethod: CreditCardPayment; // Direct dependency on a specific payment method

  constructor() {
    this.paymentMethod = new CreditCardPayment(); // Hardcoded dependency
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout(cardInfo: any): void {
    const total = this.calculateTotal();
    this.paymentMethod.processPayment(total, cardInfo); // Direct interaction
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Banana", 1.0));
cart.checkout({ cardNumber: "1234-5678-9012-3456", expiry: "12/25" });
