const Person = require('./person');

class Student extends Person{
    constructor(a,b,c)
    {
        super(a,b);
        this.class = c;
    }
    introduce(){
        return 'I am a Student. I am at Class '+this.class+'.';
    }
}


module.exports = Student;