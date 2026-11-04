# JavaScript Array Methods: TypeScript & Python Equivalents

## Part 1: length, push, pop, unshift, shift, concat, splice, slice, indexOf, includes, forEach

### Original JavaScript

```javascript
let arr = [1,2,3,4,5];

// length, push, pop, unshift, shift
console.log(arr.length)

arr.push(6);
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

console.log("------------------------------------")

//concat, splice, slice, indexOf, includes, forEach
arr = arr.concat([7,8,9,10]);
console.log(arr);

arr.splice(3,0,11,12,5);
console.log(arr);

arr.splice(3,2);
console.log(arr);

console.log(arr.slice(3,7));

console.log(arr.indexOf(5))
console.log(arr.indexOf(5, arr.indexOf(5)+1));

console.log(arr.includes(5));
console.log(arr.includes(6));

arr.forEach((e) => console.log(e));
arr.forEach((e) => console.log(e**2));
```

### TypeScript

The code is nearly identical to the JavaScript. The only real change is the type annotation.

```typescript
let arr: number[] = [1, 2, 3, 4, 5];

// length, push, pop, unshift, shift
console.log(arr.length);

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

console.log("------------------------------------");

// concat, splice, slice, indexOf, includes, forEach
arr = arr.concat([7, 8, 9, 10]);
console.log(arr);

arr.splice(3, 0, 11, 12, 5);
console.log(arr);

arr.splice(3, 2);
console.log(arr);

console.log(arr.slice(3, 7));

console.log(arr.indexOf(5));
console.log(arr.indexOf(5, arr.indexOf(5) + 1));

console.log(arr.includes(5));
console.log(arr.includes(6));

arr.forEach((e: number) => console.log(e));
arr.forEach((e: number) => console.log(e ** 2));
```

### Python

```python
arr = [1, 2, 3, 4, 5]

# length, push, pop, unshift, shift
print(len(arr))

arr.append(6)
print(arr)

arr.pop()
print(arr)

arr.insert(0, 0)
print(arr)

arr.pop(0)
print(arr)

print("------------------------------------")

# concat, splice, slice, indexOf, includes, forEach
arr = arr + [7, 8, 9, 10]          # or: arr.extend([7, 8, 9, 10])
print(arr)

arr[3:3] = [11, 12, 5]             # splice(3, 0, 11, 12, 5): insert
print(arr)

del arr[3:5]                       # splice(3, 2): remove 2 items at index 3
print(arr)

print(arr[3:7])                    # slice(3, 7)

print(arr.index(5))
print(arr.index(5, arr.index(5) + 1))

print(5 in arr)
print(6 in arr)

for e in arr:
    print(e)
for e in arr:
    print(e ** 2)
```

### Output (same for all three)

```
5
[1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5]
[0, 1, 2, 3, 4, 5]
[1, 2, 3, 4, 5]
------------------------------------
[1, 2, 3, 4, 5, 7, 8, 9, 10]
[1, 2, 3, 11, 12, 5, 4, 5, 7, 8, 9, 10]
[1, 2, 3, 5, 4, 5, 7, 8, 9, 10]
[5, 4, 5, 7]
3
5
true   (Python prints True)
false  (Python prints False)
...
```

### Differences to note

- **`indexOf` vs `index`:** JS returns `-1` when the value isn't found, but Python's `list.index()` raises `ValueError`. If you need the JS behavior, guard it with `if x in arr` or wrap it in try/except.
- **`splice`:** Python has no single equivalent. Use slice assignment (`arr[i:i] = [...]`) to insert and `del arr[i:j]` to remove. Note that `splice(3, 2)` means "remove 2 items", while the Python slice takes an end index (`3:5`).
- **`shift` and `unshift`:** `pop(0)` and `insert(0, x)` are O(n) in Python lists. For a queue-like pattern, use `collections.deque` (`popleft()`, `appendleft()`).
- **`concat`:** It returns a new array, like `arr + [...]` in Python. Use `extend()` to mutate in place instead.

---

## Part 2: map, filter, reduce, every, some, find, sort

### Original JavaScript

```javascript
// map, filter, reduce, every, some, fine, lastindexof

let arr = [
  1,  2, 3, 11, 12,
  5,  4, 5,  7,  8,
  9, 10
]

let mappedArray = arr.map((e) => e*3);
console.log(mappedArray);

let filteredArray = mappedArray.filter((e) => e % 3 === 0 && e % 5 === 0);
console.log(filteredArray);

let reducedArray = filteredArray.reduce((sum, item) => sum + item, 0);
console.log(reducedArray);

let chainingArray = arr.map((e) => e*3)
.filter((e) => e % 3 === 0 && e % 5 === 0)
.reduce((sum, item) => sum + item, 0);
console.log(chainingArray);

console.log(filteredArray.every((e)=> e % 5 === 0));
console.log(filteredArray.every((e)=> e % 2 === 0));
console.log(filteredArray.some((e)=> e % 2 === 0));
console.log(filteredArray.some((e)=> e % 7 === 0));

let gradeLoop = [
    {thershold:90, message:'Grade A - Excellent'},
    {thershold:80, message:'Grade B - Good'},
    {thershold:70, message:'Grade C - Can do Better'},
    {thershold:60, message:'Grade D - Need Coaching'},
    {thershold:50, message:'Grade E - Underperforming'},
    {thershold:40, message:'Grade F - call parents'}
]

console.log(gradeLoop.filter((e) => e.thershold % 30 === 0));
console.log(gradeLoop.reduce((sum, item) => sum + item.thershold, 0));
console.log(gradeLoop.find((e) => e.thershold === 50))
console.log(gradeLoop.sort((a,b) => a.thershold - b.thershold));
console.log(gradeLoop.sort((a,b) => b.thershold -a.thershold));

let top = [10,5,25,8,30,15]; 

let maxNumberInArray = (top.sort((num1, num2) => num2 - num1)).shift();
console.log(maxNumberInArray)
```

### TypeScript

```typescript
// map, filter, reduce, every, some, find, lastIndexOf

interface Grade {
  thershold: number;
  message: string;
}

let arr: number[] = [1, 2, 3, 11, 12, 5, 4, 5, 7, 8, 9, 10];

let mappedArray: number[] = arr.map((e) => e * 3);
console.log(mappedArray);

let filteredArray: number[] = mappedArray.filter((e) => e % 3 === 0 && e % 5 === 0);
console.log(filteredArray);

let reducedArray: number = filteredArray.reduce((sum, item) => sum + item, 0);
console.log(reducedArray);

let chainingArray: number = arr
  .map((e) => e * 3)
  .filter((e) => e % 3 === 0 && e % 5 === 0)
  .reduce((sum, item) => sum + item, 0);
console.log(chainingArray);

console.log(filteredArray.every((e) => e % 5 === 0));
console.log(filteredArray.every((e) => e % 2 === 0));
console.log(filteredArray.some((e) => e % 2 === 0));
console.log(filteredArray.some((e) => e % 7 === 0));

let gradeLoop: Grade[] = [
  { thershold: 90, message: "Grade A - Excellent" },
  { thershold: 80, message: "Grade B - Good" },
  { thershold: 70, message: "Grade C - Can do Better" },
  { thershold: 60, message: "Grade D - Need Coaching" },
  { thershold: 50, message: "Grade E - Underperforming" },
  { thershold: 40, message: "Grade F - call parents" },
];

console.log(gradeLoop.filter((e) => e.thershold % 30 === 0));
console.log(gradeLoop.reduce((sum, item) => sum + item.thershold, 0));
console.log(gradeLoop.find((e) => e.thershold === 50)); // Grade | undefined
console.log(gradeLoop.sort((a, b) => a.thershold - b.thershold));
console.log(gradeLoop.sort((a, b) => b.thershold - a.thershold));

// renamed from `top`: it clashes with the global window.top in TS (DOM lib)
let topNumbers: number[] = [10, 5, 25, 8, 30, 15];

let maxNumberInArray: number | undefined = topNumbers.sort((n1, n2) => n2 - n1).shift();
console.log(maxNumberInArray);
```

### Python

```python
# map, filter, reduce, every, some, find, lastindex

from functools import reduce

arr = [1, 2, 3, 11, 12, 5, 4, 5, 7, 8, 9, 10]

mapped_array = list(map(lambda e: e * 3, arr))      # or: [e * 3 for e in arr]
print(mapped_array)

filtered_array = list(filter(lambda e: e % 3 == 0 and e % 5 == 0, mapped_array))
print(filtered_array)

reduced_array = reduce(lambda total, item: total + item, filtered_array, 0)   # or: sum(filtered_array)
print(reduced_array)

chaining_array = reduce(
    lambda total, item: total + item,
    filter(lambda e: e % 3 == 0 and e % 5 == 0, map(lambda e: e * 3, arr)),
    0,
)
print(chaining_array)

print(all(e % 5 == 0 for e in filtered_array))   # every
print(all(e % 2 == 0 for e in filtered_array))
print(any(e % 2 == 0 for e in filtered_array))   # some
print(any(e % 7 == 0 for e in filtered_array))

grade_loop = [
    {"thershold": 90, "message": "Grade A - Excellent"},
    {"thershold": 80, "message": "Grade B - Good"},
    {"thershold": 70, "message": "Grade C - Can do Better"},
    {"thershold": 60, "message": "Grade D - Need Coaching"},
    {"thershold": 50, "message": "Grade E - Underperforming"},
    {"thershold": 40, "message": "Grade F - call parents"},
]

print([e for e in grade_loop if e["thershold"] % 30 == 0])
print(sum(item["thershold"] for item in grade_loop))
print(next((e for e in grade_loop if e["thershold"] == 50), None))   # find

grade_loop.sort(key=lambda e: e["thershold"])                  # list.sort() returns None,
print(grade_loop)                                              # so print separately
grade_loop.sort(key=lambda e: e["thershold"], reverse=True)
print(grade_loop)

top = [10, 5, 25, 8, 30, 15]

top.sort(reverse=True)
max_number_in_array = top.pop(0)                               # shift()
print(max_number_in_array)
```

### Output (same values in all three)

```
[3, 6, 9, 33, 36, 15, 12, 15, 21, 24, 27, 30]
[15, 15, 30]
60
60
true      (Python: True)
false     (Python: False)
true      (Python: True)
false     (Python: False)
[ { thershold: 90, ... }, { thershold: 60, ... } ]
390
{ thershold: 50, message: 'Grade E - Underperforming' }
[ ...sorted ascending (40 → 90)... ]
[ ...sorted descending (90 → 40)... ]
30
```

### Differences to note

- **`reduce`:** Python needs `functools.reduce`, with the initial value as the *last* argument. For sums, the built-in `sum()` is more idiomatic.
- **`map` / `filter`:** Python returns lazy iterators, so wrap them in `list()` to print. List comprehensions are the usual Pythonic style.
- **`every` / `some`:** These map to `all()` and `any()` with a generator expression.
- **`find`:** Python has no direct equivalent. `next(generator, None)` returns the first match or `None`, like JS returning `undefined`.
- **`sort`:** In JS, `sort()` mutates the array and returns it. In Python, `list.sort()` mutates and returns `None`, so `print(arr.sort())` prints `None`. Use `sorted()` if you want a new list.
- **`lastIndexOf`:** The comment mentions it but the code doesn't use it. Python has no built-in `rindex` for lists. Use `len(arr) - 1 - arr[::-1].index(x)`.
- **`top` in TypeScript:** Renamed to `topNumbers` because `top` collides with the global `window.top` in a non-module TS file. Alternatively, add `export {}` at the top of the file to make it a module.
