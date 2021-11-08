import {Counter} from './../src/counter.js';

describe ('Counter', () => {

  test('should correctly return inputted dollarage', () => {
    const counter = Counter(6.66);
    expect(counter).toEqual(6.66); 
  });

});