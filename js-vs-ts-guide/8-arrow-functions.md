# Arrow Functions: JavaScript → TypeScript → Python

## 1. Original JavaScript

```javascript
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
```

---

## 2. TypeScript

```typescript
// Single param, parentheses optional in TS, but a type annotation requires them
const square = (num: number): number => num * num;
console.log(square(5));

const add = (a: number, b: number): number => a + b;
console.log(add(4, 5));

const mesg = (): string => 'hello JS';
console.log(mesg());

// Template literal with a typed object
interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: 'Naveen',
  lastName: 'Automation Labs',
};

const getFullName = (person: Person): string => `${person.firstName} ${person.lastName}`;

const fullName = getFullName(person);
console.log(fullName);

// Default params (types are inferred from the defaults, but explicit is clearer)
const greet = (username: string = 'guest', age: number = 0): string =>
  `Hello, ${username}! you are ${age} years old`;

console.log(greet());
console.log(greet('Tom', 30));

// Rest params
const sum = (...numbers: number[]): number =>
  numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 5));

// Default + rest params
const browserInfo = (browser: string = 'chrome', ...details: string[]): void => {
  console.log(`Browser: ${browser}`);
  console.log('other details:', details);
};

browserInfo();
browserInfo('firefox', '115.11', 'mozilla', 'headless');

// Max using Math
const findMaxNumber = (a: number, b: number, c: number): number => {
  return Math.max(a, b, c);
};

const maxValue = findMaxNumber(10, 30, 50);
console.log(maxValue);
```

---

## 3. Python (v1: direct translation)

```python
from dataclasses import dataclass


def square(num: int) -> int:
    return num * num

print(square(5))


def add(a: int, b: int) -> int:
    return a + b

print(add(4, 5))


def mesg() -> str:
    return 'hello JS'

print(mesg())


# f-string replaces the template literal; dataclass replaces the plain object
@dataclass
class Person:
    first_name: str
    last_name: str


def get_full_name(person: Person) -> str:
    return f"{person.first_name} {person.last_name}"

person = Person(first_name='Naveen', last_name='Automation Labs')
print(get_full_name(person))


# Default params work natively
def greet(username: str = 'guest', age: int = 0) -> str:
    return f"Hello, {username}! you are {age} years old"

print(greet())
print(greet('Tom', 30))


# *args replaces rest params; the built-in sum() replaces reduce
def total(*numbers: int) -> int:
    return sum(numbers)

print(total(1, 2, 3, 4, 5))


# Default + *args
def browser_info(browser: str = 'chrome', *details: str) -> None:
    print(f"Browser: {browser}")
    print('other details:', list(details))

browser_info()
browser_info('firefox', '115.11', 'mozilla', 'headless')


# Built-in max() does the job
def find_max_number(a: int, b: int, c: int) -> int:
    return max(a, b, c)

max_value = find_max_number(10, 30, 50)
print(max_value)
```

### Notes on the v1 Python choices

- **Arrow functions became `def`.** Python has `lambda`, but assigning one to a name (`square = lambda n: n * n`) is discouraged by PEP 8. `lambda` is only worth it inline, e.g. `sorted(items, key=lambda x: x[1])`.
- **Renamed `sum` to `total`.** Defining `sum` would shadow Python's built-in, which is also used inside the function. Likewise, `reduce` isn't needed because `sum()` is the idiomatic equivalent.
- **Naming:** `getFullName` became `get_full_name` and `findMaxNumber` became `find_max_number`, per snake_case convention.
- **`list(details)`:** `*details` is a tuple in Python, so it is converted to a list to match the JS array output.
- **Object literal:** a `dict` would also work, but a `dataclass` is closer to the TS interface and gives typed attribute access.

---

## 4. Python (v2: simplified, Pythonic)

```python
from dataclasses import dataclass


@dataclass
class Person:
    first_name: str
    last_name: str

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"


def greet(username: str = "guest", age: int = 0) -> str:
    return f"Hello, {username}! you are {age} years old"


def browser_info(browser: str = "chrome", *details: str) -> None:
    print(f"Browser: {browser}")
    print("other details:", details)


# square, add, mesg, sum, max: not worth wrapping, the language already has them
print(5 ** 2)
print(4 + 5)
print("hello JS")

person = Person("Naveen", "Automation Labs")
print(person.full_name)

print(greet())
print(greet("Tom", 30))

print(sum([1, 2, 3, 4, 5]))

browser_info()
browser_info("firefox", "115.11", "mozilla", "headless")

print(max(10, 30, 50))
```

### What changed from v1 to v2

- **Dropped trivial wrappers.** `square`, `add`, `mesg`, `sum` and `find_max_number` were just wrapping an operator or built-in (`**`, `+`, `sum()`, `max()`). In Python you'd call those directly rather than define a function around them.
- **Full name became a `@property`.** A method that derives a value from the object's own fields belongs on the class, so `person.full_name` reads more naturally than `get_full_name(person)`.
- **Kept only the functions with real logic.** `greet` (default params) and `browser_info` (default + `*args`) are the ones that demonstrate something Python-specific, so they stay as `def`.
- **Left `details` as a tuple.** The earlier `list(details)` conversion only existed to mimic the JS array output. A tuple is the natural type for `*args`.
- **No `lambda` and no `reduce`.** Neither adds anything here, and `sum()` covers the reduce case.
