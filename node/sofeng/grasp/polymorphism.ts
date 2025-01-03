class Item {
  constructor(public name: string, public price: number) {}

  getFinalPrice(): number {
    return this.price; // Default behavior
  }

  getDiscountAmount(): number {
    return 0; // Default behavior
  }
}

class DiscountedItem extends Item {
  constructor(name: string, price: number, public discount: number) {
    super(name, price);
  }

  override getDiscountAmount(): number {
    return this.discount; // Overridden behavior
  }

  override getFinalPrice(): number {
    return this.price - this.discount; // Overridden behavior
  }
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.getFinalPrice(), 0);
  }

  calulateDiscountedTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.getDiscountAmount(),
      0
    );
  }

  printReceipt(): void {
    console.log("Receipt:");
    // print table
    console.table(this.items);
    console.log(`Total: $${this.calculateTotal()}`);
    console.log(`Discounted Total: $${this.calulateDiscountedTotal()}`);
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new DiscountedItem("Banana", 1.0, 0.2));
console.log(cart.calculateTotal()); // Output: 2.3
console.log("================");
cart.printReceipt();
