// Log visit

type Guid = string;
type DataAccess = {
  Execute: (sql: string, ...params: any[]) => void;
  BeginTransaction: () => void;
  CommitTransaction: () => void;
  RollbackTransaction: () => void;
};

// Transaction script pattern
// https://martinfowler.com/eaaCatalog/transactionScript.html
// Bad implementation: Not following transaction database pattern
class LogVisitBadImplementation {
  constructor(private _db: DataAccess) {}
  public execute(userId: Guid, visitedOn: Date) {
    this._db.Execute(
      'UPDATE Users SET last_visit=@p1 WHERE user_id=@p2',
      visitedOn,
      userId,
    );

    // 🔴 here we can have inconsistency and data corruption - if we fail here,
    // the last_visit will be updated but the visit won't be logged

    this._db.Execute(
      'INSERT INTO VisitsLog (user_id, visited_on) VALUES (@p1, @p2)',
      userId,
      visitedOn,
    );
  }
}

class LogVisitGoodImplementation {
  constructor(private _db: DataAccess) {}
  public execute(userId: Guid, visitedOn: Date) {
    try {
      this._db.BeginTransaction();
      this._db.Execute(
        'UPDATE Users SET last_visit=@p1 WHERE user_id=@p2',
        visitedOn,
        userId,
      );

      // 🔴 here we can have inconsistency and data corruption - if we fail here,
      // the last_visit will be updated but the visit won't be logged

      this._db.Execute(
        'INSERT INTO VisitsLog (user_id, visited_on) VALUES (@p1, @p2)',
        userId,
        visitedOn,
      );
      this._db.CommitTransaction();
    } catch (error) {
      this._db.RollbackTransaction();
      console.log({ error });
      throw error;
    }
  }
}
