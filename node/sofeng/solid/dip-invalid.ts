class EmailNotification {
  sendEmail(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSNotification {
  sendSMS(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificationService {
  private emailNotification: EmailNotification;
  private smsNotification: SMSNotification;

  constructor() {
    this.emailNotification = new EmailNotification();
    this.smsNotification = new SMSNotification();
  }

  sendNotification(message: string, method: "email" | "sms"): void {
    if (method === "email") {
      this.emailNotification.sendEmail(message);
    } else if (method === "sms") {
      this.smsNotification.sendSMS(message);
    }
  }
}

// Usage
const service = new NotificationService();
service.sendNotification("Hello!", "email");
service.sendNotification("Hello!", "sms");
