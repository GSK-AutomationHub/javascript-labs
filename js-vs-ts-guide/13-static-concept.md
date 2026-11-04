# Car Class: JavaScript → TypeScript & Python

## 1. Original JavaScript

```javascript
class Car{
     static wheels = 4;
     constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
        this.wheels = 50;
     }

     static stop(){
        console.log("car -- stop")
     }

     drive(){
        console.log(this.name + " is driving");
     }
}

const c1 = new Car("Honda", 2023, 50);
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${Car.wheels}`);
console.log(Car.wheels)
Car.stop();
//c1.stop();//error
c1.drive();
//Car.drive();//error
//console.log(wheels);

//static var/function:  call it by using class name
//non static var/function: call it by using object reference name
```

**Output**

```
Honda, 2023, 50, 4
4
car -- stop
Honda is driving
```

---

## 2. TypeScript

```typescript
class Car {
  static wheels: number = 4;

  name: string;
  model: number;
  price: number;
  wheels: number; // instance property (separate from static `wheels`)

  constructor(name: string, model: number, price: number) {
    this.name = name;
    this.model = model;
    this.price = price;
    this.wheels = 50;
  }

  static stop(): void {
    console.log("car -- stop");
  }

  drive(): void {
    console.log(this.name + " is driving");
  }
}

const c1 = new Car("Honda", 2023, 50);
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${Car.wheels}`);
console.log(Car.wheels);
Car.stop();
// c1.stop();   // Compile error: 'stop' does not exist on type 'Car'
c1.drive();
// Car.drive(); // Compile error: 'drive' does not exist on type 'typeof Car'
// console.log(wheels); // Error: Cannot find name 'wheels'

// static var/function: call it using the class name
// non-static var/function: call it using the object reference name
```

You can also use the shorthand constructor (parameter properties):

```typescript
class Car {
  static wheels: number = 4;
  wheels: number = 50;

  constructor(
    public name: string,
    public model: number,
    public price: number
  ) {}

  static stop(): void {
    console.log("car -- stop");
  }

  drive(): void {
    console.log(`${this.name} is driving`);
  }
}
```

**Output**

```
Honda, 2023, 50, 4
4
car -- stop
Honda is driving
```

---

## 3. Python

```python
class Car:
    wheels = 4  # class (static) variable

    def __init__(self, name, model, price):
        self.name = name
        self.model = model
        self.price = price
        self.wheels = 50  # instance variable (shadows class variable on the instance only)

    @staticmethod
    def stop():
        print("car -- stop")

    def drive(self):
        print(self.name + " is driving")


c1 = Car("Honda", 2023, 50)
print(f"{c1.name}, {c1.model}, {c1.price}, {Car.wheels}")
print(Car.wheels)
Car.stop()
# c1.stop()   # Works in Python (unlike JS/TS) – static methods are callable via instance
c1.drive()
# Car.drive() # Error: missing 1 required positional argument: 'self'
# print(wheels)  # NameError: name 'wheels' is not defined

# static var/function: call it using the class name
# non-static var/function: call it using the object reference name
```

**Output**

```
Honda, 2023, 50, 4
4
car -- stop
Honda is driving
```

---

class Person:
    def __init__(self, name: str, city: str = "Nashik"):
        self.name = name
        self.city = city

    def __str__(self):                 # what str(obj) and print(obj) use
        return f"{self.name} from {self.city}"

    def __repr__(self):                # developer-friendly representation
        return f"Person(name={self.name!r}, city={self.city!r})"


p = Person("Amit")
print(p)        # Amit from Nashik
print(str(p))   # Amit from Nashik
print(repr(p))  # Person(name='Amit', city='Nashik')

---

## 4. Key Differences & Notes

| Concept | JavaScript | TypeScript | Python |
|---|---|---|---|
| Static variable | `static wheels = 4;` | `static wheels: number = 4;` | `wheels = 4` (class-level) |
| Static method | `static stop(){}` | `static stop(): void {}` | `@staticmethod def stop():` |
| Constructor | `constructor(...)` | `constructor(...)` | `def __init__(self, ...)` |
| Instance reference | `this` | `this` | `self` (explicit first param) |
| Instance var with same name as static | Separate (`c1.wheels` = 50, `Car.wheels` = 4) | Separate | Separate (`c1.wheels` = 50, `Car.wheels` = 4) |
| `c1.stop()` | Runtime error | Compile error | **Works** |
| `Car.drive()` | Runtime error | Compile error | Error (missing `self`) |
| Type checking | None | Compile-time | Optional (type hints) |
| String interpolation | `` `${x}` `` | `` `${x}` `` | `f"{x}"` |

### Takeaways

- **Static** members belong to the **class** → access with `Car.wheels` / `Car.stop()`.
- **Non-static** members belong to the **object** → access with `c1.name` / `c1.drive()`.
- `this.wheels = 50` creates an *instance* property; it does **not** change `Car.wheels` (still `4`).
- In Python, a `@staticmethod` can technically be called through an instance, which is the one place its behavior differs from JS/TS.
