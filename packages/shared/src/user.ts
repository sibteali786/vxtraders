export class User {
  constructor(public name: string) {}
  greet() {
    return `Hello, ${this.name}`;
  }
}