const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let victory = array.find(function(game) {return game.result === "W"});
  if (victory.length === 1) {
    console.log(victory.year)
    return victory.year
  } else {
    return undefined
  }
}