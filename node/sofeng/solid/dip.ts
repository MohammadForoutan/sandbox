/**
 * Abstraction:
 * NotificationService depends on the Notification interface rather than specific implementations.
 *
 * Flexibility:
 * Adding a new notification type (e.g., PushNotification) requires only a new class
 * implementing Notification. No changes are needed in NotificationService.
 *
 * Testability:
 * Mock implementations of Notification can be passed into NotificationService during testing.
 *
 * Reduced Coupling:
 * NotificationService is decoupled from low-level implementations (EmailNotification, SMSNotification).
 *
 * Open/Closed Principle:
 * Changes in implementation details do not affect NotificationService.
 *
 * Dependency Inversion:
 * NotificationService depends on the abstraction (Notification) rather than concrete implementations.
 *
 */
interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificationService {
  private notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }

  sendNotification(message: string): void {
    this.notification.send(message);
  }
}

// Inject EmailNotification
const emailService = new NotificationService(new EmailNotification());
emailService.sendNotification("Hello via Email!");

// Inject SMSNotification
const smsService = new NotificationService(new SMSNotification());
smsService.sendNotification("Hello via SMS!");
