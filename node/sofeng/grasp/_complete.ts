// Item class representing a product in the cart
class Item {
  constructor(
    public name: string,
    private price: number,
    private discount: number = 0
  ) {}

  getFinalPrice(): number {
    return this.price - this.discount; // Calculate price after discount
  }

  getDiscountAmount(): number {
    return this.discount;
  }
}

// Factory to create Item instances
class ItemFactory {
  static createItem(name: string, price: number, discount: number = 0): Item {
    return new Item(name, price, discount);
  }
}

// Payment Method Types
const paymentMethods = {
  CREDIT_CARD: "credit_card",
  PAYPAL: "paypal",
  CRYPTO: "crypto",
  BANK_TRANSFER: "bank_transfer",
} as const;

type PaymentMethod = (typeof paymentMethods)[keyof typeof paymentMethods];

// Base Payment Interface
interface BasePaymentDetails {
  type: PaymentMethod;
  amount: number;
  currency: string;
  timestamp: Date;
}

// Specific Payment Details
interface CreditCardDetails extends BasePaymentDetails {
  type: typeof paymentMethods.CREDIT_CARD;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

interface PayPalDetails extends BasePaymentDetails {
  type: typeof paymentMethods.PAYPAL;
  email: string;
  paypalTransactionId: string;
}

interface CryptoDetails extends BasePaymentDetails {
  type: typeof paymentMethods.CRYPTO;
  walletAddress: string;
  network: string;
  tokenType: string;
}

interface BankTransferDetails extends BasePaymentDetails {
  type: typeof paymentMethods.BANK_TRANSFER;
  accountNumber: string;
  routingNumber: string;
  bankName: string;
  accountHolderName: string;
}

type PaymentDetails =
  | CreditCardDetails
  | PayPalDetails
  | CryptoDetails
  | BankTransferDetails;

// Payment Processing
interface PaymentProcessor {
  process(details: PaymentDetails): PaymentResult;
}

interface PaymentResult {
  success: boolean;
  transactionId: string;
  timestamp: Date;
  error?: string;
}

// Concrete Processors
class CreditCardProcessor implements PaymentProcessor {
  process(details: CreditCardDetails): PaymentResult {
    console.log("Processing Credit Card Payment:", details);
    return {
      success: true,
      transactionId: `CC-${Date.now()}`,
      timestamp: new Date(),
    };
  }
}

class PayPalProcessor implements PaymentProcessor {
  process(details: PayPalDetails): PaymentResult {
    console.log("Processing PayPal Payment:", details);
    return {
      success: true,
      transactionId: `PP-${Date.now()}`,
      timestamp: new Date(),
    };
  }
}

// Payment Service
class PaymentService {
  private processors: Map<PaymentMethod, PaymentProcessor>;

  constructor() {
    this.processors = new Map<PaymentMethod, PaymentProcessor>([
      [paymentMethods.CREDIT_CARD, new CreditCardProcessor()],
      [paymentMethods.PAYPAL, new PayPalProcessor()],
    ]);
  }

  processPayment(details: PaymentDetails): PaymentResult {
    const processor = this.processors.get(details.type);
    if (!processor) {
      throw new Error(`No processor found for payment type: ${details.type}`);
    }
    return processor.process(details);
  }
}

// ShoppingCart class managing items and calculating totals
class ShoppingCart {
  private items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.getFinalPrice(), 0);
  }

  calculateTotalDiscount(): number {
    return this.items.reduce(
      (totalDiscount, item) => totalDiscount + item.getDiscountAmount(),
      0
    );
  }

  printReceipt(): void {
    console.log("--- Receipt ---");
    this.items.forEach((item) =>
      console.log(
        `${
          item.name
        } - $${item.getFinalPrice()} (Discount: $${item.getDiscountAmount()})`
      )
    );
    console.log(`Total: $${this.calculateTotal()}`);
    console.log(`Total Discount: $${this.calculateTotalDiscount()}`);
    console.log("----------------");
  }
}

const cart = new ShoppingCart();
cart.addItem(ItemFactory.createItem("Apple", 1.5));
cart.addItem(ItemFactory.createItem("Banana", 1.0, 0.2));
cart.printReceipt();

const paymentService = new PaymentService();

const paymentDetails: CreditCardDetails = {
  type: paymentMethods.CREDIT_CARD,
  amount: cart.calculateTotal(),
  currency: "USD",
  timestamp: new Date(),
  cardNumber: "4111111111111111",
  expiryDate: "12/25",
  cvv: "123",
  cardHolderName: "John Doe",
};

try {
  const result = paymentService.processPayment(paymentDetails);
  console.log("Payment Result:", result);
} catch (error) {
  console.error("Payment Error:", error);
}

// ----------
// paypal payment
const paypalPaymentDetails: PayPalDetails = {
  type: paymentMethods.PAYPAL,
  amount: cart.calculateTotal(),
  currency: "USD",
  timestamp: new Date(),
  email: "john.doe@example.com",
  paypalTransactionId: "PP-123456789",
};
try {
  const result = paymentService.processPayment(paypalPaymentDetails);
  console.log("Payment Result:", result);
} catch (error) {
  console.error("Payment Error:", error);
}
