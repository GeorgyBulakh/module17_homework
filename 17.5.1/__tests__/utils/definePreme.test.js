import { definePrime } from "../../utils/definePrime.js";

xdescribe('tests for definePrime function', () => {
  const prime = 17;
  const composite = 18;

  it("should operate correctly with prime number", () => {
    expect(definePrime(prime)).toBe(`Number ${prime} is prime number`)
  }),
  it("should operate correctly with composite number", () => {
    expect(definePrime(composite)).toBe(`Number ${composite} is composite number`)
  }),
  it("should operate correctly with invalid number", () => {
    expect(definePrime(1001)).toBe('Data is incorrect')
  })
});

describe('tests for definePrime function', () => {
  const prime = 17;
  const composite = 18;

  it("should operate correctly with prime,complex and invalid number", () => {
    expect(definePrime(prime)).toBe(`Number ${prime} is prime number`);
    expect(definePrime(composite)).toBe(`Number ${composite} is composite number`);
    expect(definePrime(1001)).toBe('Data is incorrect');
  })
});