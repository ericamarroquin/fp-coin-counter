// export const counter = (dollarage) => {
//   if (isNaN(dollarage)) {
//     return "WRONG INPUT! >[";
//   }
//   if (dollarage <= 0) {
//     return "Finished! Your total is $" + dollarage;
//   }
//   const coinage = dollarage * 100;
//   const quarters = coinage / 25;
//   const quarterChange = coinage % quarters;
//     if (quarterChange === 0) {
//       return quarters + " quarters";
//     } else {
//       return counter(quarterChange)
//       return dollarage + " dollars & " + coinage + " coins";
//     }
//     else if (quarterChange !== 0) {
//       const dimes = quarterChange /10;
//       const dimeChange = quarterChange % dimes;
//       if (dimeChange === 0) {
//         return dimes + " dimes";
//       }
//     }
// }

// export const oldCounter = (dollarage) => {
//   return (coinage) => {
//   if (isNaN(dollarage)){
//     return "WRONG INPUT! >["
//   } 
//   if (dollarage <= 0) {
//     return "Finished! Your total is $" + dollarage; 
//   }
//   else {
//     return dollarage * coinage;
//   }
// }
// }

export const counter = (dollarage) => {
  if (isNaN(dollarage)) {
    return "WRONG INPUT! >[";
  }
  if (dollarage <= 0) {
    return "& none";
  }
  const coinage = Math.floor(dollarage * 100);
  if (coinage >= 25) {
    const quarters = Math.floor(coinage / 25);
    const newDollarage = (dollarage - ((quarters * 25)/100)).toFixed(2);
    return quarters + " quarters, " + counter(newDollarage);
  } else if (coinage >= 10) {
    const dimes = Math.floor(coinage / 10);
    const newDollarage = dollarage - ((dimes * 10)/100);
    return dimes + " dimes, " + counter(newDollarage);
  }
} 


/*
8.73
const coinage = 8.73 * 100;
pennies = 873
873/25
quarters = 34
if (quarters % 25 === 0);
else
const remainder = quarters/25
remainder = 92
remainder/10 
dimes = 9
if (dimes % 25 )
newRemainder = 2
*/

// const coinage = (cash * 100) 
// if coinage % 25 === 0, return coinage as quarters
// else, restart loop
// if (remainder of coinage/25) % 10 === 0, return coinage as quarters and dimes
// else, restart loop
// if (remainder of (remainder of coinage/25)/10) % 5 === 0, return coinage as quarters, dimes, nickels
// else, restart loop
// return coinage as quarters, dimes, nickels, pennies




// const incrementCounter = (counter) => {
//   // This is the termination condition.
//   if (isNaN(counter)) {
//     return;
//   }
//   if (counter >= 3) {
//     return counter;
//   } else {
//     console.log(counter);
//     return incrementCounter(counter + 1);
//   }
// } 

//if counter <= 0

