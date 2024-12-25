const allRulesPass = (line, arrayOfRuleObjects) => {
  return arrayOfRuleObjects.every((ruleObject) => {
    const { nums, regex } = ruleObject;
    const [num1, num2] = nums;
    const shouldRunRule = line.includes(num1) && line.includes(num2);
    if (!shouldRunRule) return true;

    return line.match(regex)?.length > 0;
  });
};

const checkValidEntries = (rules, entries) => {
  const validEntries = entries.filter((e) => allRulesPass(e, rules));

  return validEntries.reduce((acc, entry) => {
    const splitEntry = entry.split(",");
    const i = Math.floor(splitEntry.length / 2);
    acc += Number(splitEntry[i])
    return acc;
  }, 0)
};

export const splitFile = (file) => {
  const lines = file.split("\n");
  const indexToSplit = lines.indexOf("");
  const rules = lines.slice(0, indexToSplit).map((rule) => {
    const nums = rule.split("|");
    const regex = new RegExp(rule.replace("|", "(.*?)"), "g");
    return { nums, regex };
  });
  const entries = lines.slice(indexToSplit + 1);

  return checkValidEntries(rules, entries);
};
