// INotification.ts
interface INotification {
  send(): void;
}

// Notification.ts
abstract class Notification implements INotification {
  constructor(protected message: string) {}

  abstract send(): void; // Make this method abstract
}

// EmailNotification.ts
class EmailNotification extends Notification {
  send() {
    console.log(`Sending email notification: ${this.message}`);
  }
}

// SMSNotification.ts
class SMSNotification extends Notification {
  send() {
    console.log(`Sending SMS notification: ${this.message}`);
  }
}

// NotificationService.ts
class NotificationService {
  notify(notification: INotification) {
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
service.notify(smsNotification); // Works as expected
