// Notification.ts
class Notification {
  constructor(protected message: string) {}

  send(): void {
    console.log(`Sending notification: ${this.message}`);
  }
}

// EmailNotification.ts
class EmailNotification extends Notification {
  override send() {
    console.log(`Sending email notification: ${this.message}`);
  }
}

// SMSNotification.ts
class SMSNotification extends Notification {
  // This method violates LSP because it changes the expected behavior
  override send() {
    throw new Error("SMS notifications cannot be sent directly.");
  }
}

// NotificationService.ts
class NotificationService {
  notify(notification: Notification) {
    notification.send();
  }
}

// Usage
const service = new NotificationService();
const emailNotification = new EmailNotification("Welcome to our service!");
const smsNotification = new SMSNotification(
  "Your verification code is 123456."
);

service.notify(emailNotification); // Works as expected
service.notify(smsNotification); // Unexpected behavior
