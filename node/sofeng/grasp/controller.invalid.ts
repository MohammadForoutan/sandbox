class Item {
  constructor(public name: string, public price: number) {}
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  addItem(item: Item): void {
    this.items.push(item);
  }

  // Invalid: ShoppingCart is handling user actions directly
  handleUserAction(action: string, item?: Item): void {
    if (action === "add" && item) {
      this.addItem(item);
    } else if (action === "checkout") {
      console.log("Checking out with items:", this.items);
    }
  }
}

// Usage
const cart = new ShoppingCart();
const apple = new Item("Apple", 1.5);
cart.handleUserAction("add", apple);
cart.handleUserAction("checkout");
