import { expect } from "jsr:@std/expect";
import { getTotalDistance} from "./main.js";

const example = await Deno.readTextFile("example.txt");
const input = await Deno.readTextFile("input.txt");

Deno.test("get correct output given example", () => {
  const totalDistance = getTotalDistance(example);
  expect(totalDistance).toBe(11);
});

Deno.test("get correct output given input", () => {
  const totalDistance = getTotalDistance(input);
  expect(totalDistance).toBe(1765812);
});