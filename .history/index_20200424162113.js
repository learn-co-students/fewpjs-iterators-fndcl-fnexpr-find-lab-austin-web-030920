const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let victory = undefined
  if (!(victory = array.find(function(game) {return game.result === "W"}))); {
    return undefined;
  } else {
    return victory.year

  }
}