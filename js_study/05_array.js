const fruits = ['apple', 'banana', 'melon'];
//fruits.push('tomato');//뒤에서부터 넣음
fruits.unshift('tomato'); //앞에서부터 넣음
//fruits.shift(); //앞에서부터 꺼냄
//fruits.pop(); //뒤에서부터 꺼냄
//fruits.splice(1,2);
fruits.splice(1,2,'strwaberry');

//combine two arrays
const animal = ['lion','snike'];

const comineArray = fruits.concat(animal);

fruits.forEach((fruit, index, array)=>{
    console.log(fruit, index);
    console.log(array);
});

console.log(comineArray);

//5.Searching
//find the index, includes
console.log(fruits.indexOf('melon'));
console.log(fruits.lastIndexOf('strwaberry'));
console.log(fruits.includes('melon'));









