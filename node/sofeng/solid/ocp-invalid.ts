/**
 * In this example, if we want to add a new payment method (e.g., bank transfer), we would need to modify the PaymentProcessor class,
 *  which violates the Open/Closed Principle.
 */
class CreditCardPayment {
  constructor(private amount: number) {}

  process() {
    console.log(`Processing credit card payment of ${this.amount}`);
  }
}

class PayPalPayment {
  constructor(private amount: number) {}

  process() {
    console.log(`Processing PayPal payment of ${this.amount}`);
  }
}

class PaymentProcessor {
  processPayment(paymentType: string, amount: number) {
    if (paymentType === "creditCard") {
      const payment = new CreditCardPayment(amount);
      payment.process();
    } else if (paymentType === "paypal") {
      const payment = new PayPalPayment(amount);
      payment.process();
    } else {
      throw new Error("Payment type not recognized");
    }
  }
}

// Usage
const processor = new PaymentProcessor();
processor.processPayment("creditCard", 100);
processor.processPayment("paypal", 50);
