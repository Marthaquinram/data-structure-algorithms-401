
const words = "Once upon a time, there was a brave princess who..."

function repeatedWord(str, countTotal = false) {
  let firstWord = '';
  let lower = str.toLowerCase();
  let wordsArr = lower.split(/\W+/g);
  let total = {};
  const wordsMap = new Map();
  if (countTotal === false) {
    for (const item of wordsArr) {
      if (wordsMap.has(item)) {
        //.has returns a boolean
        let count = wordsMap.get(item)
        //returns the value of the key we are passing
        wordsMap.set(item, count + 1)
        //we are'setting'
        firstWord = item;
        // this is setting it the literal string of "a"
        break;
      } else {
        wordsMap.set(item, 1)
      }
    }
    return firstWord;
  } else {
    if (countTotal === true) {
      for (const item of wordsArr) {
        if (wordsMap.has(item)) {
          let count = wordsMap.get(item)
          total = wordsMap.set(item, count + 1)

        } else {
          total = wordsMap.set(item, 1)
        }
      }
      return total;
    }
  }
  return firstWord;
}

module.exports = repeatedWord;
