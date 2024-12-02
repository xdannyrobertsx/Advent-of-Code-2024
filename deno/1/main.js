const getSortedLists = (file) => {
    const lines = file.split("\n")
    const [list1, list2] = lines.reduce((acc, line) => {
        if (!line.length) return acc;
        const nums = line.split(/\s+/)
        acc[0].push(nums[0])
        acc[1].push(nums[1])
        return acc
    }, [[], []])

    return [list1.sort(), list2.sort()]
}

const calculateDistances = (lists) => {
    const [list1, list2] = lists
    // here
}

const getTotalDistance = (file) => {
    const sortedLists = getSortedLists(file)
    return calculateDistances(sortedLists)
}

const input = await Deno.readTextFile("input.txt");
const totalDistance = getTotalDistance(input)
console.log(totalDistance)
