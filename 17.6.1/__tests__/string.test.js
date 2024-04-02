import { revertString } from "../string.js";

describe('tests for revertString function', () => {
  it('should reverse string', () => expect(revertString("abc")).toBe("cba"));
  it('should reverse string', () => expect(revertString("abc")).toBe("bca"));
});