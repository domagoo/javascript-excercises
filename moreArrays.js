// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];

const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur, 0);
;

console.log(bankDepositSum);


// 2
// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
.reduce((count, cur) => (cur >= 1000 ? ++count   : count) , 0);

console.log(numDeposits1000);

//Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3 .
const {deposits, withdrawals} = accounts
.flatMap(acc => acc.movements).reduce((sums, cur)=> {

//Below 👇 Works
  // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
// Above ☝️ works

  // 👇 More Simple
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  // ☝️ More Simple

  return sums;
}, {deposits: 0, withdrawals: 0})

console.log(deposits, withdrawals);

// 4 .
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase()+ str.slice(1);

  const exceptions = ['a', 'an' , 'and ', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => 
    (exceptions.includes(word) ? word : capitalize(word)))
  .join(' ');
  
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with EXAMPLE'));


