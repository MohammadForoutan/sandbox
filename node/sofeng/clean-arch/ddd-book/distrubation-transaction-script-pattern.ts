type MessageBus = {
  publish: (topic: string, ...args: any[]) => void;
};

class DistributeTransactionScriptPatternGoodImplementation {
  constructor(private _db: DataAccess, private _messageBus: MessageBus) {}

  public execute(userId: Guid, visitedOn: Date) {
    const result = this._db.Execute(
      'UPDATE Users SET last_visit=@p1 WHERE user_id=@p2',
      visitedOn,
      userId,
    ) as unknown as { affectedRows: number; visits: number };

    if (result.affectedRows === 0) {
      throw new Error('User not found');
    }

    const currentVisits = result.visits ?? 0;
    const newVisitCount = currentVisits + 1;

    // if we call this multiple times, we will publish the same message multiple times
    // we fix idempotency by checking if the user was updated
    this._messageBus.publish('VISIT_TOPIC', userId, visitedOn, newVisitCount);
  }
}

class ConsumerGoodImplementation {
  constructor(private _db: DataAccess) {}

  public consume(userId: Guid, visitedOn: Date, newVisitCount: number) {
    this._db.Execute(
      'UPDATE Users SET visits=@p1 WHERE user_id=@p2 AND last_visit=@p3',
      newVisitCount,
      userId,
      visitedOn,
    );
  }
}

// ============================ BAD IMPLEMENTATION ============================

class DistributeTransactionScriptPatternBadImplementation {
  constructor(private _db: DataAccess, private _messageBus: MessageBus) {}

  public execute(userId: Guid, visitedOn: Date) {
    this._db.Execute(
      'UPDATE Users SET last_visit=@p1 WHERE user_id=@p2',
      visitedOn,
      userId,
    );

    // Bad implementation
    // 1. We are not checking if the user was found
    // 2. The operation is not idempotent - publishing the same message multiple times will cause duplicate updates
    this._messageBus.publish('VISIT_TOPIC', userId, visitedOn);
  }
}

class ConsumerBadImplementation {
  constructor(private _db: DataAccess) {}

  public consume(userId: Guid, visitedOn: Date) {
    this._db.Execute(
      'UPDATE Users SET visits=visits+1 WHERE user_id=@p1 AND last_visit=@p2',
      userId,
      visitedOn,
    );
  }
}
