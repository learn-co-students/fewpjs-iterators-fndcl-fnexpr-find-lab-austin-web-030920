const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let victory = array.find(function(game) {return game.result === "W"});
  if (victory.length !== 1) {
    return undefined
  } else {
    return victory.year
  }
}