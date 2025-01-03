class Item {
  constructor(public name: string, public price: number) {}
}

class PriceCalculator {
  static calculateTotal(cart: ShoppingCart): number {
    return cart.getItems().reduce((total, item) => total + item.price, 0);
  }
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  checkout(): number {
    console.log("Checking out with items:", this.items);
    return total; // Return total for further processing
  }
}

class NotificationService {
  notifyUser(message: string): void {
    console.log("Notification to user:", message);
  }
}

// Usage
const cart = new ShoppingCart();
const notificationService = new NotificationService();

cart.addItem(new Item("Apple", 1.5));
cart.addItem(new Item("Banana", 1.0));
const total = PriceCalculator.calculateTotal(cart);

notificationService.notifyUser(`Your total is ${total}.`); // Output: Notification to user: Your total is 2.5
