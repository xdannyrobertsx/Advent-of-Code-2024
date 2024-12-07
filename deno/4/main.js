const splitFile = (file) => {
  const lines = file.split("\n");
  return lines;
};

const input = await Deno.readTextFile("input.txt");
const lines = splitFile(input);
console.log(lines);
