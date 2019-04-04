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
        console.log(`${student.name} receives a perfect score on ${subject}`);
    };
    calculateGrade(student) {
        let rando = Math.floor(Math.random() * Math.floor(10));
        if (rando %2 === 0) {
            return student.grade = (student.grade - rando);
        } else if (rando %2 !== 0) {
            return student.grade = (student.grade + rando);
        }
    };
}

class Student extends Person {
    constructor(studAttributes) {
        super(studAttributes);
        this.previousBackground = studAttributes.previousBackground;
        this.className = studAttributes.className;
        this.favSubjects = studAttributes.favSubjects;
        this.grade = studAttributes.grade;
    }
    listsSubjects() {
        console.log(this.favSubjects.toString());
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    };
    graduate(teacher) {
        if (this.grade >= 71) {
            console.log(`${this.name} is ready to graduate!`);
        } else if (this.grade < 71) {
            console.log(`${this.name} needs some more flex-time.`);
            return teacher.calculateGrade(this.name);
        }
    };
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    };
}


const jess = new Instructor({
    name: 'Jess',
    location: 'Columbus',
    age: 32,
    gender: 'F',
    favLanguage: 'Javascript',
    specialty: 'back-end',
    catchPhrase: 'Cool. Cool, cool, cool.'
});

const cory = new Student({
    name: 'Cory',
    location: 'Burbank',
    age: '27',
    gender: 'M',
    previousBackground: 'gamer',
    className: 'Web19',
    favSubjects: ['Html', 'PHP', 'Ruby'],
    grade: 80
});

const tim = new ProjectManager({
    name: 'Tim',
    location: 'Fresno',
    age: 50,
    gender: 'M',
    favLanguage: 'CSS',
    specialty: 'design and front-end',
    catchPhrase: 'Skidoosh',
    gradClassName: 'UX2',
    favInstructor: 'Christijan'
});

const sara = new Student({
    name: 'Sara',
    location: 'Minneapolis',
    age: 38,
    gender: 'F',
    previousBackground: 'graphic designer',
    className: 'WebDev4',
    favSubjects: ['CSS', 'Html', 'React'],
    grade: 89
});

// sara.speak();
// jess.speak();
// cory.speak();
// tim.speak();

// tim.debugsCode(cory, 'html');
// sara.PRAssignment('javascript IV');
// jess.demo('CSS');
// tim.grade(cory, 'html');
// cory.listsSubjects();
// tim.standup('timchannel');

// console.log(jess.calculateGrade(sara));
// sara.graduate(jess);
// cory.graduate(tim);
console.log(tim.calculateGrade(cory));
