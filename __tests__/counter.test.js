import {counter} from './../src/counter.js';

describe ('counter', () => {

  test('should correctly return inputted dollarage', () => {
    const count = counter(6.66)(1);
    expect(count).toEqual(6.66); 
  });

  test('should correctly determine if input is a number', () => {
    const count = counter()("bloop");
    expect(count).toEqual("WRONG INPUT! >[");
  });

  test('should return input if less than or equal to 0', () => {
    const count = counter(0)(0);
    expect(count).toEqual("Finished! Your total is $0");
  });

  test('should return dollarage multiplied by 100', () => {
    const pennifier = counter(6.66)(100);
    expect(pennifier).toEqual(666);
  });
});