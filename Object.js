const jonasArray = [
    'Jonas', 
    'Schmetmann',
    2037 -1991,

    'teacher'
    ['Michael', 'Peter', 'Steven']
];

// ^ above in array no way to give name

const jonas = {
    firstName: 'Jonas',
    lastName: ' Schmedtmann',
    age: 2037- 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const intrestedIn = prompt('What do you want to know about Jonas? Chose btw firstName, lastName, age, job, and friends');

// if(jonas[intrestedIn]){
// console.log(jonas[intrestedIn]);
// }
// else {
//     console.log('Wrong request Chose btw firstName, lastName, age, job, and friends');
// }

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]}`);