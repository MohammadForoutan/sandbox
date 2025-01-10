import { AggregateRoot } from '@nestjs/cqrs';
import { CatCreatedEvent } from '../events/impl/cat-created.event';

export class Cat extends AggregateRoot {
  constructor(
    public readonly name: string,
    public readonly age: number,
  ) {
    super();
  }

  created() {
    console.log('HERE IN CAT MODEL [CREATED]');
    this.apply(new CatCreatedEvent(this.name, this.age));
  }
}
