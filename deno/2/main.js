const isValidDiff = (arr) => {
  let res = true;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      continue;
    }
    const currentId = arr[i];
    const nextId = arr[i + 1];
    const diff = currentId > nextId
      ? (currentId - nextId)
      : (nextId - currentId);
    if (diff > 0 && diff < 4) {
      continue;
    }
    res = false;
    break;
  }
  return res;
};

const isValidSort = (arrayOfIds) => {
  const sortedIds = [...arrayOfIds].sort((a, b) => a - b);
  const reverseSortedIds = [...sortedIds].reverse();
  const validSort = arrayOfIds.every((id, index) => id === sortedIds[index]) ||
    arrayOfIds.every((id, index) => id === reverseSortedIds[index]);
  if (!validSort) return false;
  return isValidDiff(arrayOfIds);
};

const isValidLine = (line) => {
  const ids = line.split(/\s+/).map((string) => +string);
  return ids.length > 1 && isValidSort(ids);
};

const handleFile = (file) => {
  const lines = file.split("\n");
  const validLines = lines.filter((line) => isValidLine(line));
  if (!validLines.length) return "No valid lines found!";

  return validLines;
};

const input = await Deno.readTextFile("input.txt");
const lines = handleFile(input);
console.log(`There are ${lines.length} valid lines...`);
