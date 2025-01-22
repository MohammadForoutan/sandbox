type UserDetails = {
  name: string;
  email: string;
  password: string;
};

// mock user
class User {
  name: string;
  email: string;
  password: string;
  save() {
    // validate user
    if (!this.name || !this.email || !this.password) {
      throw new Error('User is not valid');
    }

    console.log('saving user');
  }
}

class CreateUser {
  constructor(private _db: DataAccess) {}

  public execute(userDetails: UserDetails) {
    try {
      this._db.BeginTransaction();
      const user = new User();
      user.name = userDetails.name;
      user.email = userDetails.email;
      user.password = userDetails.password;
      user.save();
      this._db.CommitTransaction();
    } catch (error) {
      this._db.RollbackTransaction();
      throw error;
    }
  }
}
