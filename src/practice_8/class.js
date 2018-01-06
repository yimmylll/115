class Class{
    constructor(a){
        this.number = a;
    }
    getDisplayName(){
        return 'Class '+this.number;
    }
    assignLeader(stu){
        this.leader = stu;
    }
}

module.exports = Class;
