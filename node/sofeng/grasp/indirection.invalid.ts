/**
 * Indirection principle of GRASP, which suggests that you should use an intermediary object
 * to mediate between other components or services. This can help reduce dependencies and
 * improve flexibility in your design.
 */

class Item {
  constructor(public name: string, public price: number) {}
}

class PaymentService {
  processPayment(amount: number, paymentInfo: any): void {
    console.log(`Processing payment of ${amount} with info:`, paymentInfo);
    // Payment processing logic here...
  }
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart
  private paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService(); // Direct dependency
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout(paymentInfo: any): void {
    const total = this.calculateTotal();
    this.paymentService.processPayment(total, paymentInfo); // Direct interaction
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Banana", 1.0));
cart.checkout({ cardNumber: "1234-5678-9012-3456", expiry: "12/25" });
