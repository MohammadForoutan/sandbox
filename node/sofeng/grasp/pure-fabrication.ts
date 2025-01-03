/*
 * the PaymentProcessor class is created to handle payment processing.
 * This class does not represent a concept in the problem domain (the
 * shopping cart) but serves to encapsulate payment processing logic.
 * This adheres to the Pure Fabrication principle by separating concerns,
 * reducing coupling, and improving cohesion.
 */
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
}

class PaymentProcessor {
  static processPayment(cart: ShoppingCart, paymentInfo: any): void {
    const total = cart.calculateTotal();
    console.log(`Processing payment of ${total}$ with info:`, paymentInfo);
    // Payment processing logic here...
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Banana", 1.0));
PaymentProcessor.processPayment(cart, {
  cardNumber: "1234-5678-9012-3456",
  expiry: "12/25",
});
