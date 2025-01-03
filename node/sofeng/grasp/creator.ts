class Item {
  constructor(public name: string, public price: number) {}
}

class ItemFactory {
  static createItem(name: string, price: number): Item {
    return new Item(name, price); // Factory method to create Item
  }
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  addItem(item: Item): void {
    this.items.push(item);
  }
}

// Usage
const cart = new ShoppingCart();
const apple = ItemFactory.createItem("Apple", 1.5);
const banana = ItemFactory.createItem("Banana", 1.0);
cart.addItem(apple);
cart.addItem(banana);
