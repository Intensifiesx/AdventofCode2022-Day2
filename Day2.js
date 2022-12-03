let game1 = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["Y", 2],
  ["X", 1],
  ["Z", 3],
]);
//prettier-ignore
let game2 = new Map([
  ["A", new Map([["X", 3], ["Y", 4], ["Z", 8]])],
  ["B", new Map([["X", 1], ["Y", 5], ["Z", 9]])],
  ["C", new Map([["X", 2], ["Y", 6], ["Z", 7]])],
]);

let part1 = 0,
  part2 = 0;
require("readline")
  .createInterface(require("fs").createReadStream("a.txt"))
  .on("line", (line) => {
    line = line.split(" ");
    //PART 1
    function check(move1, move2) {
      //prettier-ignore
      if ((game1.get(move1) === 2 && game1.get(move2) === 1) ||
        (game1.get(move1) === 3 && game1.get(move2) === 2) ||
        (game1.get(move1) === 1 && game1.get(move2) === 3))
        return 1;
      return 0;
    }
    if (check(line[0], line[1])) part1 += game1.get(line[1]);
    else if (check(line[1], line[0])) part1 += 6 + game1.get(line[1]);
    else if (game1.get(line[0]) === game1.get(line[1]))
      part1 += 3 + game1.get(line[1]);

    //PART 2
    part2 += game2.get(line[0]).get(line[1]);
  })
  .once("close", (res) => console.log(`Part 1: ${part1}\nPart 2: ${part2}`));
