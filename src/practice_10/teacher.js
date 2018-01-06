const Person = require('./person');
const Class = require('./class');

class Teacher extends Person{
    constructor(x,a,b,c=0){
        super(x,a,b);
        this.classes=c;
    }
    introduce() {
        if (this.classes === 0) {
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }
        if(this.classes.length>1)
        {return super.introduce() + ' I am a Teacher. I teach Class ' + this.classes.map(x=>x.printNum()).join(', ') + '.';}
        return super.introduce() + ' I am a Teacher. I teach ' + this.classes.getDisplayName() + '.';
    }
}

module.exports = Teacher;


