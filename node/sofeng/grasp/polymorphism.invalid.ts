class Item {
  constructor(public name: string, public price: number) {}
}

class DiscountedItem extends Item {
  constructor(name: string, price: number, public discount: number) {
    super(name, price);
  }

  getFinalPrice(): number {
    return this.price - this.discount;
  }
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      // Invalid: Using conditional logic to handle different item types
      if (item instanceof DiscountedItem) {
        total += item.getFinalPrice();
      } else {
        total += item.price;
      }
    }
    return total;
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new DiscountedItem("Banana", 1.0, 0.2));
console.log(cart.calculateTotal()); // Output: 2.3
