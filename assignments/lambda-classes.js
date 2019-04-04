// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instAttributes) {
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${this.subject}`);
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${this.subject}`);
    };
}

class Student extends Person {
    constructor(studAttributes) {
        super(studAttributes);
        this.previousBackground = studAttributes.previousBackground;
        this.className = studAttributes.className;
        this.favSubjects = studAttributes.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    };
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`​​​​​);
    };
    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}