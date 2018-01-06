const Person = require('./person');
class Worker extends Person{
    constructor(a,b,c)
    {
        super(a,b);
    }
    introduce(){
        return 'I am a Worker. I have a job.';
    }
}


module.exports = Worker;
