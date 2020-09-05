'use strict';

//1. variable
//let (added in ES6)
let globalName = 'sangkook';
{
    let name = 'ellie';
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting(move declaration from bottom to top)
//no block scope
{
    age = 4;
    var age;
}
console.log(age);

//2. constans
//favor immutable(불변) data type always for a few reason
const dayInWeek = 7;
//dayInWeek = 8; //error occured!

//3.Variable types
//primitive, single item : number, string, boolean, null, undefined
//object, box container
//function, first-class function
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
//string
const char = 'c';
const brendan = 'brendan';
const helloBob =`hi ${char}`;
console.log(helloBob);
console.log(`value: ${brendan}, type:${typeof char}`);

const test = 3 < 1;
const nothing = null;
let x;
console.log(`test:${test}, nothing:${typeof nothing}, x:${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');

console.log(symbol1 === symbol2);
console.log(symbol3 === symbol4);
console.log(symbol3.description);

let text = 'hello';
console.log(text.charAt(0)); //type이 변할 수 있으므로 위험한 코드
console.log(`value: ${text} , type : ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text} , type : ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text} , type : ${typeof text}`);

//object
const obj = {name : 'ellie', age : 20};
obj.name = 'lee';
console.log(obj);
obj = {name:'kim'}; //obj는 constant 이므로 새로 할당되지 않음. 



