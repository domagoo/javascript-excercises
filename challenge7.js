// TEST DATA: 👇
// 🐕🐕🐕🐕 //

const dogs = [ 
    
        {weight: 22, curFood: 250, owners: ["Alice", "Bob"] },

        {weight: 8, curFood: 200, owners: ["Matilda"] },

        {weight: 13, curFood: 275, owners: ["Sarah", "John"] },

        {weight: 32, curFood: 340, owners: ["Michael"] }  
];

/** Loop over array containing dog🐕 objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT🚫 create a new array, simply loop over the array.
 * 
 * 
 * Formula: recommended = weight ** 0.75 * 28. 
 * 
 * 
 * (The result is in grams of food, and the weight needs to be in kg ) */  

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs); 

/** Find Sarah's dog🐕 and log to the console whether its eating too much or too little.
 * 
 * 
 * HINT:🤔 Some dogs🐕🐕 have multiple owners, so you first need to find Sarah in the owners array
 */

const sarahs_Dog = dogs.find( dog => dog.owners.includes("Sarah"));
console.log(sarahs_Dog);

console.log(`Sarah's dog is eating too ${sarahs_Dog.curFood > sarahs_Dog.recFood ? "much" : 'little' } `
);

/** Create an array containing all owners of dogs who eat too much 
 * ('ownersEatTooMuch') 
 * 
 * 
 * and an array with all owners of dogs who eat too little 
 * ('ownersEatooLittle') */

const ownersEatTooMuch = dogs.filter( dog => dog.curFood > dog.recFood ).flatMap( dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter( dog => dog.curFood < dog.recFood ).flatMap( dog => dog.owners);
console.log(ownersEatTooLittle);

/** Log a string to the console for each array created in 3., 
 * like this: "Matilda and Alice and Bob's dogs eat too much!"  ❗❗❗
 * like this "Sarah and John and Michael's dogs eat too little!" ❗❗❗*/

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much❗`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little❗`)

/** 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended 
 * (just true or false ) 
 * */

console.log(`${dogs.some( dog => dog.curFood === dog.recFood)}`);

/** 6. Log to the console whether there is any dog eating OKAY amount of food 
 * current > (recommended * 0.90) && current < (recommended * 1.10)
 * (just true or false ) 
 * */

const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7. Filter out dogs that are eating OKAY 👍
console.log(dogs.filter(checkEatingOkay));

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's object)

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsSorted);