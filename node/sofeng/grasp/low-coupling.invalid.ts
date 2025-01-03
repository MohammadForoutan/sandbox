/*
 * the ShoppingCart class is tightly coupled to the Item class because it directly
 * creates Item instances and relies on its specific implementation. This tight coupling makes
 * it difficult to change the Item class or replace it with another implementation
 * without modifying the ShoppingCart class.
 */
class Item {
  constructor(public name: string, public price: number) {}
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  addItem(name: string, price: number): void {
    const item = new Item(name, price); // Directly creating Item
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem("Apple", 1.5);
cart.addItem("Banana", 1.0);
console.log(cart.calculateTotal()); // Output: 2.5
