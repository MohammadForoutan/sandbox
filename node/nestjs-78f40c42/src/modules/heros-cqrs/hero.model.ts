import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from './hero-kill-dragon.event';

export class Hero extends AggregateRoot {
  constructor(private id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // Business logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }
}
