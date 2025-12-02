import { expect } from "jsr:@std/expect";
import { splitFile } from "./main.js";

const example = await Deno.readTextFile("example.txt");
const input = await Deno.readTextFile("input.txt");
const targetWord = "xmas";

Deno.test("get correct output given example", () => {
  const totalDistance = splitFile(example, targetWord);
  expect(totalDistance).toBe(18);
});

Deno.test("get correct output given input", () => {
  const totalDistance = splitFile(input, targetWord);
  expect(totalDistance).toBe(2521);
});
