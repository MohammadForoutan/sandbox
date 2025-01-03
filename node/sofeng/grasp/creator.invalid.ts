class Item {
  constructor(public name: string, public price: number) {}
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  // Invalid: ShoppingCart is responsible for creating Item instances directly
  addItem(name: string, price: number): void {
    const item = new Item(name, price); // Directly creating Item
    this.items.push(item);
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem("Apple", 1.5);
cart.addItem("Banana", 1.0);
