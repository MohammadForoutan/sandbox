export class CreateCatCommand {
  constructor(
    public readonly name: string,
    public readonly age: number,
  ) {}
}
