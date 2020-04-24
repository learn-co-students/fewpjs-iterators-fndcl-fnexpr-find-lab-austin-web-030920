const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let victory = array.find(game => game.result === "W");
  return victory.year
}