class HashMap {
  constructor(size) {
    this.size = size; // tracks size of our map array
    this.map = new Array(size).fill(); // create an array with a specified size
    // this.map = []; // other way of creating an array (don't use this)
    this.numItems = 0;
  }

  // add a new { key : value }object to hashmap
  set(key, value) {
    let idx = this.hash(key);
    const object = {}
    object['key'] = key;
    object['value'] = value;
    if (this.map[idx]) {
      this.map[idx].push(object);
    } else {
      this.map[idx] = new Array();
      this.map[idx].push(object);
      // this.map[idx] = [[object]];
      // this.map[idx] = [[key, value]];
    }
  }

  get(key) {
    let idx = this.hash(key);
    if (this.map[idx]) {
      let results = [];
      for (const item of this.map[idx]) {
        results.push(item.key);
      }
      return results;
      // return item;
      // const element = this.map[idx].find(x => x.key === key)[1];
    } else {
      return undefined;
    }
  }

  // returns all unique keys in the hashmap and nested hashmaps
  keys() {
    let results = [];
    let set = new Set();
    // console.log('map:: ', map);
    if (this.map.length > 0) {
      for (let i = 0; i < this.map.length; i++) {
        if (this.map[i] != undefined) {
          for (const item of this.map[i]) {
            if (!set.has(item.key))
              set.add([i], item.key);
          }
        }
      }
      set.forEach(element => {
        results.push(element);
      });
      return results;
      // return map;
    }
  }


  has(key) {
    let hashIndex = this.hash(key);
    console.log('has was called')
    if (this.map[hashIndex] !== undefined) {
      // console.log(this.map[hashIndex].length, ' keys in that index');
      // console.log('map[hashIndex] ---> ', this.map[hashIndex])
      return true;
    } else {
      return false;
    }
  }

  // converts our string input into a random integer that we use for indexing
  hash(key) {
    let sumOfKeyLetters = key.split('').reduce((total, currentValue) => {
      let value = currentValue.charCodeAt(0);
      let num = total + value;
      return num;
    }, 0);
    let hash = sumOfKeyLetters * 599 % this.size;
    return hash;
  }
}


// instantiate a new hashMap & set an index size
let hashMap = new HashMap(7);

// push/set things to our map
// console.log('size: ', hashMap.length);
hashMap.set('Sam', 'Dehart');
hashMap.set('Bamby', 'Deer');
hashMap.set('Hector', 'Bellerin');
hashMap.set('Hector', 'Ramirez');
hashMap.set('Rose', 'Jill');
console.log(hashMap.keys());

// return all values at given index with input
// hashMap.get('Johnny');
// hashMap.get('Tony');


// how to set objects properties and assign them values
function createAnObject(first, last) {
  const object = {}
  let arr = [];

  object['key'] = first;
  object['value'] = last;

  arr.push(object);
  console.log(arr);
  return arr;
}
