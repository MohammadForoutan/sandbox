class Item {
  constructor(public name: string, public price: number) {}
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // Invalid: ShoppingCart is responsible for payment processing
  processPayment(paymentInfo: any): void {
    const total = this.calculateTotal();
    console.log(`Processing payment of ${total} with info:`, paymentInfo);
    // Payment processing logic here...
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Banana", 1.0));
cart.processPayment({ cardNumber: "1234-5678-9012-3456", expiry: "12/25" });
