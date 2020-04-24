const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let victory = array.find(game => game.result === "W");
  if (!!victory) {
    return victory.year
  } else {
    return undefined
  }
}