const checkSurroundingLetters = () => {};

const splitFile = (file) => {
  const lines = file.split("\n").filter(Boolean)
  if (lines.every(line => line.length === line[0].length)) return 'No matches found!'

  return lines;
};

const input = await Deno.readTextFile("input.txt");
const lines = splitFile(input)
console.log(lines);
