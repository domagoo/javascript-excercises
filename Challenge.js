
// Create a calculator that takes the bill and returns tip

// Calculator tip function returns bill with tip percentage if >= 50 or <= 100 multiplies bill by 0.15

// else it multiplies bill by .20
const calcTip = function(bill)
{
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
