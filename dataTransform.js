/** MAP
 * MAPS returns a new array containing the results of applying an operation on all original array elements.
 * [3 , 1 , 4, 3, 2]
 * current * 2
 * [6, 2, 8, 6, 4]
 */

// MAP Example
const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUsd =movements.map(function(mov) {
    return mov * euroToUsd;
});

// ARROW
const movementsUsdArrow = movements.map(mov => mov * euroToUsd );


console.log(movements);
console.log(movementsUsd);

// For loop used as Map 
const movementsUsdfor = [];
for(const mov of movements) movementsUsdfor.push(mov * euroToUsd);
console.log(movementsUsdfor);

const movementsDescription = movements.map((mov, i, arr) =>

    `Movements ${i + 1}: You ${mov > 0 ? 'You deposited' : 'You withdrew'} ${Math.abs(mov)}`

    // if (mov > 0) {
    //     return `Movements ${i + 1}: You deposited ${mov}`;
    // }else {
    //     return `Movements ${i + 1}: You withdrew ${Math.abs(mov)}`;
    // }
);

console.log(movementsDescription);


/** FILTER 
 * FILTER returns a new array containing the array elements that passed a specified test condition.
 * [3, 1, 4, 3, 2]
 * current > 2
 * [3, 4, 3]
*/

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



/** REDUCE
 * REDUCE boils ("REDUCES") all array elements down to one single value (e.g adding all elements together)
 * [3 , 1 , 4, 3, 2]
 * acc + current
 * 13
 */
