const Person = require('./person');
const Class = require('./class');

class Teacher extends Person {
    constructor(a, b, c= 0) {
        super(a, b);
        this.class = c;
    }

    introduce() {
        if (this.class === 0) {
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }
        return super.introduce() + ' I am a Teacher. I teach ' + this.class.getDisplayName() + '.';
    }

    introduceWith(stu){
        if(stu.class===this.class)
        {return super.introduce()+" I am a Teacher. I teach "+stu.name+".";}
        return super.introduce()+" I am a Teacher. I don't teach "+stu.name+".";
    }
}

module.exports = Teacher;

