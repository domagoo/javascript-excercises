const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name)
    {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
    },

};

lufthansa.book(239, 'Mike Will');
lufthansa.book(351, 'John Doe');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings:[],
};

const book = lufthansa.book;

/**
 * Cannot read below
 * book(23, 'Sarah Williams');
 */

// CALL METHOD
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings:[]
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);


// APPLY METHOD
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// BIND METHOD
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Mike Will');
bookEW23('Martha Cooper');

// With Event Listerners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++
    console.log(this.planes);

};
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//BELOW addVAt = value + value * 0.23;
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));
