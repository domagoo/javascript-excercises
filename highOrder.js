const oneWord = function(str)
{
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str)
{
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order
const transformer = function(str, fn)
{

    console.log(`Original string: ${str}`);

    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord)

transformer('Javascript is the best!', oneWord)

const high5 = function() {
    console.log('hey');
};

['Mike', 'Martha', 'Adam' ].forEach(high5);

