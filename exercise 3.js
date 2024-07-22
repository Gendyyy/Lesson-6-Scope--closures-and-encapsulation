// Using Function Constructor
function Person(name) {
    this.name = name;
}

Person.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
};

let teacher1 = new Person("John");
teacher1.teach("Math");

// Using Object.create
const personProto = {
    teach: function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
};

function createPerson(name) {
    let person = Object.create(personProto);
    person.name = name;
    return person;
}

let teacher2 = createPerson("Jane");
teacher2.teach("Science");
