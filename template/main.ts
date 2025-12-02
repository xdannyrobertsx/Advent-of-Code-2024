export const main = async (filePath: string) => {
  const input = await Deno.readTextFile(filePath);
  return input;
};

const result = await main("input.txt");
console.log(result);
