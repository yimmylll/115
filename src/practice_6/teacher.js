const Person = require('./person');


class Teacher extends Person{
    constructor(a,b,c=0)
    {
        super(a,b);
        this.class=c;
    }
    introduce(){
        if(this.class===0)
        {return super.introduce()+' I am a Teacher. I teach No Class.';}
        return super.introduce()+' I am a Teacher. I teach Class '+this.class+'.';
    }
}


module.exports = Teacher;


