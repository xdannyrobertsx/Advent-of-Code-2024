const splitFileAndMultiply = (file) => {
  // split by regex
  const matches = file.match(/mul\(\d+,\d+\)/g);

  // get numbers
  const arrayOfNumbers = matches.reduce((acc, str) => {
    const numPair = str.match(/\d+/g);
    if (numPair.length !== 2) return acc;

    acc.push(numPair.map((num) => +num));
    return acc;
  }, []);

  // multiply numbers
  return arrayOfNumbers.reduce((acc, nums) => {
    const [num1, num2] = nums;
    acc += num1 * num2;
    return acc;
  }, 0);
};

const input = await Deno.readTextFile("input.txt");
const lines = splitFileAndMultiply(input);
console.log(lines);
