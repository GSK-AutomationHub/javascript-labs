# Student Grade: JavaScript to TypeScript & Python

## Original JavaScript

```javascript
function studentGrade(grade){

    switch(grade.toUpperCase()){
        case 'A' : return "Excellent"
        break;
        case 'B' : return "Good"
        break;
        case 'C' : return "Can do Better"
        break;
        case 'D' : return "Underperforming"
        default : return "Call Parents"
    }
}

console.log(studentGrade('c'))

let score = 84

let gradeLoop = [
    {thershold:90, message:'Grade A - Excellent'},
    {thershold:80, message:'Grade B - Good'},
    {thershold:70, message:'Grade C - Can do Better'},
    {thershold:60, message:'Grade D - Need Coaching'},
    {thershold:50, message:'Grade E - Underperforming'},
    {thershold:40, message:'Grade F - call parents'}
]

let match = gradeLoop.find(rule => score>rule.thershold)
let gradeMessage = match ? match.message : 'call parents'
console.log(gradeMessage)


```

## TypeScript

```typescript
function studentGrade(grade: string): string {
  switch (grade.toUpperCase()) {
    case "A":
      return "Excellent";
    case "B":
      return "Good";
    case "C":
      return "Can do Better";
    case "D":
      return "Underperforming";
    default:
      return "Call Parents";
  }
}

console.log(studentGrade("c"));

interface GradeRule {
  thershold: number;
  message: string;
}

const score: number = 84;

const gradeLoop: GradeRule[] = [
  { thershold: 90, message: "Grade A - Excellent" },
  { thershold: 80, message: "Grade B - Good" },
  { thershold: 70, message: "Grade C - Can do Better" },
  { thershold: 60, message: "Grade D - Need Coaching" },
  { thershold: 50, message: "Grade E - Underperforming" },
  { thershold: 40, message: "Grade F - call parents" },
];

const match: GradeRule | undefined = gradeLoop.find(
  (rule) => score > rule.thershold
);
const gradeMessage: string = match ? match.message : "call parents";
console.log(gradeMessage);
```

## Python

score = 84

gradeLoop= [
  { thershold: 90, message: "Grade A - Excellent" },
  { thershold: 80, message: "Grade B - Good" },
  { thershold: 70, message: "Grade C - Can do Better" },
  { thershold: 60, message: "Grade D - Need Coaching" },
  { thershold: 50, message: "Grade E - Underperforming" },
  { thershold: 40, message: "Grade F - call parents" },
]

message = next((d["message"] for d in grade_loop if score >= d["thershold"]), "Grade F - call parents")
print(message)


## Python (simplified)

```python
def student_grade(grade: str) -> str:
    grades = {
        "A": "Excellent",
        "B": "Good",
        "C": "Can do Better",
        "D": "Underperforming",
    }
    return grades.get(grade.upper(), "Call Parents")


print(student_grade("c"))

score = 84

grade_rules = [
    (90, "Grade A - Excellent"),
    (80, "Grade B - Good"),
    (70, "Grade C - Can do Better"),
    (60, "Grade D - Need Coaching"),
    (50, "Grade E - Underperforming"),
    (40, "Grade F - call parents"),
]

grade_message = next(
    (message for threshold, message in grade_rules if score > threshold),
    "call parents",
)
print(grade_message)
```

## Notes

- **Removed `break` statements:** In the original, the `break` after each `return` was unreachable, so it was dropped in both conversions.
- **Python `switch`:** Replaced with a dictionary lookup, which works on any Python version. Python 3.10+ also supports `match`/`case` if you prefer that style:

  ```python
  def student_grade(grade: str) -> str:
      match grade.upper():
          case "A":
              return "Excellent"
          case "B":
              return "Good"
          case "C":
              return "Can do Better"
          case "D":
              return "Underperforming"
          case _:
              return "Call Parents"
  ```

- **Python grade rules:** Tuples replace the list of dicts, and `next()` with a default replaces the `if/else`. This also removes the `thershold` typo from the Python version.
- **Possible bug in the original:** `score > threshold` uses strict `>`, so a score of exactly 90 gets "Grade B" instead of "Grade A". Use `>=` if that isn't intended. The behavior was kept as is in all versions.
- **Typo:** `thershold` should probably be `threshold`. It is kept in the TypeScript version to match the source.
