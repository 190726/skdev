//1. function declaration
//3. Default parameters(added in ES6)
//   파라미터 옆에 디폴트값 지정
function showMessage(message, from = 'unknown')
{
    // if(from === undefined){
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('hi');

//4. Rest parameters(added in ES6)
function printAll(...args){
    for(let i=0;i < args.length; i++){
        console.log(args[i])
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach(() => console.log);
}
printAll('apple','melon','orange');

//6. function expression
const print = function(){ //anonymous function
    console.log('print');
};

//7. Immediately Invoked Function Expression

(function () {
    console.log('hello');
})();

