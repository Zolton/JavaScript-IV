// CODE here for your Lambda Classes

class Person {
    constructor ({name, age, location}) {
        this.name = name
        this.age = age
        this.location = location
    }
    speak () {
        `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor (attr) {
        super (attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase
    }

    demo({subject}) {`Today we are learning about ${subject}`
}
    grade({grade, student, subject}) { `${student} receives a 
    perfect score in ${subject}`
    }
}

class Student extends Person {
    constructor({previousBackground, className, favSubjects}){
        super({name, age, location});
        this.previousBackground = previousBackground
        this.className = className;
        this.favSubjects = favSubjects
    }
    listsSubjects(){
        console.log(this.favSubjects)
    }

    PRAssignment(){
        `${this.student.name} has submitted a PR for ${this.subject}`
    }
    sprintChallenge(){
        `${this.student.name} has begun sprint challenge on ${this.subject}`
    }
}

class ProjectManager extends Person {
    constructor ({gradClassName, favInstructor}){
    super ({name, age, location});
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
    }
    standup(){
        `${person.name} announces to ${channel}, @channel standy times`
    }
    debugsCode(){
        `${name} debugs ${student.name}'s code on ${subject}`
    }

}
const gabba = new Instructor({name: "greg", specialty: "noneeee"})

console.log(gabba)
