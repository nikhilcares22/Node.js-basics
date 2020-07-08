// const person  ={
//     name: 'John',
//     age: 30
// }

// console.log(__dirname,__filename);
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`Hello My name is ${this.name} & the age is ${this.age}`);
    }
}
module.exports = Person;