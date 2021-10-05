import { multiplicacion } from "../js/multiplicación";

test("times 5 * 3 to equal  15", () => {
  expect(multiplicacion(5, 3)).toBe(15);
})