// CODE here for your Lambda Classes

class Person {
    constructor ({name, age, location}) {
        this.name = name
        this.age = age
        this.location = location
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor (attr) {
        super (attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
}
    grade(grade, student, subject) { 
        return `${student} receives a perfect score in ${subject}`
    }
}

class Student extends Person {
    constructor({name, age, location, previousBackground, className, favSubjects}){
        super(...arguments);
        this.previousBackground = previousBackground
        this.className = className;
        this.favSubjects = favSubjects
    }
    listsSubjects(){
        console.log(this.favSubjects)
    }

    PRAssignment(){
        return `${this.student.name} has submitted a PR for ${this.subject}`
    }
    sprintChallenge(){
        return `${this.student.name} has begun sprint challenge on ${this.subject}`
    }
}

class ProjectManager extends Person {
    constructor (attr) {
    super (attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
    }
    standup(){
        return `${person.name} announces to ${channel}, @channel 
        standy times`
    }
    debugsCode(){
        return `${name} debugs ${student.name}'s code on ${subject}`
    }

}

const testP = new Person ({name: "Fred", age: 30, 
location: "Outer space"})

console.log(testP);
console.log(testP.speak())

const testI = new Instructor ({name: "Jim", specialty: "Nothing", favLanguage: "English", age: 45, location: "California", catchPhrase: "It's not my fault the kids are failing"})
console.log(testI)
console.log(testI.demo("Math & Calculus"))
console.log(testI.grade(59, "Jackie", "Gym"))

const testS = new Student ({name: "Johnny", age: 21, location: "Californida", previousBackground: "None", className: "Homeroome", favSubjects: "After school"})

console.log(testS)

const testPM = new ProjectManager ({favSubjects: "Grading", className: "Beverly Hills 90210", location: "California", age: 12, name: "Grady McGraderson", previousBackground: "Civil War Veteran", gradClassName: "First class of West Point", favInstructor: "The guy on the $20 bill"})

console.log (testPM)