type Coordinate = {
  x: number | undefined;
  y: number | undefined;
};

type ObstacleMatrix = Record<string, number[]>

const getCoordinates = () => {};

const dedupCordinates = () => 0;

const setBoard = (lines: Array<string>) => {
  const start: Coordinate = {
    x: undefined,
    y: undefined,
  };
  const obstacles: ObstacleMatrix = {};

  lines.forEach((line: string, index: number) => {

    if (line.includes("^")) {
      const rowOfChars = line.split("");
      start.x = rowOfChars.indexOf("^");
      start.y = index;
    } else if (line.includes("#")) {
      const arrayOfMatches = [...line.matchAll(/\#/g)];
      const obstacleIndexes = arrayOfMatches.map((match) => match.index);
      const arr = obstacles[index] ?? [];
      obstacleIndexes.forEach(i => arr.push(i))
      obstacles[index] = arr;
    }


  });

  return {
    start,
    obstacles,
  };
};

export const main = async (filePath: string) => {
  const input = await Deno.readTextFile(filePath);
  const lines = input.split("\n");
  const board = setBoard(lines);
  // here
  console.log("board", board);
  // here
  const allCoordinates = getCoordinates(board);
  const uniqueCoordinates = dedupCordinates(allCoordinates);
  return uniqueCoordinates;
};

// How many distinct positions will the guard visit before leaving the mapped area?
if (import.meta.main) {
  await main("input.txt");
  // const result = await main("input.txt");
  // console.log(result);
}
