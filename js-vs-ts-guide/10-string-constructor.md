# Car Class: JavaScript → TypeScript & Python

Conversion of a simple `Car` class from JavaScript to TypeScript and Python, including optional constructor arguments and string representation (`__str__` / `__repr__`) in Python.

---

## 1. Original JavaScript

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

> In the JS version, `new Car("Audi")` leaves `price`, `model`, and `color` as `undefined`. TypeScript and Python handle that differently, so those parameters are optional in TS and default to `None` in Python to keep the same behavior.

---

## 2. TypeScript

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

Declares and assigns in one step:

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

### String representation in TS (equivalent of `__str__`)

```typescript
class Car {
    constructor(
        public name: string,
        public price?: number,
        public model?: string,
        public color?: string
    ) {}

    toString(): string {
        return `Car(name=${this.name}, price=${this.price}, model=${this.model}, color=${this.color})`;
    }
}

console.log(String(new Car("BMW", 100, "520d", "Black")));
// Car(name=BMW, price=100, model=520d, color=Black)
```

---

## 3. Python

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

---

## 4. String "constructor" in Python: `__str__` and `__repr__`

Python doesn't have a separate string constructor. Instead, you define special (dunder) methods that control how an object is converted to a string:

| Method | Called by | Purpose |
|---|---|---|
| `__str__` | `print(obj)`, `str(obj)`, f-strings | Readable output for end users |
| `__repr__` | `repr(obj)`, REPL, debuggers, inside lists | Unambiguous output for developers |

If only `__repr__` is defined, `print()` falls back to it. If neither is defined, Python prints something like `<__main__.Car object at 0x7f...>`.

### Full example

```python
from typing import Optional


class Car:
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
        print(f"{self.name} car is refueled")

    # Human-friendly string
    def __str__(self) -> str:
        return f"{self.color or 'Unknown color'} {self.name} {self.model or ''} (price: {self.price})".replace("  ", " ")

    # Developer-friendly string (ideally valid code to recreate the object)
    def __repr__(self) -> str:
        return (
            f"Car(name={self.name!r}, price={self.price!r}, "
            f"model={self.model!r}, color={self.color!r})"
        )


c1 = Car("BMW", 100, "520d", "Black")
c3 = Car("Audi")

print(c1)          # Black BMW 520d (price: 100)        -> __str__
print(repr(c1))    # Car(name='BMW', price=100, model='520d', color='Black')  -> __repr__
print(c3)          # Unknown color Audi (price: None)
print([c1, c3])    # lists use __repr__ for their items
print(f"Selected: {c1}")   # f-strings use __str__
```

**Output:**

```
Black BMW 520d (price: 100)
Car(name='BMW', price=100, model='520d', color='Black')
Unknown color Audi (price: None)
[Car(name='BMW', price=100, model='520d', color='Black'), Car(name='Audi', price=None, model=None, color=None)]
Selected: Black BMW 520d (price: 100)
```

### Dataclass note

`@dataclass` auto-generates `__init__` and `__repr__`, so `print(c1)` already gives a useful output. Define `__str__` yourself only if you want a different, friendlier format.

```python
from dataclasses import dataclass
from typing import Optional


@dataclass
class Car:
    name: str
    price: Optional[int] = None
    model: Optional[str] = None
    color: Optional[str] = None

print(Car("BMW", 100, "520d", "Black"))
# Car(name='BMW', price=100, model='520d', color='Black')
```

---

## 5. Key differences to note

- **Missing arguments:** JS silently gives `undefined`. TS raises a compile error for `new Car("Audi")` unless the params are optional, and Python raises a `TypeError` unless defaults are provided.
- **Instantiation:** TS uses `new Car(...)`, Python uses `Car(...)`.
- **Constructor name:** `constructor` in JS/TS, `__init__` in Python (with explicit `self`).
- **Overloading:** TS allows overload *signatures* (multiple declarations, one implementation). Python can use `@classmethod` factories or `functools.singledispatchmethod`. Neither has separate constructor bodies like Java or C++.
- **String conversion:** `toString()` in JS/TS, `__str__` / `__repr__` in Python.
- **Typo fix:** "refueld" was corrected to "refueled" in the log message.
