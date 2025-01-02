interface NotificationServiceInterface {
  sendEmail(email: string, message: string): void;
}

class User {
  constructor(private name: string, private email: string) {}

  getUserDetails() {
    return {
      name: this.name,
      email: this.email,
    };
  }
}

class NotificationService implements NotificationServiceInterface {
  sendEmail(email: string, message: string) {
    console.log(`Sending notification email to ${email}: ${message}`);
  }
}

class LoginService {
  constructor(
    private readonly notificaitonService: NotificationServiceInterface
  ) {}

  login(email: string, _password: string) {
    // do login stuff
    const loginMessage: string = "Welcome to our platform";
    this.notificaitonService.sendEmail(email, loginMessage);
  }
}

const notificaitonService = new NotificationService();
const loginService = new LoginService(notificaitonService);
const user = new User("Mohammad", "mmd@mail.com");

loginService.login(user.getUserDetails().email, "USER_PASSWORD_HERE");
