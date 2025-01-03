/*
 * the High Cohesion principle of GRASP, which suggests that a class should have
 * a well-defined purpose and that its responsibilities should be closely related.
 * High cohesion improves the understandability and maintainability of the class
 */

/**
 * ShoppingCart class has multiple responsibilities: managing items,
 * calculating totals, and handling user notifications. This violates the High
 * Cohesion principle because the class is doing too many unrelated tasks,
 * making it harder to understand and maintain.
 */

class Item {
  constructor(public name: string, public price: number) {}
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  addItem(item: Item): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // Invalid: Handling user notifications within the ShoppingCart class
  notifyUser(message: string): void {
    console.log("Notification to user:", message);
  }

  checkout(): void {
    const total = this.calculateTotal();
    this.notifyUser(`Your total is ${total}.`);
    console.log("Checking out with items:", this.items);
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Banana", 1.0));
cart.checkout(); // Output: Notification to user: Your total is 2.5
