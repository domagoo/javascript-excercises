// function myfunction({param:true}){
//     console.log('true');
// }
// function myfunction(param:true){
//     console.log('true');
// }
// function myfunction(param = true){
//     console.log('true');
// }
// 'use strict';
// let green;

// grnee = false;

// console.log(grnee);

// const myArray = new Array(2);

// myArray[1]= 1;
// myArray[3]= 3;

// console.log('Length: ', myArray.length);
// console.log('Elements: ') 
// for(const element of myArray){ console.log('\t ', element) ;
// };

// function myFunction(y1, y2,...y3){

//     const [x1, ...[result]] = y3
//     console.log(result)
// }

// const myArray =['rock', 'paper', 'scissors','lizard', 'spock']

// myFunction (...myArray);

// const arr = [];
// try{
//     arr.push('try');
//     throw new Error();
// } catch (e) {
//     arr.push('catch');
// } finally {
//     arr.push('finally');
// };

// console.log(arr);

async function apiCall(){
    return new

    Promise(resolve => {
        setTimeout(() => { resolve('b')}, 50);
    });
};

async function logger() {
    setTimeout(() =>
    console.log('a'), 10); 
    console.log(await apiCall());
    console.log('c'); 
};
logger();

// const myQueue = Queue()

// myQueue.enqueue(1)
// myQueue.enqueue(2)

// const r1 = myQueue.dequeue() === 1
// const r2 = myQueue.dequeue() === 2

// console.log(r1 && r2);

// function Queue(){
//     const backingArray =[]
//     return{
//         enqueue: backingArray.push,
//         dequeue: backingArray.shift
//     }
// }

