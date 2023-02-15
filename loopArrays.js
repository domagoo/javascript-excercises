const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types =[];


for( let i= 0; i < jonas.length ; i++){
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    // types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for(let i = 0; i < years.length; i++)
{
    ages.push( 2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('---    ONLY STRINGS ---')
for( let i= 0; i < jonas.length ; i++){

    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}


console.log('--- BREAK WITH NUMBER ---')
for( let i= 0; i < jonas.length ; i++){

    if(typeof jonas[i] !== 'string') break;
    console.log(jonas[i], typeof jonas[i]);
}



