**Dependency Injection (DI)** is a software design principle that aims to improve code maintainability, testability, and flexibility by separating the creation of objects (dependencies) from their usage.

**Key Concepts:**

* **Dependency:** An object that another object relies on to perform its functions.
* **Injection:** The process of providing these dependencies to the object that needs them.

**Types of Dependency Injection:**

1. **Constructor Injection:** Dependencies are provided through the class constructor.
2. **Setter Injection:** Dependencies are provided through setter methods.
3. **Interface Injection:** Dependencies are provided through an interface.

**Benefits of Dependency Injection:**

* **Improved Testability:**
    * **Mocking and Stubbing:** Easily replace real dependencies with mock objects for testing in isolation.
    * **Reduced Test Setup:** Minimize the need to create complex object hierarchies for testing.
* **Increased Flexibility and Reusability:**
    * **Loose Coupling:** Reduces dependencies between components, making them more independent and easier to reuse in different contexts.
    * **Easier Maintenance:** Changes to dependencies have a minimal impact on the dependent objects.
* **Better Code Organization:**
    * **Clearer Dependencies:** Explicitly defines object dependencies, improving code readability and maintainability.
    * **Centralized Dependency Management:** Can be managed through a dedicated dependency injection framework, reducing boilerplate code.

**Example:**

```typescript
// Interface for Engine
interface Engine {
  start(): void;
}

// Concrete implementation of Engine
class GasolineEngine implements Engine {
  start(): void {
    console.log("Gasoline engine started.");
  }
}

// Electric Engine implementation
class ElectricEngine implements Engine {
  start(): void {
    console.log("Electric engine started.");
  }
}

// Car class with Dependency Injection
class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  start(): void {
    this.engine.start();
  }
}

// Usage
const gasolineEngine = new GasolineEngine();
const electricEngine = new ElectricEngine();

const gasolineCar = new Car(gasolineEngine);
const electricCar = new Car(electricEngine);

gasolineCar.start(); // Output: Gasoline engine started.
electricCar.start(); // Output: Electric engine started.
```

In the second example, the `Car` class doesn't create its own `Engine` instance. Instead, it receives an `Engine` instance through its constructor, making it easier to test and replace the `Engine` with a mock object.

**In Summary:**

Dependency Injection is a powerful technique that promotes good software design principles and can significantly improve the quality and maintainability of your code. By separating object creation from their usage, DI enhances testability, flexibility, and reusability.
