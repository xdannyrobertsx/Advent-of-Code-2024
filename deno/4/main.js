const directionsEnum = {
  upperLeft: { x: -1, y: 1 },
  up: { x: 0, y: 1 },
  upperRight: { x: 1, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  lowerLeft: { x: -1, y: -1 },
  down: { x: 0, y: -1 },
  lowerRight: { x: 1, y: -1 },
};

const scanDirection = (coordinates, amount, direction, matrix) => {
  let { x, y } = coordinates;
  const { x: xIncrement, y: yIncrement } = direction;
  let i = 0;
  let word = '';

  while (i < amount) {
    if (typeof matrix[y] !== 'string' || typeof matrix[y][x] !== 'string' ) {
      break;
    }
    
    word += matrix[y][x];
    x += xIncrement
    y += yIncrement
    i++;
  }
  
  return word;
};

const scanMatrix = (x, y, word, matrix) => {
  const wordLength = word.length;
  return Object.keys(directionsEnum).reduce((acc, direction) => {
    const foundWord = scanDirection({ x, y }, wordLength, directionsEnum[direction], matrix);
    if (foundWord !== word) return acc;

    acc += 1;
    return acc;
  }, 0);
};

const getNumberOfOccurancesInLine = (word, matrix, lineNumber) => {
  const wordChars = word.split("");
  const line = matrix[lineNumber];
  const lineChars = line.split("");
  const xCoordinates = lineChars.reduce(
    (acc, char, index) => {
      if (char !== wordChars[0]) return acc;
      acc.push(index);
      return acc;
    },
    [],
  );

  if (!xCoordinates.length) return 0;

  return xCoordinates.reduce((acc, cor) => {
    acc += scanMatrix(cor, lineNumber, word, matrix);
    return acc;
  }, 0);
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
  ) {
    return "No matches found!";
  }

  return lines.reduce((acc, line, index) => {
    if (!line.includes(word[0])) return acc;

    acc += getNumberOfOccurancesInLine(word, lines, index);
    return acc;
  }, 0);
};
