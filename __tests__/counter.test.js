import {Counter} from './../src/counter.js';

describe ('Counter', () => {

  test('should correctly return inputted dollarage', () => {
    const counter = Counter(6.66);
    expect(counter).toEqual(6.66); 
  });

  test('should correctly determine if input is a number', () => {
    const counter = Counter("bloop");
    expect(counter).toEqual("WRONG!");
  })

});