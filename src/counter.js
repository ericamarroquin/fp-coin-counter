export const counter = (dollarage) => {
  if (isNaN(dollarage)){
    return "WRONG INPUT! >["
  } 
  if (dollarage <= 0) {
    return "Finished! Your total is $" + dollarage; 
  }
  else {
    return dollarage;
  }
}





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

