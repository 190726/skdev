'use strict';

//javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name} : hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
ellie.speak();

//2. Getter and Setter
//3. static properties and methos
class User{
    static publisher = 'Dreamer';
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        console.log(`call..${value}`);
        this._age = value < 0 ? 0 : value;
    }

    play(){
        console.log('play!');
    }

    static printPublisher(){
        console.log(User.publisher);
    }
}

const user1 = new User('Steave','job',-1);
user1.age = 30;
console.log(user1);
console.log(User.publisher);
User.printPublisher();

//4.Inheritance
class GameUser extends User{
    play(){
        super.play();
        console.log('overriding play');
    }
    
    //toString override
    // toString(){
    //     return 'this is gameUser';
    // }
}

const gameUser1 = new GameUser('sk','lee',50);
gameUser1.play();

//5. instanceof
console.log(gameUser1 instanceof User);
console.log(gameUser1 instanceof GameUser);
console.log(gameUser1 instanceof Object);

console.log(gameUser1.toString());
