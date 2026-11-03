
// ---------- Various ways arrow fn being used ---------------

// if single param no need to mention parathesis()
const square = num => num * num;
console.log(square(5));

// for more than one param, parenthesis required ()
const add = (a,b) => a+b;
console.log(add(4,5));

// printing string
const mesg = () => 'hello JS';
console.log(mesg());

// arrow fn with temp literal
const person = {
    firstName: 'Naveen',
    lastName: 'Automation Labs'
}

const getFullName = (person) => `${person.firstName} ${person.lastName}`;

const fullName = getFullName(person);
console.log(fullName);

// arrow fn with default param
const greet = (username='guest', age=0) => `Hello, ${username}! you are ${age} years old`;

console.log(greet());
console.log(greet('Tom', 30));

//arrow fn with rest/spread parameters ... varargs
const sum = (...numbers) => numbers.reduce((acc, num) => acc+num, 0);
console.log(sum(1,2,3,4,5));

//arrow fn with deafult + rest param
const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log('other details:', details);
};

browserInfo();
browserInfo('firefox', '115.11', 'mozilla', 'headless');

//max number using Math
const findMaxNumber = (a,b,c) => {
    return Math.max(a,b,c);
};

const maxValue = findMaxNumber(10,30,50);
console.log(maxValue);