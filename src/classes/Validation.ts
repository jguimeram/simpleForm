export class Validation {
  private value: string;
  private error: Array<string>;

  constructor(value: string) {
    this.value = value;
    this.error = [];
  }

  required(): this {
    if (this.value.trim() === "") this.error.push("This field is required");
    return this;
  }

  minLength(size: number): this {
    if (this.value.length <= size)
      this.error.push(`Minimum length is ${size} characters`);
    return this;
  }

  maxLength(size: number): this {
    if (this.value.length >= size)
      this.error.push(`Maximum length is${size} characters`);
    return this;
  }

  getErrors(): string[] {
    return this.error;
  }

  isValid(): boolean {
    return this.error.length === 0;
  }
}
