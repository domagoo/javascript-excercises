const calcTip= function(bill)
{
    return bill >=  50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips =[];
const totals= [];

for(let i= 0; i< bills.length; i++)
{
    const tip = calcTip(bills[i]);
    // console.log(tip);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

calcAverage = function(arr)
{
    let sum = 0;
    for(let i =0; i <arr.length; i++)
    {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    // console.log(sum);
    return sum /arr.length;
}

console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));