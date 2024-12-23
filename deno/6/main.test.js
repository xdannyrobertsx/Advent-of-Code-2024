import { expect } from "jsr:@std/expect";
import { splitFile} from "./main.js";

const example = await Deno.readTextFile("example.txt");
const input = await Deno.readTextFile("input.txt");

Deno.test("get correct output given example", () => {
  const middlePageNumbers = splitFile(example);
  expect(middlePageNumbers).toBe(143);
});

// Deno.test("get correct output given input", () => {
//   const middlePageNumbers = splitFile(input);
//   expect(middlePageNumbers).toBe(100);
// });