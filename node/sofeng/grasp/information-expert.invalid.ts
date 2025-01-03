/**
 * the Item class is incorrectly assigned the responsibility of calculating
 * the total price of items in the cart. The Item class does not have the necessary
 * information about the entire cart and its items. This violates the Information Expert
 * principle by placing responsibilities in a class that lacks the relevant context and
 * informationthe Item class is incorrectly assigned the responsibility of calculating
 * the total price of items in the cart. The Item class does not have the necessary information
 * about the entire cart and its items. This violates the Information Expert principle
 * by placing responsibilities in a class that lacks the relevant context and information
 */
class Item {
  constructor(public name: string, public price: number) {}

  // Incorrectly trying to calculate total price
  static calculateTotal(cart: ShoppingCart): number {
    return cart.getItems().reduce((total, item) => total + item.price, 0);
  }
}

class ShoppingCart {
  private items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  getItems(): Item[] {
    return this.items;
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Banana", 1.0));
console.log(Item.calculateTotal(cart)); // Output: 2.5
