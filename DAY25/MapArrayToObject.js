function mapString(string) {
  let map = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [i];
    }
  }
  return map;
}

// Example:
// mapString("apple")
//
// return object:
// 
// {
//  a: [0]
//  e: [4]
//  l: [3]
//  p: [1, 2]
// }

