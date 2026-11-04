# JavaScript Object Creation Patterns: TypeScript & Python Conversions

Python gets the patterns that map naturally; the ones that don't are adapted or skipped.

---

## Original JavaScript

```javascript
//1. Object Literals: {}
const user = {
    name:'michael',
    age : 25,
    country : 'USA',
    Occupation: 'Engineer'
};

console.log(user.name);
console.log(user.Occupation);

//2. Constructor Function:
function Car(brand, model, price){
    this.brand = brand;
    this.model= model ;
    this.price = price;
};

const c1 = new Car("BMW", "520d", 10000);
const c2 = new Car("Audi", "Q7", 15000);

console.log(c1.brand + " "+ c1.model + " "+ c1.price);
console.log(c2.brand + " "+ c2.model + " "+ c2.price);

//3. Class style:
class Customer{
    constructor(name, product){
        this.name = name; //Instance variable
        this.product = product;
    }

    addToCart(){
        console.log(`${this.product} added to cart`);
    }
}

//instance of the class:
const cust1 = new Customer("Naveen", "Apple MacBook Pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();

//4. Object.create(): with some prototype object.
const employeePrototype = {
    printInfo:function(){
        console.log(`hello, emp name is ${this.name}`);
    }
};

const e1 = Object.create(employeePrototype);
e1.name = 'Tom';
e1.printInfo();

//4. using Factory Functions: returns an object.
function createDepartment(deptName, hod ){
    return {
        deptName: deptName,
        hod: hod,
        getDepartmentInfo:function(){
            console.log(`hello, dept name is ${this.deptName} and hod is ${this.hod}`);

        }
    }
}
const dept1 = createDepartment("Physics", "H C Verma");
const dept2 = createDepartment("Maths", "R C Sharma");
dept1.getDepartmentInfo();
dept2.getDepartmentInfo();

console.log(dept1.deptName + " "+ dept1.hod)
```

---

## TypeScript

```typescript
// 1. Object Literals: {}
const user = {
    name: 'michael',
    age: 25,
    country: 'USA',
    Occupation: 'Engineer'
};

console.log(user.name);
console.log(user.Occupation);

// 2. Constructor Function (typed version)
// TS doesn't type `this` well in old-style constructor functions,
// so we declare an interface and the constructor's shape explicitly.
interface Car {
    brand: string;
    model: string;
    price: number;
}

interface CarConstructor {
    new (brand: string, model: string, price: number): Car;
}

const Car = function (this: Car, brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
} as unknown as CarConstructor;

const c1 = new Car("BMW", "520d", 10000);
const c2 = new Car("Audi", "Q7", 15000);

console.log(c1.brand + " " + c1.model + " " + c1.price);
console.log(c2.brand + " " + c2.model + " " + c2.price);

// 3. Class style:
class Customer {
    name: string;     // Instance variable
    product: string;

    constructor(name: string, product: string) {
        this.name = name;
        this.product = product;
    }

    addToCart(): void {
        console.log(`${this.product} added to cart`);
    }
}

const cust1 = new Customer("Naveen", "Apple MacBook Pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();

// 4. Object.create(): with some prototype object.
interface Employee {
    name: string;
    printInfo(): void;
}

const employeePrototype = {
    printInfo(this: Employee): void {
        console.log(`hello, emp name is ${this.name}`);
    }
};

const e1 = Object.create(employeePrototype) as Employee;
e1.name = 'Tom';
e1.printInfo();

// 5. Factory Functions: returns an object.
interface Department {
    deptName: string;
    hod: string;
    getDepartmentInfo(): void;
}

function createDepartment(deptName: string, hod: string): Department {
    return {
        deptName,
        hod,
        getDepartmentInfo() {
            console.log(`hello, dept name is ${this.deptName} and hod is ${this.hod}`);
        }
    };
}

const dept1 = createDepartment("Physics", "H C Verma");
const dept2 = createDepartment("Maths", "R C Sharma");
dept1.getDepartmentInfo();
dept2.getDepartmentInfo();

console.log(dept1.deptName + " " + dept1.hod);
```

In practice, most TS developers skip the old constructor-function pattern and use `class` instead (section 3), since the typing in section 2 needs a cast.

---

## Python

```python
from dataclasses import dataclass
from types import SimpleNamespace

# 1. Object literal -> dict (or SimpleNamespace for dot access)
user = {
    "name": "michael",
    "age": 25,
    "country": "USA",
    "Occupation": "Engineer",
}

print(user["name"])
print(user["Occupation"])

# 2. Constructor function -> Python has no equivalent;
#    __init__ in a class is the constructor (see 3).
#    A dataclass is the closest idiomatic match for Car:
@dataclass
class Car:
    brand: str
    model: str
    price: int

c1 = Car("BMW", "520d", 10000)
c2 = Car("Audi", "Q7", 15000)

print(f"{c1.brand} {c1.model} {c1.price}")
print(f"{c2.brand} {c2.model} {c2.price}")

# 3. Class style:
class Customer:
    def __init__(self, name: str, product: str):
        self.name = name          # Instance variable
        self.product = product

    def add_to_cart(self) -> None:
        print(f"{self.product} added to cart")

cust1 = Customer("Naveen", "Apple MacBook Pro")
print(cust1.name)
print(cust1.product)
cust1.add_to_cart()

# 4. Object.create() with a prototype -> SKIPPED.
#    Python uses class-based inheritance, not prototypes,
#    so there is no meaningful equivalent. Use a class (see 3).

# 5. Factory function: returns an object.
def create_department(dept_name: str, hod: str) -> SimpleNamespace:
    def get_department_info():
        print(f"hello, dept name is {dept_name} and hod is {hod}")

    return SimpleNamespace(
        dept_name=dept_name,
        hod=hod,
        get_department_info=get_department_info,
    )

dept1 = create_department("Physics", "H C Verma")
dept2 = create_department("Maths", "R C Sharma")
dept1.get_department_info()
dept2.get_department_info()

print(dept1.dept_name + " " + dept1.hod)
```

### Notes on the Python version

- **#2 and #4** don't have direct equivalents, so #2 became a `@dataclass` and #4 is skipped.
- **#5** works as a closure here. In real Python code you'd normally just write a class instead of a factory function.
- Python uses `snake_case` by convention, so `getDepartmentInfo` became `get_department_info` and `addToCart` became `add_to_cart`.
