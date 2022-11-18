const leftJoin = require('./hashmap-left-join');

describe('Hashmap left join', () => {

  it('throws an error if map is empty', () => {
    const hashmapOne = new Map();
    hashmapOne.set('Not', 'empty');
    const hashmapTwo = new Map();
    expect(() => leftJoin(hashmapOne, hashmapTwo)).toThrow('hashmaps are empty!');
  });

  // describe('Hashmap left join', () => {
  it('can join two hashmaps into one ', () => {
    const hashmapOne = new Map();
    hashmapOne.set('diligent', 'employed');
    hashmapOne.set('fond', 'enamored');
    hashmapOne.set('guide', 'usher');
    hashmapOne.set('outfit', 'garb');
    hashmapOne.set('wrath', 'anger');
    const hashmapTwo = new Map();
    hashmapTwo.set('diligent', 'idle');
    hashmapTwo.set('fond', 'averse');
    hashmapTwo.set('guide', 'follow');
    hashmapTwo.set('flow', 'jam');
    hashmapTwo.set('wrath', 'delight');

    expect(leftJoin(hashmapOne, hashmapTwo)).toEqual([
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight']
    ]);
  });
});
