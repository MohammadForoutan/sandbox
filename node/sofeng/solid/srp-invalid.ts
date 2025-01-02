/*
 * In this example, the User class is responsible for both managing user data and sending notifications, which is a violation of the SRP.
 */
class User {
  constructor(private name: string, private email: string) {}

  getUserDetails() {
    return {
      name: this.name,
      email: this.email,
    };
  }

  sendNotification(message: string): void {
    console.log(`Sending notification to ${this.email}: ${message}`);
  }
}

const user = new User("Mohammad", "mmd@example.com");
console.log(user.getUserDetails());
user.sendNotification("Welcome to our platform!");
