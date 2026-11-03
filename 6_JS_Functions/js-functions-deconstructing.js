//function params without destrucring:
function printUserName(person){
    console.log( person.firstName + ' ' + person.lastName );
}

const person1 = {
    firstName:"John" ,
    lastName :'Doe',
};
printUserName(person1);

//with destrucring:
function printUserName({ lastName }) {
    console.log(lastName);
}

const person = {
    firstName: "Testing",
    lastName: 'Automation',
};

printUserName(person);