const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Puond sterling'],
]);

currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
})


// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _ , map){
    console.log(`${key}: ${value}`);
})