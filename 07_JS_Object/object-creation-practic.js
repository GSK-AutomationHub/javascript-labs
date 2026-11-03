// literal

const user = {
    name:'Joe',
    age: 36,
    profession: 'IT Engg',
    salary: '60 LPA'
}

console.log(`${user.name} of age ${user.age} working as 
${user.profession} earning ${user.salary} salary
`)

// Fn Contructor

function Car(brand, color, price){
    this.brand = brand;
    this.color = color;
    this.price = price;
}

const bmw = new Car('bmw', 'blue', '1cr');
console.log(`I own ${bmw.color} ${bmw.brand}`);

// class 
class FourWheeler{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }

    vacation(){
        console.log(`I am on vacation driving my ${this.color} ${this.brand}`)
    }
}

const mers = new FourWheeler('Mercediz', 'black');
console.log(mers.vacation());

//factory Fn
function createDepartment(deptName, hod){
    return {
        department:deptName,
        hod:hod,
        getDepartmentInfo:function(){
            console.log(`hello, dept name is ${this.deptName} and hod is ${this.hod}`);

        }
    }

}
const dept1 = createDepartment('Maths', 'SharmaJi');
console.log(dept1.getDepartmentInfo());
