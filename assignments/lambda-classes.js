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

//having a bit of fun switching constructor and super around
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
    finalGrade(student){
        return `${student}'s Final grade is ${Math.random() * 100}`
    }
   
}

class Student extends Person {
    constructor({previousBackground, className, favSubjects, grade = 50}){
        super(...arguments);
        this.previousBackground = previousBackground
        this.className = className;
        this.favSubjects = favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${this.subject}`
    }
    graduation(){
        if (Instructor.finalGrade > 70){
            return `Pass`
        }
        else {
            return `Fail`
        }
    }
}

// some more fun
class ProjectManager extends Person {
    constructor (attr) {
    super (attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel 
        standy times`
    }
    debugsCode (name, subject) {
        return `${this.name} debugs ${name}'s code on ${subject}`
    }
    finalGrade(student){
        return `${student}'s Final grade is ${Math.random() * 100}`
    }
}

const testP = new Person ({name: "Fred", age: 30, 
location: "Outer space"})

console.log(testP);
console.log(testP.speak())


const testI = new Instructor ({name: "Jim", specialty: "Nothing", favLanguage: "English", age: 45, location: "California", catchPhrase: "It's not my fault the kids are failing"})

console.log(testI)
console.log(testI.name)
console.log(testI.demo("Math & Calculus"))
console.log(testI.grade(59, "Jackie", "Gym"))


const testS = new Student ({name: "Johnny", age: 21, location: "Californida", previousBackground: "None", className: "Homeroome", favSubjects: ["after school", 57, "video games", "selfies"]})

console.log(testS)
console.log(testS.speak())
console.log(testS.listsSubjects())
console.log(testS.PRAssignment("History"))
console.log(testS.sprintChallenge())


const testPM = new ProjectManager ({favSubjects: "Grading", className: "Beverly Hills 90210", location: "California", age: 12, name: "Grady McGraderson", previousBackground: "Civil War Veteran", gradClassName: "First class of West Point", favInstructor: "The guy on the $20 bill"})

console.log (testPM)
console.log (testPM.standUp("web20"))
console.log (testPM.debugsCode(testS.name, "Binary"));

// Sprint challenge test

console.log(testI.finalGrade(testS.name))
console.log(testPM.finalGrade(testS.name))

console.log(testS.graduation())