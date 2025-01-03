class Item {
  constructor(public name: string, public price: number) {}
}

class PaymentService {
  processPayment(amount: number, paymentInfo: any): void {
    console.log(`Processing payment of ${amount} with info:`, paymentInfo);
    // Payment processing logic here...
  }
}

class PaymentProcessor {
  private paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService(); // Indirection through PaymentProcessor
  }

  process(cart: ShoppingCart, paymentInfo: any): void {
    const total = cart.calculateTotal();
    this.paymentService.processPayment(total, paymentInfo);
  }
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

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Banana", 1.0));

const paymentProcessor = new PaymentProcessor();
paymentProcessor.process(cart, {
  cardNumber: "1234-5678-9012-3456",
  expiry: "12/25",
});
