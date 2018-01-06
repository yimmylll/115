class Person {
    constructor(x,a,b)
    {
        this.id = x;
        this.name = a;
        this.age = b;
    }
    introduce(){
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old.';
    }
}

module.exports = Person;



