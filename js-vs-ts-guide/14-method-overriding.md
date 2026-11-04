# Car & Audi: Inheritance in JavaScript, TypeScript and Python

This document shows the same example (a base class `Car` and a subclass `Audi` with method overriding and a field override) in three languages.

---

## 1. JavaScript (original)

```javascript
class Car {
    minSpeed = 100;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log('Starting engine... for Car');
    }
}

class Audi extends Car {
    minSpeed = 200;
    // overridden method
    startEngine() {
        console.log('Starting engine... for Audi');
    }

    autoParking() {
        console.log("Audi -- auto parking");
    }
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();
console.log(audi.minSpeed);

const car = new Car();
car.startEngine();
// car.autoParking();
```

---

## 2. TypeScript (equivalent)

```typescript
class Car {
    minSpeed: number = 100;
    make?: string;
    model?: string;

    constructor(make?: string, model?: string) {
        this.make = make;
        this.model = model;
    }

    startEngine(): void {
        console.log('Starting engine... for Car');
    }
}

class Audi extends Car {
    minSpeed: number = 200;

    // overridden method
    override startEngine(): void {
        console.log('Starting engine... for Audi');
    }

    autoParking(): void {
        console.log("Audi -- auto parking");
    }
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();
console.log(audi.minSpeed);

const car = new Car();
car.startEngine();
// car.autoParking(); // Compile-time error in TS: Property 'autoParking' does not exist on type 'Car'
```

**Notes**
- `make` and `model` are declared as optional (`?`) because the original code calls `new Audi()` and `new Car()` without arguments.
- The `override` keyword (TS 4.3+) makes the overriding explicit and catches typos.
- Unlike JavaScript, the commented-out `car.autoParking()` is caught at **compile time** in TypeScript.

---

## 3. Python (equivalent)

```python
class Car:
    min_speed = 100

    def __init__(self, make=None, model=None):
        self.make = make
        self.model = model

    def start_engine(self):
        print('Starting engine... for Car')


class Audi(Car):
    min_speed = 200

    # overridden method
    def start_engine(self):
        print('Starting engine... for Audi')

    def auto_parking(self):
        print("Audi -- auto parking")


audi = Audi()
audi.start_engine()
audi.auto_parking()
print(audi.min_speed)

car = Car()
car.start_engine()
# car.auto_parking()  # AttributeError at runtime: 'Car' object has no attribute 'auto_parking'
```

**Notes**
- Python uses `snake_case` by convention, so `startEngine` becomes `start_engine`, `autoParking` becomes `auto_parking` and `minSpeed` becomes `min_speed`.
- `min_speed` is a **class attribute** here, which is the closest match to the JS class field. Subclass attributes shadow the parent's.
- `__init__` replaces `constructor`; default values `None` allow creating objects without arguments.
- Python has no `override` keyword; overriding is done simply by redefining the method with the same name (optionally use `typing.override` in Python 3.12+).

---

## 4. Expected Output (all three languages)

```
Starting engine... for Audi
Audi -- auto parking
200
Starting engine... for Car
```

---

## 5. Quick Comparison

| Concept | JavaScript | TypeScript | Python |
|---|---|---|---|
| Constructor | `constructor()` | `constructor()` | `__init__()` |
| Inheritance | `extends` | `extends` | `class Audi(Car)` |
| Field default | `minSpeed = 100;` | `minSpeed: number = 100;` | `min_speed = 100` |
| Method override | redefine method | `override` keyword (optional) | redefine method |
| Instance reference | `this` | `this` | `self` |
| Calling missing method | Runtime `TypeError` | Compile-time error | Runtime `AttributeError` |
| Type checking | None | Static | Dynamic (optional hints) |
