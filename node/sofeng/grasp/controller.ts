class Item {
  constructor(public name: string, public price: number) {}
}

class ItemFactory {
  static createItem(name: string, price: number): Item {
    return new Item(name, price);
  }
}

class ShoppingCart {
  private items: Item[] = []; // List of items in the cart

  addItem(item: Item): void {
    this.items.push(item);
  }

  checkout(): void {
    console.log("Checking out with items:", this.items);
  }
}

const cartActions = { add: "add", checkout: "checkout" } as const;
type CartAction = (typeof cartActions)[keyof typeof cartActions];

class ShoppingCartController {
  private cart: ShoppingCart;

  constructor(cart: ShoppingCart) {
    this.cart = cart;
  }

  private handleAddItem(item: Item): void {
    this.cart.addItem(item);
    console.log("Item added:", item);
  }

  private handleCheckout(): void {
    this.cart.checkout();
    console.log("Checkout completed.");
  }

  handleUserAction(action: CartAction, item?: Item): void {
    // use cammand pattern
    const commands = {
      [cartActions.add]: () => this.handleAddItem(item!),
      [cartActions.checkout]: () => this.handleCheckout(),
    };

    commands[action]();
  }
}

// Usage
const cart = new ShoppingCart();
const controller = new ShoppingCartController(cart);

// const apple = new Item("Apple", 1.5);
// const banana = new Item("Banana", 1.0);
const apple = ItemFactory.createItem("Apple", 1.5);
const banana = ItemFactory.createItem("Banana", 1.0);

controller.handleUserAction("add", apple);
controller.handleUserAction("add", banana);

controller.handleUserAction("checkout");
