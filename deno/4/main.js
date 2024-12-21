const getNumberOfOccurancesInMatrix = (word, matrix) => {
  const occuranceCount = 0;
  try {
    // get how many levels to explore via word length, then, explore that many levels in surrounding coordinates.
    const characterMap = word.split("");
    return;
  } catch (e) {
    return e;
  } finally {
    return occuranceCount;
  }
};

export const splitFile = (file, targetWord) => {
  const word = targetWord.toLowerCase();
  const lines = file.toLowerCase().split("\n").filter(Boolean);
  const validLineLength =
    lines.every((line) => line.length === lines[0].length) && lines[0].length;

  if (
    !lines ||
    !validLineLength ||
    typeof word !== "string" ||
    word.trim().length < 1
  )
    return "No matches found!";

  const countObject = lines.reduce(
    (acc, line, index) => {
      if (!line.includes(word[0])) return acc;
      console.log(index)

      let { count, matrix } = acc;
      matrix.push(line);
      count += getNumberOfOccurancesInMatrix(word, matrix);
      return { count, matrix };
    },
    { count: 0, matrix: [] }
  );

  return countObject.count;
};

// does row have x
// send x index and row index
// find surrounding x coordinates and traverse matrix
