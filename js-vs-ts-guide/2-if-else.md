# If-Else and Ternary: JavaScript vs TypeScript vs Python

## Part 1: Simple if-else and ternary

### JavaScript (original)

```javascript
let age = 30;

if (age > 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}

let voteEligibityStatus = age > 18 ? "Eligible to Vote" : "Not Eligible to Vote";
console.log(voteEligibityStatus);
```

### TypeScript

```typescript
let age: number = 30;

if (age > 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}

let voteEligibilityStatus: string = age > 18 ? "Eligible to Vote" : "Not Eligible to Vote";
console.log(voteEligibilityStatus);
```

### Python

```python
age = 30

if age > 18:
    print("Eligible to Vote")
else:
    print("Not Eligible to Vote")

vote_eligibility_status = "Eligible to Vote" if age > 18 else "Not Eligible to Vote"
print(vote_eligibility_status)
```

### Key differences

- **TypeScript** is nearly identical to JavaScript. The main addition is type annotations (`: number`, `: string`), which are optional here since TypeScript can infer them.
- **Python** uses indentation instead of curly braces, and `if`/`else` conditions don't need parentheses.
- Python's ternary is written as `value_if_true if condition else value_if_false`, rather than `condition ? a : b`.
- Python uses `print()` instead of `console.log()`, and the convention is `snake_case` for variable names.
- The variable name `voteEligibityStatus` was corrected to `voteEligibilityStatus` (spelling).
- `age > 18` means someone who is exactly 18 is marked "Not Eligible". In most places the voting age is 18 and up, so you'd likely want `age >= 18`.

---

## Part 2: Nested if-else and nested ternary

### JavaScript (original)

```javascript
let age = 30;
let isCitizen = true;

if (age >= 18) {
  if (isCitizen) {
    console.log("Eligible to Vote");
  } else {
    console.log("Not Eligible: Not a Citizen");
  }
} else {
  console.log("Not Eligible: Under Age");
}

let status = age >= 18
  ? (isCitizen ? "Eligible to Vote" : "Not Eligible: Not a Citizen")
  : "Not Eligible: Under Age";
console.log(status);
```

### TypeScript

```typescript
let age: number = 30;
let isCitizen: boolean = true;

if (age >= 18) {
  if (isCitizen) {
    console.log("Eligible to Vote");
  } else {
    console.log("Not Eligible: Not a Citizen");
  }
} else {
  console.log("Not Eligible: Under Age");
}

let status: string = age >= 18
  ? (isCitizen ? "Eligible to Vote" : "Not Eligible: Not a Citizen")
  : "Not Eligible: Under Age";
console.log(status);
```

### Python

```python
age = 30
is_citizen = True

if age >= 18:
    if is_citizen:
        print("Eligible to Vote")
    else:
        print("Not Eligible: Not a Citizen")
else:
    print("Not Eligible: Under Age")

status = (
    ("Eligible to Vote" if is_citizen else "Not Eligible: Not a Citizen")
    if age >= 18
    else "Not Eligible: Under Age"
)
print(status)
```

### Key differences

- **TypeScript** is again almost identical to JavaScript, with only the type annotations added (`number`, `boolean`, `string`). The nested ternary works exactly the same way.
- **Python** nests by indentation level, so the inner `if` must be indented one more level inside the outer `if`. There are no braces.
- **Booleans** are written `true`/`false` in JavaScript and TypeScript, but `True`/`False` (capitalized) in Python.
- **Nested ternary in Python** reads inside-out: the inner expression sits in the "value if true" slot of the outer one. Wrapping it in parentheses and splitting it across lines keeps it readable.
- **Readability:** nested ternaries get hard to follow quickly in all three languages. A good rule of thumb is to use them for one level only, and switch to regular if-else beyond that.

---

## Bonus: `else if` vs `elif`

When conditions are sequential rather than truly nested, a flat chain is cleaner. JavaScript and TypeScript use `else if`, and Python uses `elif`.

### JavaScript / TypeScript

```javascript
if (age < 18) {
  console.log("Not Eligible: Under Age");
} else if (!isCitizen) {
  console.log("Not Eligible: Not a Citizen");
} else {
  console.log("Eligible to Vote");
}
```

### Python

```python
if age < 18:
    print("Not Eligible: Under Age")
elif not is_citizen:
    print("Not Eligible: Not a Citizen")
else:
    print("Eligible to Vote")
```

This produces the same result as the nested version, with less indentation.


### JS
let score = 72;

if(score>90){
    console.log("Excellent");
}else if(score>80){
    console.log("Good");
}else if(score>70){
     console.log("Can do Better");
}else if(score>60){
     console.log("Need Coaching");
}else if(score>50){
     console.log("Underperforming");
}else{
    console.log("call parents");
}

let studentPerformanceStatus = (score > 90) ? "Excellent"
    : (score > 80) ? "Good"
        : (score > 70) ? "Can do Better"
            : (score > 60) ? "Need Coaching"
                : (score > 50) ? "Underperforming" : "call parents"

console.log(studentPerformanceStatus)


### TS
const score: number = 72;

if (score > 90) {
    console.log("Excellent");
} else if (score > 80) {
    console.log("Good");
} else if (score > 70) {
    console.log("Can do Better");
} else if (score > 60) {
    console.log("Need Coaching");
} else if (score > 50) {
    console.log("Underperforming");
} else {
    console.log("call parents");
}

const studentPerformanceStatus: string =
    score > 90 ? "Excellent"
    : score > 80 ? "Good"
    : score > 70 ? "Can do Better"
    : score > 60 ? "Need Coaching"
    : score > 50 ? "Underperforming"
    : "call parents";

console.log(studentPerformanceStatus);

### Python
score = 72

if score > 90:
    print("Excellent")
elif score > 80:
    print("Good")
elif score > 70:
    print("Can do Better")
elif score > 60:
    print("Need Coaching")
elif score > 50:
    print("Underperforming")
else:
    print("call parents")

student_performance_status = (
    "Excellent" if score > 90
    else "Good" if score > 80
    else "Can do Better" if score > 70
    else "Need Coaching" if score > 60
    else "Underperforming" if score > 50
    else "call parents"
)

print(student_performance_status)