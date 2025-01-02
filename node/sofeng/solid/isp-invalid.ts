// Invalid design: Single interface for all payment methods
/**
 * A single interface PaymentProcessor is created that includes methods for credit card payments, PayPal payments, and bank transfers.
 * The CreditCardPayment class implements all methods, but it throws errors for unsupported methods (PayPal and bank transfer),
 * violating the Interface Segregation Principle.
 * The Interface Segregation Principle (ISP) is one of the five SOLID principles of object-oriented design.
 * It states that no client should be forced to depend on methods it does not use. In other words, it's better to have many small,
 * specific interfaces rather than a large, general-purpose interface.
 */
interface PaymentProcessor {
  processCreditCardPayment(amount: number, cardDetails: string): void;
  processPayPalPayment(amount: number, email: string): void;
  processBankTransfer(amount: number, accountDetails: string): void;
}

// CreditCardPayment class implementing the invalid interface
class CreditCardPayment implements PaymentProcessor {
  processCreditCardPayment(amount: number, cardDetails: string): void {
    console.log(
      `Processing credit card payment of ${amount} with card details: ${cardDetails}`
    );
  }

  processPayPalPayment(amount: number, email: string): void {
    throw new Error("PayPal payment not supported");
  }

  processBankTransfer(amount: number, accountDetails: string): void {
    throw new Error("Bank transfer not supported");
  }
}

// Demonstration of the invalid design
function runInvalidPaymentProcessing() {
  const creditCardPayment = new CreditCardPayment();
  creditCardPayment.processCreditCardPayment(100, "1234-5678-9012-3456");

  try {
    creditCardPayment.processPayPalPayment(50, "user@example.com");
  } catch (error: { message: string }) {
    console.error(error.message);
  }

  try {
    creditCardPayment.processBankTransfer(200, "Account12345");
  } catch (error: { message: string }) {
    console.error(error.message);
  }
}

// Run the invalid design demonstration
console.log("Invalid Design Output:");
runInvalidPaymentProcessing();
