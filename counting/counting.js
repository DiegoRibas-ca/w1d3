function countLetters (string) {
 var countObjc = {}
 var arrayPhrase = string.toLowerCase().split(' ').join("").split('');
  for (var i = 0; i < arrayPhrase.length; i++) {
    if (countObjc[arrayPhrase[i]]) {
      countObjc[arrayPhrase[i]] += 1;
    } else {
      countObjc[arrayPhrase[i]] = 1
    }
  }
  return countObjc;
}

console.log(countLetters("Thiago e Diego"))
// for(key in result)