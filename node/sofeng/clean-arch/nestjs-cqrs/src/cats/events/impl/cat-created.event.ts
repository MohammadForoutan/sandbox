export class CatCreatedEvent {
  constructor(
    public readonly name: string,
    public readonly age: number,
  ) {}
}
