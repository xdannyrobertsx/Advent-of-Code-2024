const getSortedLists = (file) => {
  const lines = file.split("\n");
  const [list1, list2] = lines.reduce((acc, line) => {
    if (!line.length) return acc;

    const nums = line.split(/\s+/);
    acc[0].push(parseInt(nums[0]));
    acc[1].push(parseInt(nums[1]));
    return acc;
  }, [[], []]);

  return [{ ids: list1.sort(), length: list1.length }, {
    ids: list2.sort(),
    length: list2.length,
  }];
};

const calculateDistances = (arrayOfListObjects) => {
  const [list1, list2] = arrayOfListObjects;
  if (list1.length !== list2.length) return "lists do not match!";

  return list1.ids.reduce((acc, id, index) => {
    const matchingId = list2.ids[index];
    if (id === matchingId) return acc;
    else if (id < matchingId) return acc += (matchingId - id);
    return acc + (id - matchingId);
  }, 0);
};

const getTotalDistance = (file) => {
  const arrayOfListObjects = getSortedLists(file);
  return calculateDistances(arrayOfListObjects);
};

const input = await Deno.readTextFile("input.txt");
const totalDistance = getTotalDistance(input);
console.log(totalDistance);
