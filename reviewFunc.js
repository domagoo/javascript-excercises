const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstname) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // return retirement

    if(retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;
    }
    else{
        console.log(`${firstname} has already retired ! `)
        return -1;
    }
    }
    // return`${firstname} retires in ${retirement} years`;
// }

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));