import { sum } from "../sum";

it("should return sum correctly", () => {
  const result = sum(10, 20);
  expect(result).toBe(30);
});
