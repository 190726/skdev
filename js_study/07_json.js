//1. Object to JSON

let json = JSON.stringify({name:'ellie', age:20});
console.log(json);


//2. JSON to Object
let obj = JSON.parse(json);
console.log(obj);

//
const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: () => {
        console.log('jump!');
    }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,['name','color','size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'ellie' : value;
} );
console.log(json);

const obj2 = JSON.parse(json, (key, value)=>{
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate());