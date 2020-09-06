console.log(2**3); //exponentiation

//1. increment and decrement
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement, counter);
const postIncrement = counter++;
console.log(postIncrement, counter);

const browser = 'chrome';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('other.');
        break;
}