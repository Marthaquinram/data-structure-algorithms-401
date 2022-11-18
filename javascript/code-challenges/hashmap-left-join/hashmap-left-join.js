// push all left key, value pairs in array.
//write function called leftJoin
function leftJoin(leftHash1, rightHash2) {
  let finalArr = [];
  //check if hashmap is empty
  if (!leftHash1.size || !rightHash2.size) {
    throw new Error('hashmaps are empty!');
  };
  //iterate through hash
  for (const [key, value] of leftHash1) {
    finalArr.push([key, value])
  }
  for (let i = 0; i < finalArr.length; i++) {
    if (rightHash2.has(finalArr[i][0])) {
      let value = rightHash2.get(finalArr[i][0])
      finalArr[i].push(value);
    } else {
      finalArr[i].push(null);
    }
  }
  return finalArr;
}
module.exports = leftJoin;
