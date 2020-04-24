const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  if (let victory = array.find(function(game) {return game.result === "W"}); !== undefined) {
    return victory.year
  } else {
    return undefined;
  }
}