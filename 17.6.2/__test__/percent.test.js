import { getPercents } from "../percent";

describe('tests for getPercent function', () => {
  it('should operate correctly with number', () => {
    expect(getPercents(5, 100)).toBe(5);
  }),
  it('should operate incorrectly', () => {
    expect(getPercents(20, 100)).toBe(10);
  }),
  it('should operate correctly with number greater than a percent', () => {
    expect(getPercents(1000, 100)).toBe(1000);
  }),
  it('should operate correctly with number of type string', () => {
    expect(getPercents("8", 100)).toBe(8);
  })
});