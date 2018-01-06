const Person = require('./person');
const Class = require('./class');

class Student extends Person{
    constructor(x,a,b,c=0){
        super(x,a,b);
        this.class=c;
    }
    introduce(){
        if(this.class.leader===this)
        {return super.introduce()+' I am a Student. I am Leader of '+this.class.getDisplayName()+'.';}
        return super.introduce()+' I am a Student. I am at '+this.class.getDisplayName()+'.';
    }
}

module.exports = Student;


