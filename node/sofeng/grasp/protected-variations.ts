class Item {
  constructor(public name: string, public price: number) {}
}

// Payment method interface
interface PaymentMethod {
  processPayment(amount: number, paymentInfo: any): void;
}

class CreditCardPayment implements PaymentMethod {
  processPayment(amount: number, cardInfo: any): void {
    console.log(
      `Processing credit card payment of ${amount} with info:`,
      cardInfo
    );
    // Payment processing logic here...
  }
}

class PayPalPayment implements PaymentMethod {
  processPayment(amount: number, accountInfo: any): void {
    console.log(
      `Processing PayPal payment of ${amount} with info:`,
      accountInfo
    );
    // Payment processing logic here...
  }
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart
  private paymentMethod: PaymentMethod; // Dependency on the interface

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod; // Injected dependency
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout(paymentInfo: any): void {
    const total = this.calculateTotal();
    this.paymentMethod.processPayment(total, paymentInfo); // Interaction through the interface
  }
}

// Usage
const creditCardPayment = new CreditCardPayment();
const cartWithCreditCard = new ShoppingCart(creditCardPayment);
cartWithCreditCard.addItem(new Item("Apple", 1.5));
cartWithCreditCard.addItem(new Item("Banana", 1.0));
cartWithCreditCard.checkout({
  cardNumber: "1234-5678-9012-3456",
  expiry: "12/25",
});

const payPalPayment = new PayPalPayment();
const cartWithPayPal = new ShoppingCart(payPalPayment);
cartWithPayPal.addItem(new Item("Orange", 2.0));
cartWithPayPal.checkout({ email: "user@example.com" });
