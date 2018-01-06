class Class {
    constructor(a) {
        this.number = a;
    }

    getDisplayName() {
        return 'Class ' + this.number;
    }

    assignLeader(stu){
        if(stu.class!=this)
        {console.log('It is not one of us.');}
        else
        {this.leader = stu;}
    }

    appendMember(stu) {
        stu.class = this;
    }
    printNum(){
        return this.number;
    }
}


module.exports = Class;



