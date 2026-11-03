const userProfile = {
  username: "john doe",
  age: 24,
  isActive: true,
  skills: ["JavaScript", "Python", "SQL"],
  greeting: function greet() {
    return `Hello, my name is  ${this.username}.`;
  }
}

// Accessing properties like array index
console.log(userProfile.username); // Outputs: john doe
console.log(userProfile.skills[0]); // Outputs: JavaScript
console.log(userProfile.greeting()); // Outputs: Hello, my name is john doe.

console.log("--------------------------------"); 

console.log(userProfile.username); // Outputs: john doe
console.log(userProfile.age); // Outputs: 24
console.log(userProfile.isActive); // Outputs: true
console.log(userProfile.skills[1]); // Outputs: Python
console.log(userProfile.greeting()); // Outputs: Hello, my name is john doe.

// adding new property to object
userProfile['gender'] = 'male';
userProfile['role']= 'automation lead';
console.log(userProfile); // Outputs


// modifying existing property
userProfile.age = 25;
userProfile['skills'][2] = 'TypeScript';
console.log(userProfile);


//deleting property from object
delete userProfile.age;
console.log(userProfile); // Outputs


// checking if property exists in object
console.log('age' in userProfile); // Outputs: false
console.log('role' in userProfile); // Outputs: true


// iterating over object properties
for (let key in userProfile) {
  console.log(`${key}: ${userProfile[key]}`);
}


// function usage in object
const newUserProfile = {
  firstName: "Jone",
  lastName: "Doe",
  age: 24,
  isActive: true,
  skills: ["JavaScript", "Python", "SQL"],
  fullName: function fullname(){
    return `${this.firstName} ${this.lastName}`
  },
  greet() {
    return `Hello, my name is ${this.fullName()}.`;
  }
}

console.log(newUserProfile); // Outputs: Hello, my name is Jone Doe.

// JS Object to JSON  (Serialization)
userProfile_json = JSON.stringify(userProfile,null, 4);
console.log(typeof(userProfile_json), userProfile_json);


// JSON to JS Object  (de-serialization)
userProfile_object = JSON.parse(userProfile_json,null, 4);
console.log(typeof(userProfile_object), userProfile_object);