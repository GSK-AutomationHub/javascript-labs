//Object:
const user = {
    firstName: "Tom",
    lastName: "Smith",
    age: 30
};

const { firstName, lastName, city = "LA", age } = user;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);

