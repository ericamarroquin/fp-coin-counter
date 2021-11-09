import {counter} from './../src/counter.js';

describe ('counter', () => {

  // test('should correctly return inputted dollarage', () => {
  //   const count = counter(6.66);
  //   expect(count).toEqual("6.66 dollars"); 
  // });

  test('should correctly determine if input is a number', () => {
    const count = counter("bloop");
    expect(count).toEqual("WRONG INPUT! >[");
  });

  test('should return input if less than or equal to 0', () => {
    const count = counter(0);
    expect(count).toEqual("& none");
  });

  test('should return number of quarters in coinage', () => {
    const count = counter(1.00);
    expect(count).toEqual("4 quarters, & none");
  });

  test('should return number of quarters & dimes in coinage', () => {
    const count = counter(1.10);
    expect(count).toEqual("4 quarters, 1 dimes, & none");
  })

  // test('should return dollarage multiplied by 10', () => {
  //   const dollars = counter(6.66);
  //   const dimes = dollars(10);
  //   expect(dimes).toEqual(66.6);
  // });
});

// should go through the currencies until you have it all in coins... >[
  // so if we're writing a recursive loop for that, then...first it should take your dollars and multiply by 100 and then start dividing?
  // we have 6.66, then we turn it into 666 pennies, then we divide 666/25, so we have 26 quarters and 64 pennies, then we divide by 10, so we have 26 quarters and 6 dimes and 4 pennies. and we don't divide by 5, because it's already too small.

// function coin(input)
// input * 100
// if 

// describe ('counter', () => {

//   test('should correctly return inputted dollarage', () => {
//     const count = counter(6.66)(1);
//     expect(count).toEqual(6.66); 
//   });

//   test('should correctly determine if input is a number', () => {
//     const count = counter()("bloop");
//     expect(count).toEqual("WRONG INPUT! >[");
//   });

//   test('should return input if less than or equal to 0', () => {
//     const count = counter(0)(0);
//     expect(count).toEqual("Finished! Your total is $0");
//   });

//   test('should return dollarage multiplied by 10', () => {
//     const dollars = counter(6.66);
//     const dimes = dollars(10);
//     expect(dimes).toEqual(66.6);

//   });
// }); 