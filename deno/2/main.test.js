import { expect } from "jsr:@std/expect";
import { handleFile} from "./main.js";

const example = await Deno.readTextFile("example.txt");
const input = await Deno.readTextFile("input.txt");

Deno.test("get correct output given example", () => {
  const totalDistance = handleFile(example);
  expect(totalDistance).toBe(2);
});

Deno.test("get correct output given input", () => {
  const totalDistance = handleFile(input);
  expect(totalDistance).toBe(402);
});