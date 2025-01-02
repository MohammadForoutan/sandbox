// IPaymentMethod.ts
interface IPaymentMethod {
  process(): void;
}

// CreditCardPayment.ts
class CreditCardPayment implements IPaymentMethod {
  constructor(private amount: number) {}

  process() {
    console.log(`Processing credit card payment of ${this.amount}`);
  }
}

// PayPalPayment.ts
class PayPalPayment implements IPaymentMethod {
  constructor(private amount: number) {}

  process() {
    console.log(`Processing PayPal payment of ${this.amount}`);
  }
}

// BankTransferPayment.ts
class BankTransferPayment implements IPaymentMethod {
  constructor(private amount: number) {}

  process() {
    console.log(`Processing bank transfer payment of ${this.amount}`);
  }
}

// PaymentProcessor.ts
class PaymentProcessor {
  processPayment(paymentMethod: IPaymentMethod) {
    paymentMethod.process();
  }
}

// Usage
const processor = new PaymentProcessor();
const creditCardPayment = new CreditCardPayment(100);
const paypalPayment = new PayPalPayment(50);
const bankTransferPayment = new BankTransferPayment(75);

processor.processPayment(creditCardPayment);
processor.processPayment(paypalPayment);
processor.processPayment(bankTransferPayment);
