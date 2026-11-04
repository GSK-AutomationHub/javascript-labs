# JavaScript vs TypeScript vs Python: 20 Common Snippets

**Original request:** convert the JavaScript snippets below to equivalent TypeScript and Python.

Full runnable versions: `snippets.ts` (TypeScript) and `snippets.py` (Python).

---

## Side-by-Side Comparison

| # | Task | JavaScript | TypeScript | Python | Notes |
|---|------|-----------|-----------|--------|-------|
| 1 | Unique values from array | `[...new Set(array)]` | `[...new Set(array)]` | `list(dict.fromkeys(array))` | Python `set()` loses order; `dict.fromkeys` keeps insertion order |
| 2 | Number to string | `num + ''`<br>`String(num)`<br>`toString(num)` | `num + ""`<br>`String(num)`<br>`num.toString()` | `str(num)`<br>`f"{num}"` | Bare `toString(num)` in JS does not convert the number. In JS `"32" + 10` gives `"3210"`; Python needs `str(10)` |
| 3 | Float to int | `parseInt(floatNum)` | `Math.trunc(floatNum)` | `int(floatNum)` | TS `parseInt` only accepts strings. `3.76` becomes `3` in all three |
| 4 | Check if value is a number | `typeof value === 'number' && !isNaN(value)` | `typeof value === "number" && !Number.isNaN(value)` | `isinstance(value, (int, float)) and not isinstance(value, bool) and not math.isnan(value)` | In Python `bool` is a subclass of `int`, so exclude it. Type `value` as `unknown` in TS |
| 5 | Swap two variables | `[a, b] = [b, a]` | `[a, b] = [b, a]` | `a, b = b, a` | Python needs no brackets |
| 6 | Object has property | `person.hasOwnProperty('address')` | `Object.hasOwn(person, "address")` | `"address" in person` | `Object.hasOwn` needs an ES2022 target |
| 7 | Remove falsy values | `arr.filter(Boolean)` | `arr.filter(Boolean)` | `[v for v in values if v and v == v]` | `NaN` is truthy in Python, so `v == v` drops it. Use `None` for `null`/`undefined` |
| 8 | Upper / lower case | `str.toUpperCase()`<br>`str.toLowerCase()` | `str.toUpperCase()`<br>`str.toLowerCase()` | `s.upper()`<br>`s.lower()` | |
| 9 | Array contains value | `arr.includes('javascript')` | `arr.includes("javascript")` | `"javascript" in lang` | |
| 10 | Array is empty | `arr.length === 0` | `arr.length === 0` | `not arr` or `len(arr) == 0` | Empty list is falsy in Python |
| 11 | Random number in range | `Math.floor(Math.random() * (max - min + 1)) + min` | `Math.floor(Math.random() * (max - min + 1)) + min` | `random.randint(min_val, max_val)` | Both ends inclusive. Avoid naming Python variables `min`/`max` (they shadow built-ins) |
| 12 | String to number | `parseFloat(strNumber)` | `parseFloat(strNumber)` | `float(str_number)` | `"32.0"` becomes `32` in JS/TS and `32.0` in Python |
| 13 | Join array into string | `arr.join(' ')` | `arr.join(" ")` | `" ".join(words)` | Python calls `join` on the separator, not the list |
| 14 | Get object property | `user['name']`<br>`user.name` | `user["name"]`<br>`user.name` | `user["name"]`<br>`user.get("name")` | `user["x"]` raises `KeyError` if missing; `.get()` returns `None` |
| 15 | Clone array / object | `[...arr]`<br>`{ ...obj }` | `[...arr]`<br>`{ ...obj }` | `[*arr]` or `arr.copy()`<br>`{**obj}` or `obj.copy()` | All are shallow copies |
| 16 | Object to array | `Object.keys(obj)`<br>`Object.values(obj)`<br>`Object.entries(obj)` | `Object.keys(obj)`<br>`Object.values(obj)`<br>`Object.entries(obj)` | `list(d.keys())`<br>`list(d.values())`<br>`list(d.items())` | Python `items()` gives tuples; JS `entries()` gives 2-element arrays |
| 17 | Current date and time | `new Date().toLocaleString()` | `new Date().toLocaleString()` | `datetime.now().strftime("%m/%d/%Y, %I:%M:%S %p")` | Python needs `from datetime import datetime` |
| 18 | Variable is defined | `typeof i === 'undefined'` | `typeof i === "undefined"` | `i is None` | Python has no `undefined`; initialise to `None`. Use `"i" in locals()` to test if a name exists |
| 19 | Truncate array | `arr.length = 3` | `arr.length = 3` | `del arr[3:]` | In-place in all three |
| 20 | Last item in array | `arr.slice(-1)`<br>`arr.at(-1)` | `arr.slice(-1)`<br>`arr.at(-1)` | `arr[-1:]`<br>`arr[-1]` | `slice(-1)` / `[-1:]` return a list; `at(-1)` / `[-1]` return the element |

---

## Key Differences at a Glance

| Area | JavaScript | TypeScript | Python |
|------|-----------|-----------|--------|
| Typing | Dynamic | Static (compile-time) | Dynamic (optional hints) |
| Missing value | `null`, `undefined` | `null`, `undefined`, optional `?` | `None` only |
| Number types | Single `number` | Single `number` | `int`, `float` (separate) |
| String + number | Auto-coerces (`"3" + 1` is `"31"`) | Same, but type-checker may warn | `TypeError`; convert explicitly |
| Falsy values | `false, 0, "", null, undefined, NaN` | Same | `False, 0, 0.0, "", None, [], {}` (`NaN` is truthy) |
| Naming convention | `camelCase` | `camelCase` | `snake_case` |
| Run command | `node file.js` | `npx tsx file.ts` | `python file.py` |

---

## Source Files

- `snippets.ts`: TypeScript with explicit types and interfaces
- `snippets.py`: Python with idiomatic equivalents
