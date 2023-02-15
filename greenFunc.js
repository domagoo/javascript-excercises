const greet = function(greeting)
{
    return function (name)
    {
    console.log(`${greeting} ${name}`);
};
};

const greeterHey = greet('Hey');
greeterHey('Mike')
greeterHey('William');

greet('Hello')('Jonas')

//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greet('Hi')('Ice')