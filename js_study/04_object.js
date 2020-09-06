//object는 key 와 value 의 집합체이다.
const obj1 = {};//object literal
const obj2 = new Object();//object constructor

//변수 다루는 방식
obj2.name = 'ellie';
obj2['jbo'] = 'doctor';
console.log(obj2.name, obj2['name']);

function printValue(obj, key){
    console.log(obj.key);//undefined
    console.log(obj[key]);//ok!
}

//object 생성법
const person = makePerson('ellie', 30);
const person2 = new Person('kim', 30);
function makePerson(name, age){
    return{
        //name : name,
        //age : age
        //key,value 가 동일하면 하나를 생략 가능
        name,
        age
    };
};
console.log(person);
//constructor function
function Person(name,age){
    //this = {}; 생략
    this.name = name;
    this.age = age;
    //return this; 생략
}

//5. in operator : property existence check
console.log('name' in person); //true

//6. for..in vs for..of
for(key in person){
    console.log(key);
}
for(value of ['1','2']){
    console.log(value);
}

//7. cloning
const team1 = {name:'ellie', age:30};
const team2 = {}; //서로 같은 ref 참조

Object.assign(team2, team1);
team2.age = 40;
console.log(team1);
console.log(team2);

const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big'};
const fruit3 = Object.assign({}, fruit1, fruit2);
console.log(fruit3);
