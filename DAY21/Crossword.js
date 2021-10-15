// check if a word fits inside a partially filled space

function check(space, word) {
  if (space.length !== word.length) {
    return false;
  }
  for (let i = 0; i < space.length; i++) {
    if (space[i] !== '-' && space[i] !== word[i]) {
      return false;
    }
  }
}


