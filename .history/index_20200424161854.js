const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let victory = undefined
  victory = array.find(function(game) {return game.result === "W"});
  return victory.year
}