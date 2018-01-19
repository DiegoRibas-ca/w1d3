var countObjc = {}
function countLetters (string) {
 var arrayPhrase = string.toLowerCase().split('');
  for (var i = 0; i < arrayPhrase.length; i++) {
    if (countObjc[arrayPhrase[i]]) {
      countObjc[arrayPhrase[i]].push(i)
    } else {
      countObjc[arrayPhrase[i]] = []
      countObjc[arrayPhrase[i]].push(i)
    }
  }

  return countObjc;
}

console.log(countLetters("lighthouse in the house"))
// for(key in result)