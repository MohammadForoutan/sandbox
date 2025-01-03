/**
 * the ShoppingCart class is no longer directly responsible for creating Item
 * instances. Instead, it relies on the ItemFactory to create Item objects.
 * This reduces the coupling between ShoppingCart and Item, making the system
 * more modular. If the implementation of Item changes or if a different type
 * of item is introduced, the ShoppingCart class does not need to be modified.
 */
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

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

// Usage
const cart = new ShoppingCart();
const apple = ItemFactory.createItem("Apple", 1.5);
const banana = ItemFactory.createItem("Banana", 1.0);
cart.addItem(apple);
cart.addItem(banana);
console.log(cart.calculateTotal()); // Output: 2.5
