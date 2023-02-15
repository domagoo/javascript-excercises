
/**
 * 
 * @param {*Function Declaration} birthYear 
 * @returns 
 */
function calcAge1(birthYear)
{
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

/**
 * 
 * @param {Function Expressions} birthYear 
 * @returns 
 */

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge1(1991);

console.log(age1,age2)

