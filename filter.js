/** FILTER 
 * FILTER returns a new array containing the array elements that passed a specified test condition.
 * [3, 1, 4, 3, 2]
 * current > 2
 * [3, 4, 3]
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov){
    return mov > 0;
  });
  
  console.log(movements);
  console.log(deposits);
  
  const depositsFor = [];
  for( const mov of movements) if (mov > 0) depositsFor.push(mov);
  console.log(depositsFor);
  
  const withdrawls = movements.filter(mov => mov < 0);
  console.log(withdrawls);
  
  const withdrawalsFor = [];
  for(const mov of movements) if(mov < 0) withdrawalsFor.push(mov);
  console.log(withdrawalsFor)