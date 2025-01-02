// Valid design: Separate interfaces for each payment method
/**
 * Valid Design:
 * Separate interfaces (CreditCardProcessor, PayPalProcessor, and BankTransferProcessor) are created for each payment method.
 * Each class implements only the relevant interface, ensuring that they are not forced to implement methods they do not support.
 */

interface CreditCardProcessor {
  processCreditCardPayment(amount: number, cardDetails: string): void;
}

interface PayPalProcessor {
  processPayPalPayment(amount: number, email: string): void;
}

interface BankTransferProcessor {
  processBankTransfer(amount: number, accountDetails: string): void;
}

// CreditCardPayment class implementing the valid interface
class CreditCardPayment implements CreditCardProcessor {
  processCreditCardPayment(amount: number, cardDetails: string): void {
    console.log(
      `Processing credit card payment of ${amount} with card details: ${cardDetails}`
    );
  }
}

// PayPalPayment class implementing the valid interface
class PayPalPayment implements PayPalProcessor {
  processPayPalPayment(amount: number, email: string): void {
    console.log(`Processing PayPal payment of ${amount} for email: ${email}`);
  }
}

// BankTransferPayment class implementing the valid interface
class BankTransferPayment implements BankTransferProcessor {
  processBankTransfer(amount: number, accountDetails: string): void {
    console.log(
      `Processing bank transfer of ${amount} to account: ${accountDetails}`
    );
  }
}

// Demonstration of the valid design
function runValidPaymentProcessing() {
  const creditCardPayment = new CreditCardPayment();
  creditCardPayment.processCreditCardPayment(100, "1234-5678-9012-3456");

  const payPalPayment = new PayPalPayment();
  payPalPayment.processPayPalPayment(50, "user@example.com");

  const bankTransferPayment = new BankTransferPayment();
  bankTransferPayment.processBankTransfer(200, "Account12345");
}

// Run the valid design demonstration
console.log("Valid Design Output:");
runValidPaymentProcessing();
