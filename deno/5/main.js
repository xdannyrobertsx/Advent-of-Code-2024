const checkValidEntries = (rules, entries) => {
  return "";
};

export const splitFile = (file) => {
  const lines = file.split("\n");
  const indexToSplit = lines.indexOf("");
  const rules = lines.slice(0, indexToSplit);
  const entries = lines.slice(indexToSplit + 1);

  return checkValidEntries(rules, entries);
};
