# Car Class: JavaScript to TypeScript & Python

Conversion of a JavaScript `Car` class into TypeScript and Python.

In the JS version, `new Car("Audi")` leaves `price`, `model`, and `color` as `undefined`. TypeScript and Python handle that differently, so those parameters are optional in TS and default to `None` in Python to keep the same behavior.

## Original JavaScript

```javascript
class Car{

    //*IMP-> MULTIPLE CONSTRUCTOR NOT POSSIBLE IN JS
    //*IMP-> CONSTRUCTOR OVERLOADING NOT POSSIBLE IN JS
    constructor(name, price, model, color){
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    refuel(){
        console.log(this.name + " car is refueld");
    }
}

//new keyword: to create the object:
const c3 = new Car("Audi");
console.log(c3.name);
console.log(c3.price);
console.log(c3.model);
console.log(c3.color);

const c1 = new Car("BMW", 100, "520d", "Black");

console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);
c1.refuel();

console.log("---------");

const c2 = new Car("Honda", 20, "Civic", "White");

console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);
c2.refuel();
```

## TypeScript

```typescript
class Car {
    // TS also doesn't support multiple constructors (only overload signatures
    // with a single implementation), so optional params are used here.
    name: string;
    price?: number;
    model?: string;
    color?: string;

    constructor(name: string, price?: number, model?: string, color?: string) {
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    refuel(): void {
        console.log(this.name + " car is refueled");
    }
}

// new keyword: to create the object
const c3 = new Car("Audi");
console.log(c3.name);
console.log(c3.price);   // undefined
console.log(c3.model);   // undefined
console.log(c3.color);   // undefined

const c1 = new Car("BMW", 100, "520d", "Black");

console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);
c1.refuel();

console.log("---------");

const c2 = new Car("Honda", 20, "Civic", "White");

console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);
c2.refuel();
```

### Shorter alternative: parameter properties

Declares and assigns in one step.

```typescript
class Car {
    constructor(
        public name: string,
        public price?: number,
        public model?: string,
        public color?: string
    ) {}

    refuel(): void {
        console.log(`${this.name} car is refueled`);
    }
}
```

## Python

```python
from typing import Optional


class Car:
    # Python also has no true constructor overloading;
    # default argument values are the usual workaround.
    def __init__(
        self,
        name: str,
        price: Optional[int] = None,
        model: Optional[str] = None,
        color: Optional[str] = None,
    ):
        self.name = name
        self.price = price
        self.model = model
        self.color = color

    def refuel(self) -> None:
        print(self.name + " car is refueled")


# No `new` keyword in Python: just call the class
c3 = Car("Audi")
print(c3.name)
print(c3.price)   # None
print(c3.model)   # None
print(c3.color)   # None

c1 = Car("BMW", 100, "520d", "Black")

print(c1.name)
print(c1.price)
print(c1.model)
print(c1.color)
c1.refuel()

print("---------")

c2 = Car("Honda", 20, "Civic", "White")

print(c2.name)
print(c2.price)
print(c2.model)
print(c2.color)
c2.refuel()
```

### Shorter alternative: dataclass

```python
from dataclasses import dataclass
from typing import Optional


@dataclass
class Car:
    name: str
    price: Optional[int] = None
    model: Optional[str] = None
    color: Optional[str] = None

    def refuel(self) -> None:
        print(f"{self.name} car is refueled")
```

## Key Differences

- **Missing arguments:** JS silently gives `undefined`. TS raises a compile error for `new Car("Audi")` unless the params are optional, and Python raises a `TypeError` unless defaults are provided.
- **Instantiation:** TS uses `new Car(...)`, Python uses `Car(...)`.
- **Constructor name:** `constructor` in JS/TS, `__init__` in Python (with explicit `self`).
- **Overloading:** TS allows overload *signatures* (multiple declarations, one implementation), and Python can use `@classmethod` factories or `functools.singledispatchmethod`, but neither has separate constructor bodies like Java or C++.
- The typo "refueld" was corrected to "refueled" in the log message.
