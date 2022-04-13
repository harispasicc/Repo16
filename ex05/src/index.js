// only change code below this line
class Microsoft{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    
    occupation(){
      var  henry =  `${this.name} is a philanthropist!`;
      return henry;
    }
}

class Facebook extends Microsoft{
    constructor(name, age){
        super(name, age);
    }
    studentAge(){
        elliot = `${this.name} is a philanthropist!`;
       return  elliot = `${this.name} is ${this.age}`;
    }
    
}

const henry = new Microsoft('William Hnery Gates III');
henry.occupation();
const elliot = new Facebook('Mark Zuckerberg', 23);
elliot.occupation();
// Only change code above this line
module.exports = {
    Microsoft,
    Facebook
    }