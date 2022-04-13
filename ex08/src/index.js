class Person{
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getPerson(){
        var personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
        return personInfo;
    }
}

let person = new Person("Haris", "harispasic@ymail.com", 25);
console.log(person.getPerson());
module.exports = Person;