class Class {
    constructor(a){
        this.number = a;
        this.teachers = [];
    }
    getDisplayName(){
        return 'Class '+this.number;
    }
    isIn(stu){
        if(stu.class===this)
        {return true;}
        return false;
    }

    registerAssignLeaderListener(teacher){
        teacher.classes.map(c=>c.teachers.push(teacher.name));
    }

    registerJoinListener(teacher){
        teacher.classes.map(c=>c.teachers.push(teacher.name));
    }

    assignLeader(stu){
        if(!this.isIn(stu))
        {console.log('It is not one of us.');}
        else
        {
            this.leader = stu;
            console.log('I am '+this.teachers+'. I know '+this.leader.name+' become Leader of '+this.getDisplayName()+'.');
        }
    }
    appendMember(stu){
        stu.class=this;
        console.log('I am '+this.teachers+'. I know '+stu.name+' has joined '+this.getDisplayName()+'.');
    }
    printNum(){
        return this.number;
    }

}

module.exports = Class;



