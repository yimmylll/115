const Person = require('./person');
const Class = require('./class');

class Student extends Person{
    constructor(a,b,c)
    {
        super(a,b);
        this.class = c;
    }
    introduce(){
        return super.introduce()+' I am a Student. I am at '+this.class.getDisplayName()+'.';
    }
}


module.exports = Student;
