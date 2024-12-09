import { expect } from "jsr:@std/expect";
import { splitFileAndMultiply} from "./main.js";

const example = await Deno.readTextFile("example.txt");
const input = await Deno.readTextFile("input.txt");

Deno.test("get correct output given example", () => {
  const totalDistance = splitFileAndMultiply(example);
  expect(totalDistance).toBe(161);
});

Deno.test("get correct output given input", () => {
  const totalDistance = splitFileAndMultiply(input);
  expect(totalDistance).toBe(161289189);
});