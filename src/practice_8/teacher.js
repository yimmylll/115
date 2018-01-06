const Person = require('./person');
const Class = require('./class');

class Teacher extends Person{
    constructor(x,a,b,c=0){
        super(x,a,b);
        this.class=c;
    }
    introduce() {
        if (this.class === 0) {
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }
        return super.introduce() + ' I am a Teacher. I teach ' + this.class.getDisplayName() + '.';
    }
}

module.exports = Teacher;
