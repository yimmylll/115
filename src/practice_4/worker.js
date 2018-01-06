const Person = require('./person');

class Worker extends Person{
    constructor(a,b)
    {
        super(a,b);
    }
    introduce(){
        return super.introduce()+' I am a Worker. I have a job.';
    }
}


module.exports = Worker;
