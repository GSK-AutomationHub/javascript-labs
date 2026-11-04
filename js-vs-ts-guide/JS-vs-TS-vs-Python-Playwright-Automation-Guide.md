# JS vs TS vs Python: Programming Concepts Guide for Playwright / Selenium Automation

*Prepared for a senior QA professional moving from manual to automation. Each section is a side-by-side table: **JavaScript | TypeScript | Python**, with a simple example and a practical automation example.*

**How to use this guide:** Read one section, type every example yourself, then run it. Items marked ⭐ are heavily used in real frameworks and asked in interviews. Playwright snippets use the `page` object (Playwright Test for JS/TS, `pytest-playwright` for Python).

## 0. Big Picture: What to Master and in What Order

| Priority | Concept | Why it matters in automation | JS/TS | Python |
| --- | --- | --- | --- | --- |
| 1 ⭐ | Variables, types, operators | Test data, config, assertions | `let/const`, type annotations | dynamic variables, type hints |
| 2 ⭐ | Conditions, loops | Dynamic flows, data-driven tests | `if`, `for`, `for...of` | `if`, `for`, `while` |
| 3 ⭐ | Arrays/lists + methods | Handling table rows, lists of elements | `map/filter/find` | list + comprehensions |
| 4 ⭐ | Objects/dicts | Test data, API payloads, JSON | object literals | dict |
| 5 ⭐ | Functions | Reusable helpers, utilities | arrow, async | `def`, lambda |
| 6 ⭐⭐ | Async handling | Playwright JS/TS is fully async. Biggest beginner pain | `async/await`, Promise | sync API by default, asyncio optional |
| 7 ⭐ | OOP | Page Object Model, base classes | `class` | `class` |
| 8 ⭐ | Error handling | Retry logic, cleanup, diagnostics | `try/catch/finally` | `try/except/finally` |
| 9 ⭐ | Modules/imports | Framework structure | `import/export` | `import`, packages |
| 10 | File I/O | JSON/CSV test data, reports, env files | `fs` module | `open()`, `json`, `csv` |
| 11 | Language-specific power features | TS types, Python decorators/fixtures | interfaces, generics | decorators, context managers |

**Recommended order for parallel learning:** learn the concept in Python first (simplest syntax), then map to JS, then add TS types on top of JS. TypeScript is JavaScript plus types, so you do not learn a third language, you learn a type layer.

## 1. Variables and Data Types ⭐

| Aspect | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Declare | `let age = 30;` | `let age: number = 30;` | `age = 30` |
| Constant | `const URL = "https://app.com";` | `const URL: string = "https://app.com";` | `URL = "https://app.com"` (convention: UPPER\_CASE, not enforced) |
| Avoid | `var` (function scoped, hoisting bugs) | `var` | n/a |
| Typing | Dynamic | Static, checked at compile time | Dynamic (optional hints: `age: int = 30`) |
| Primitive types | `string, number, boolean, null, undefined, bigint, symbol` | same plus `any, unknown, never, void` | `str, int, float, bool, None, complex` |
| Check type | `typeof x` | `typeof x` | `type(x)` or `isinstance(x, int)` |
| Null/empty | `null` (intentional), `undefined` (not assigned) | same, `strictNullChecks` catches mistakes | `None` only |
| Naming style | `camelCase` | `camelCase`, `PascalCase` for types/classes | `snake_case`, `PascalCase` for classes |
| Template string | `` `Hello ${name}` `` | `` `Hello ${name}` `` | `f"Hello {name}"` |
| Multiple assign | `let [a, b] = [1, 2];` | `let [a, b]: number[] = [1, 2];` | `a, b = 1, 2` |
| Mutable vs immutable | `const` blocks reassignment, not mutation of objects | same, plus `readonly`, `as const` | tuples and strings are immutable, lists/dicts mutable |
| **Simple example** | `const name = "QA"; let count = 0;` | `const name: string = "QA"; let count: number = 0;` | `name = "QA"; count = 0` |
| **Practical** | `const BASE_URL = process.env.BASE_URL ?? "https://qa.app.com";` | `const BASE_URL: string = process.env.BASE_URL ?? "https://qa.app.com";` | `BASE_URL = os.getenv("BASE_URL", "https://qa.app.com")` |

**Must know:** `let` vs `const` vs `var` (scope + hoisting) is a top JS interview question. In Python, everything is an object, and `is` compares identity while `==` compares value.

## 2. Operators, Equality, Truthy/Falsy ⭐

| Aspect | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Arithmetic | `+ - * / % **` | same | `+ - * / % ** //` (floor division) |
| Strict equality | `===` and `!==` (always use) | same | `==` (no type coercion) |
| Loose equality | `==` coerces types (`"5" == 5` is true), avoid | same | n/a |
| Logical | `&&`, `\|\|`, `!` | same | `and`, `or`, `not` |
| Nullish coalescing | `a ?? b` (b only if a is null/undefined) | same | `a if a is not None else b` |
| Optional chaining | `user?.address?.city` | same | `user.get("address", {}).get("city")` |
| Falsy values | `false, 0, "", null, undefined, NaN` | same | `False, 0, "", None, [], {}, ()` (empty list/dict are falsy, empty array/object in JS are truthy) |
| Membership | `arr.includes(x)` | same | `x in lst` |
| Increment | `i++`, `i += 1` | same | `i += 1` (no `++`) |
| **Simple** | `5 === "5"` gives false | same | `5 == "5"` gives False |
| **Practical** | `expect(count ?? 0).toBeGreaterThan(0)` | same | `assert (count or 0) > 0` |

## 3. Conditions: if-else, nested if, ternary, switch ⭐

| Aspect | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| if / else if / else | `if (a) {} else if (b) {} else {}` | same | `if a:` / `elif b:` / `else:` (indentation defines the block) |
| Nested if | `if (a) { if (b) { ... } }` | same | `if a:` then indented `if b:` |
| Combined condition | `if (a && b)` | same | `if a and b:` |
| Ternary | `const r = pass ? "PASS" : "FAIL";` | `const r: string = pass ? "PASS" : "FAIL";` | `r = "PASS" if passed else "FAIL"` |
| switch | `switch (env) { case "qa": ...; break; default: ... }` | same, plus union types give exhaustive checks | `match env:` / `case "qa":` / `case _:` (Python 3.10+), or dict mapping |
| Fallthrough | Yes, needs `break` | Yes (compiler flag `noFallthroughCasesInSwitch`) | No fallthrough |
| Dict/object lookup alternative | `const url = urls[env];` | `urls[env]` with `Record<string,string>` | `url = urls.get(env)` |
| **Simple** | `if (age >= 18) { console.log("adult"); }` | same | `if age >= 18: print("adult")` |
| **Practical: pick environment URL** | `const url = env === "prod" ? PROD : QA;` | same with types | `url = PROD if env == "prod" else QA` |
| **Practical: conditional popup handling** | `if (await page.locator("#cookie").isVisible()) { await page.click("#accept"); }` | same | `if page.locator("#cookie").is_visible(): page.click("#accept")` |

**Interview note:** Python has no `switch` before 3.10, and many automation engineers use a dictionary lookup instead.

## 4. Loops ⭐

| Aspect | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Classic for | `for (let i = 0; i < 5; i++) {}` | same | `for i in range(5):` |
| Iterate values | `for (const x of arr) {}` | same | `for x in lst:` |
| Iterate keys | `for (const k in obj) {}` | same | `for k in d:` |
| Key and value | `Object.entries(obj)` | same | `for k, v in d.items():` |
| Index and value | `arr.entries()` or `forEach((x, i) => {})` | same | `for i, x in enumerate(lst):` |
| while | `while (cond) {}` | same | `while cond:` |
| do-while | `do {} while (cond);` | same | not available, use `while True:` + `break` |
| break / continue | yes | yes | yes, plus `for...else` |
| **Simple** | `for (const n of [1,2,3]) console.log(n);` | same | `for n in [1,2,3]: print(n)` |
| **Practical: read all rows of a table** | `const rows = await page.locator("tr").all(); for (const row of rows) { console.log(await row.innerText()); }` | same | `for row in page.locator("tr").all(): print(row.inner_text())` |
| **Practical: poll until ready** | `for (let i = 0; i < 10; i++) { if (await el.isVisible()) break; await page.waitForTimeout(500); }` | same | `for _ in range(10): if el.is_visible(): break; page.wait_for_timeout(500)` |

**Gotcha:** `forEach` does not wait for `await` inside it. In JS/TS automation use `for...of` when awaiting inside a loop.

## 5. Strings ⭐

| Operation | JavaScript / TypeScript | Python |
| --- | --- | --- |
| Length | `s.length` | `len(s)` |
| Upper / lower | `s.toUpperCase()` / `s.toLowerCase()` | `s.upper()` / `s.lower()` |
| Trim | `s.trim()` | `s.strip()` |
| Contains | `s.includes("abc")` | `"abc" in s` |
| Starts / ends | `s.startsWith("a")` / `s.endsWith("z")` | `s.startswith("a")` / `s.endswith("z")` |
| Split / join | `s.split(",")` / `arr.join("-")` | `s.split(",")` / `"-".join(lst)` |
| Replace | `s.replace("a","b")` (first only), `replaceAll` | `s.replace("a","b")` (all) |
| Substring | `s.slice(0, 3)` | `s[0:3]` |
| Regex | `/\d+/.test(s)`, `s.match(/\d+/)` | `re.search(r"\d+", s)` |
| Practical: parse price | `const price = parseFloat(text.replace("$", ""));` | `price = float(text.replace("$", ""))` |
| Practical: unique email | `` `qa_${Date.now()}@test.com` `` | `f"qa_{int(time.time())}@test.com"` |

## 6. Arrays / Lists and Important Methods ⭐

| Operation | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Create | `const a = [1, 2, 3];` | `const a: number[] = [1, 2, 3];` | `a = [1, 2, 3]` |
| Access | `a[0]`, `a.at(-1)` | same | `a[0]`, `a[-1]` |
| Add end | `a.push(4)` | same | `a.append(4)` |
| Remove end | `a.pop()` | same | `a.pop()` |
| Add / remove start | `a.unshift(0)` / `a.shift()` | same | `a.insert(0, 0)` / `a.pop(0)` |
| Length | `a.length` | same | `len(a)` |
| Transform each ⭐ | `a.map(x => x * 2)` | same | `[x * 2 for x in a]` |
| Filter ⭐ | `a.filter(x => x > 1)` | same | `[x for x in a if x > 1]` |
| Find first ⭐ | `a.find(x => x > 1)` | same | `next((x for x in a if x > 1), None)` |
| Any / all | `a.some(...)` / `a.every(...)` | same | `any(...)` / `all(...)` |
| Reduce / sum | `a.reduce((s, x) => s + x, 0)` | same | `sum(a)` or `functools.reduce` |
| Sort | `a.sort((x, y) => x - y)` (mutates, default sort is lexicographic) | same | `sorted(a)` (new list) or `a.sort()` |
| Reverse | `a.reverse()` | same | `a[::-1]` or `a.reverse()` |
| Slice | `a.slice(1, 3)` | same | `a[1:3]` |
| Copy / merge | `[...a, ...b]` | same | `a + b` or `[*a, *b]` |
| Unique | `[...new Set(a)]` | same | `list(set(a))` |
| Includes | `a.includes(2)` | same | `2 in a` |
| Flatten | `a.flat()` | same | `[y for x in a for y in x]` |
| Compare two lists | `JSON.stringify(a) === JSON.stringify(b)` or `expect(a).toEqual(b)` | same | `a == b` |
| **Simple** | `[1,2,3].map(x => x * 2)` gives `[2,4,6]` | same | `[x * 2 for x in [1,2,3]]` |
| **Practical: get texts of all products** | `const names = await page.locator(".product").allInnerTexts();` | same | `names = page.locator(".product").all_inner_texts()` |
| **Practical: verify sorted** | `expect(names).toEqual([...names].sort());` | same | `assert names == sorted(names)` |
| **Practical: prices above 100** | `prices.filter(p => p > 100)` | same | `[p for p in prices if p > 100]` |

**Gotcha:** JS `sort()` without a comparator sorts numbers as strings (`[10, 2, 1]` becomes `[1, 10, 2]`). Python also has **tuples** (immutable) and **sets** (unique); JS uses `Set` and `Map`.

## 7. Objects / Dictionaries ⭐

| Operation | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Create | `const u = { name: "A", age: 3 };` | `const u: { name: string; age: number } = {...};` | `u = {"name": "A", "age": 3}` |
| Read | `u.name`, `u["name"]` | same | `u["name"]`, `u.get("name", "default")` |
| Add / update | `u.email = "a@b.com"` | property must exist in the type | `u["email"] = "a@b.com"` |
| Delete | `delete u.age` | same | `del u["age"]` |
| Keys / values | `Object.keys(u)`, `Object.values(u)` | same | `u.keys()`, `u.values()` |
| Key exists | `"name" in u` | same | `"name" in u` |
| Merge | `{ ...a, ...b }` | same | `{**a, **b}` or `a \| b` (3.9+) |
| Destructure ⭐ | `const { name, age } = u;` | same | `name, age = u["name"], u["age"]` |
| JSON string | `JSON.stringify(u)` / `JSON.parse(s)` | same | `json.dumps(u)` / `json.loads(s)` |
| Deep copy | `structuredClone(u)` | same | `copy.deepcopy(u)` |
| Typed shape | n/a | `interface User { name: string; age: number }` | `TypedDict` or `dataclass` |
| **Simple** | `const car = { brand: "BMW" };` | same | `car = {"brand": "BMW"}` |
| **Practical: test data** | `const user = { email: "a@b.com", password: "Pass@123" }; await page.fill("#email", user.email);` | same with `interface User` | `user = {"email": "a@b.com", "password": "Pass@123"}; page.fill("#email", user["email"])` |
| **Practical: API payload** | `await request.post("/api/users", { data: user });` | same | `request.post("/api/users", data=user)` |

## 8. Functions and Their Types ⭐

| Type | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Declaration | `function add(a, b) { return a + b; }` | `function add(a: number, b: number): number {...}` | `def add(a, b): return a + b` |
| Function expression | `const add = function(a, b) {...};` | typed same way | n/a (use `def` or lambda) |
| Arrow function ⭐ | `const add = (a, b) => a + b;` | `const add = (a: number, b: number): number => a + b;` | `lambda a, b: a + b` (single expression only) |
| Default params | `function f(x = 5) {}` | same | `def f(x=5):` |
| Optional params | all optional by default | `function f(x?: number)` | use default `None` |
| Rest / variable args | `function f(...args) {}` | `function f(...args: number[])` | `def f(*args):` |
| Named args / kwargs | pass an object: `f({ a: 1 })` | typed object parameter | `def f(**kwargs):` and call `f(a=1)` |
| Return multiple | return array or object | return tuple/object type | `return a, b` (tuple) |
| Callback ⭐ | `arr.map(x => x * 2)` | same | `map(lambda x: x * 2, lst)` |
| Higher-order | function taking/returning function | typed function types: `(x: number) => number` | same concept |
| Closure | inner function remembers outer variables | same | same, use `nonlocal` to modify |
| IIFE | `(() => {...})();` | same | n/a |
| Async function ⭐ | `async function f() { await x; }` | `async function f(): Promise<void>` | `async def f():` (asyncio only) |
| Generator | `function* g() { yield 1; }` | same | `def g(): yield 1` |
| Decorator | not native (TS has experimental) | experimental `@decorator` | `@decorator` (core feature) |
| **Simple** | `const square = n => n * n;` | `const square = (n: number): number => n * n;` | `def square(n): return n * n` |
| **Practical: reusable login helper** | `async function login(page, u, p) { await page.fill("#user", u); await page.fill("#pass", p); await page.click("#login"); }` | `async function login(page: Page, u: string, p: string): Promise<void> {...}` | `def login(page, u, p): page.fill("#user", u); page.fill("#pass", p); page.click("#login")` |
| **Practical: retry helper** | `async function retry(fn, n = 3) { for (let i = 0; i < n; i++) { try { return await fn(); } catch (e) { if (i === n - 1) throw e; } } }` | add generic: `retry<T>(fn: () => Promise<T>, n = 3): Promise<T>` | `def retry(fn, n=3): for i in range(n): try: return fn() except Exception: if i == n - 1: raise` |

**Interview note:** arrow functions do not have their own `this`, which matters in classes and callbacks. Python's mutable default argument trap (`def f(x=[])`) is a classic question.

## 9. Async Handling: The Most Critical Difference ⭐⭐

| Aspect | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Default Playwright API | **Async only.** Every browser action returns a Promise | same | **Sync API** (`playwright.sync_api`) is simplest, async API (`async_api`) also exists |
| Keyword | `await` before every action | same | not needed in sync API |
| Promise states | pending, fulfilled, rejected | `Promise<T>` | `asyncio` Future/Task (async API only) |
| Run in parallel | `await Promise.all([a(), b()])` | same, typed result tuple | `await asyncio.gather(a(), b())` |
| Race | `Promise.race([...])` | same | `asyncio.wait(..., return_when=FIRST_COMPLETED)` |
| Error handling | `try { await x } catch {}` or `.catch()` | same | `try: await x except:` |
| Sleep (avoid in tests) | `await page.waitForTimeout(1000)` | same | `page.wait_for_timeout(1000)` or `time.sleep(1)` |
| **Simple** | `const r = await fetchData();` | `const r: Data = await fetchData();` | `r = fetch_data()` (sync) |
| **Practical: click and wait for navigation/response** | `await Promise.all([page.waitForResponse("**/api/login"), page.click("#login")]);` | same | `with page.expect_response("**/api/login"): page.click("#login")` |
| **Practical: forgot await bug** | `page.click("#a"); expect(el).toBeVisible();` runs before click finishes, flaky test | same (lint rule `no-floating-promises` catches it) | not applicable in sync API |

**Must master:** top 3 JS automation bugs are (1) missing `await`, (2) `forEach` with `await`, (3) hard `waitForTimeout` instead of auto-waiting assertions like `await expect(locator).toBeVisible()`.

## 10. OOP: The 4 Pillars + Page Object Model ⭐

| Concept | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Class | `class User { constructor(n) { this.name = n; } }` | `class User { constructor(public name: string) {} }` | `class User:` + `def __init__(self, n): self.name = n` |
| Instance | `new User("A")` | same | `User("A")` (no `new`) |
| Self reference | `this` | `this` | `self` (explicit first param) |
| Access modifiers | `#private` (real private), convention `_x` | `public`, `private`, `protected`, `readonly` | convention `_protected`, `__private` (name mangling) |
| Static | `static count = 0;` | same | `@staticmethod`, `@classmethod` |
| Getter / setter | `get name() {}` | same | `@property` |
| **1. Encapsulation** | private fields + methods | `private locator: Locator` | `self._locator` |
| **2. Inheritance** | `class Admin extends User { constructor(){ super(); } }` | same | `class Admin(User):` + `super().__init__()` |
| **3. Polymorphism** | override method in child class | same, plus `override` keyword | same, duck typing |
| **4. Abstraction** | no native abstract | `abstract class`, `interface` | `abc.ABC` + `@abstractmethod` |
| Multiple inheritance | no (use mixins) | no (use interfaces, mixins) | yes |
| Interface | n/a | `interface Pageable { open(): Promise<void> }` | `Protocol` or ABC |
| **Simple** | `class Dog extends Animal { speak() { return "Woof"; } }` | same | `class Dog(Animal): def speak(self): return "Woof"` |

**Practical: Page Object Model (BasePage + LoginPage)**

| Part | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Base class | `class BasePage { constructor(page) { this.page = page; } async open(path) { await this.page.goto(path); } }` | `class BasePage { constructor(protected page: Page) {} async open(path: string): Promise<void> { await this.page.goto(path); } }` | `class BasePage: def __init__(self, page): self.page = page` then `def open(self, path): self.page.goto(path)` |
| Child class | `class LoginPage extends BasePage { constructor(page) { super(page); this.user = page.locator("#user"); this.pass = page.locator("#pass"); } async login(u, p) { await this.user.fill(u); await this.pass.fill(p); await this.page.click("#login"); } }` | `class LoginPage extends BasePage { readonly user: Locator; readonly pass: Locator; constructor(page: Page) { super(page); this.user = page.locator("#user"); this.pass = page.locator("#pass"); } async login(u: string, p: string): Promise<void> {...} }` | `class LoginPage(BasePage): def __init__(self, page): super().__init__(page); self.user = page.locator("#user"); self.pass_ = page.locator("#pass")` and `def login(self, u, p): self.user.fill(u); self.pass_.fill(p); self.page.click("#login")` |
| Use in test | `const login = new LoginPage(page); await login.login("a", "b");` | same | `login = LoginPage(page); login.login("a", "b")` |

**Where each pillar appears in a framework:** Encapsulation hides locators inside page classes, Inheritance shares `BasePage` helpers, Polymorphism lets different pages implement the same `open()`, Abstraction exposes `login()` rather than raw clicks.

## 11. Error Handling ⭐

| Aspect | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Basic | `try { } catch (e) { } finally { }` | same, `e` is `unknown`, narrow with `e instanceof Error` | `try: ... except Exception as e: ... finally: ...` |
| Specific error | `if (e instanceof TypeError)` | same | `except ValueError:` (multiple except blocks) |
| Throw | `throw new Error("msg");` | same | `raise ValueError("msg")` |
| Custom error | `class AppError extends Error {}` | same | `class AppError(Exception): pass` |
| Else block | n/a | n/a | `else:` runs when no exception |
| Playwright timeout error | `catch (e) { if (e instanceof errors.TimeoutError) {} }` | same | `except PlaywrightTimeoutError:` |
| Assertion | `expect(a).toBe(b)` | same | `assert a == b, "message"` |
| **Simple** | `try { JSON.parse("bad"); } catch (e) { console.log("invalid"); }` | same | `try: int("abc") except ValueError: print("invalid")` |
| **Practical: optional element** | `try { await page.locator("#banner").click({ timeout: 2000 }); } catch { /* not shown */ }` | same | `try: page.locator("#banner").click(timeout=2000) except PlaywrightTimeoutError: pass` |
| **Practical: screenshot on failure + cleanup** | `try { await run(); } catch (e) { await page.screenshot({ path: "fail.png" }); throw e; } finally { await context.close(); }` | same | `try: run() except Exception: page.screenshot(path="fail.png"); raise finally: context.close()` |

**Best practice:** never swallow exceptions silently in real checks. Re-throw after logging so the test fails honestly.

## 12. Imports, Exports and Project Structure ⭐

| Aspect | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Import whole | `const fs = require("fs");` (CommonJS) or `import fs from "fs";` (ES modules) | `import fs from "fs";` | `import os` |
| Named import | `import { test, expect } from "@playwright/test";` | same | `from playwright.sync_api import Page, expect` |
| Default export | `export default LoginPage;` then `import LoginPage from "./LoginPage";` | same | not applicable, each file is a module |
| Named export | `export class LoginPage {}` | same | any class/function is importable |
| Alias | `import { a as b } from "./x";` | same | `import numpy as np` |
| Import type only | n/a | `import type { User } from "./types";` | `from typing import TYPE_CHECKING` |
| Packages installed with | `npm install` + `package.json` | same + `tsconfig.json` | `pip install` + `requirements.txt` |
| Config files | `playwright.config.js` | `playwright.config.ts` | `pytest.ini` / `conftest.py` |
| Local import | `import { LoginPage } from "../pages/LoginPage";` | same | `from pages.login_page import LoginPage` (needs `__init__.py` or proper package) |
| **Practical folder layout** | `tests/ pages/ utils/ data/` | same + `types/` | `tests/ pages/ utils/ data/ conftest.py` |

**Gotcha:** CommonJS (`require`) versus ES modules (`import`) confusion is common in JS. In Python, circular imports between page classes are a classic error.

## 13. File I/O: JSON, CSV, Text, Env ⭐

| Task | JavaScript / TypeScript (Node) | Python |
| --- | --- | --- |
| Read text | `import fs from "fs"; const t = fs.readFileSync("a.txt", "utf-8");` | `with open("a.txt") as f: t = f.read()` |
| Write text | `fs.writeFileSync("a.txt", "hello");` | `with open("a.txt", "w") as f: f.write("hello")` |
| Append | `fs.appendFileSync("a.txt", "line\n");` | `open("a.txt", "a")` |
| Read JSON ⭐ | `const d = JSON.parse(fs.readFileSync("d.json", "utf-8"));` or `import d from "./d.json";` (needs `resolveJsonModule` in TS) | `import json` then `with open("d.json") as f: d = json.load(f)` |
| Write JSON | `fs.writeFileSync("o.json", JSON.stringify(d, null, 2));` | `json.dump(d, f, indent=2)` |
| Read CSV | `csv-parse` package (`parse(data, { columns: true })`) | `csv.DictReader(f)` (built in) |
| Path handling | `path.join(__dirname, "data", "a.json")` | `Path(__file__).parent / "data" / "a.json"` (`pathlib`) |
| File exists | `fs.existsSync(p)` | `Path(p).exists()` |
| Env variables | `process.env.USER`, `dotenv` package | `os.getenv("USER")`, `python-dotenv` |
| Async version | `await fs.promises.readFile(...)` | `aiofiles` (rarely needed) |
| Auto close | not needed for sync calls | `with` block closes file automatically ⭐ |
| **Simple** | `fs.writeFileSync("x.txt", "hi");` | `open("x.txt", "w").write("hi")` |
| **Practical: data-driven login tests from JSON** | `const users = JSON.parse(fs.readFileSync("data/users.json", "utf-8")); for (const u of users) { test(`login ${u.name}`, async ({ page }) => { /* use u */ }); }` | `@pytest.mark.parametrize("u", json.load(open("data/users.json")))` then `def test_login(page, u): ...` |
| **Practical: save downloaded report** | `const dl = await downloadPromise; await dl.saveAs("out/report.pdf");` | `with page.expect_download() as d: page.click("#export")` then `d.value.save_as("out/report.pdf")` |

## 14. TypeScript-Specific Concepts (Must Know for Interviews)

| Concept | Syntax | Why it matters in automation |
| --- | --- | --- |
| Type annotation | `let n: number = 5;` | catches typos at compile time |
| Interface ⭐ | `interface User { email: string; role?: string }` | shape of test data and API responses |
| Type alias | `type Env = "qa" \| "stage" \| "prod";` | restrict config values |
| Union type | `let id: string \| number;` | flexible inputs |
| Literal types | `let status: "pass" \| "fail";` | safe constants |
| Enum | `enum Role { Admin, User }` | roles, statuses |
| Generics ⭐ | `function first<T>(a: T[]): T { return a[0]; }` | reusable typed helpers |
| `any` vs `unknown` | `unknown` forces a check before use | avoid `any` in good frameworks |
| Optional / non-null | `user?.name`, `el!` (assert not null) | strict null safety |
| `readonly` | `readonly page: Page` | locators that should not change |
| Type assertion | `data as User` | typing API response |
| `Promise<T>` | `async f(): Promise<string>` | typing async helpers |
| `Partial / Pick / Omit / Record` | `Partial<User>`, `Record<string, string>` | flexible test data builders |
| `tsconfig.json` | `"strict": true` | enable strict mode in framework |
| Playwright types | `import { Page, Locator, APIRequestContext } from "@playwright/test";` | typed page objects |
| **Practical: typed test data** | `const admin: User = { email: "a@b.com", role: "admin" };` | autocomplete + compile-time errors |

## 15. Python-Specific Concepts (Must Know for Interviews)

| Concept | Syntax | Why it matters in automation |
| --- | --- | --- |
| Indentation | 4 spaces define blocks | syntax errors if wrong |
| List comprehension ⭐ | `[t.strip() for t in texts if t]` | compact data transformation |
| Dict comprehension | `{k: v for k, v in pairs}` | build lookups |
| `*args`, `**kwargs` ⭐ | `def f(*args, **kwargs):` | flexible helpers and wrappers |
| Context manager ⭐ | `with open(...) as f:` / `with page.expect_response(...) as r:` | auto cleanup |
| Decorators ⭐ | `@pytest.mark.smoke`, `@pytest.fixture` | tagging, setup/teardown |
| Fixtures ⭐⭐ | `@pytest.fixture def login_page(page): return LoginPage(page)` | dependency injection, replaces JS hooks |
| `conftest.py` | shared fixtures file | central framework setup |
| `parametrize` | `@pytest.mark.parametrize("a,b", [(1,2),(3,4)])` | data-driven tests |
| Generators | `yield` | lazy data, fixtures with teardown |
| `dataclass` | `@dataclass class User: email: str` | typed test data |
| Type hints | `def f(x: int) -> str:` | readability, IDE help |
| Virtual environment | `python -m venv venv` | isolate dependencies |
| `if __name__ == "__main__":` | run file as script | common interview question |
| `is` vs `==` | identity vs value | classic trap with `None` (use `is None`) |
| Mutable default trap | `def f(x=[])` | shared state bug |
| `pathlib`, `logging`, `datetime` | stdlib modules | paths, logs, timestamps |

## 16. Test Runner Mapping (Hooks, Grouping, Assertions)

| Need | Playwright Test (JS/TS) | pytest-playwright (Python) |
| --- | --- | --- |
| Test | `test("name", async ({ page }) => {})` | `def test_name(page):` |
| Group | `test.describe("suite", () => {})` | class `TestSuite:` or module |
| Before / after each | `test.beforeEach`, `test.afterEach` | `@pytest.fixture` with `yield` |
| Before / after all | `test.beforeAll`, `test.afterAll` | fixture `scope="session"` or `"module"` |
| Skip | `test.skip(cond, "why")` | `@pytest.mark.skip` / `skipif` |
| Tag | `test("x @smoke", ...)` and `--grep @smoke` | `@pytest.mark.smoke` and `-m smoke` |
| Assertion with auto-wait | `await expect(locator).toHaveText("Hi")` | `expect(locator).to_have_text("Hi")` |
| Plain assertion | `expect(5).toBe(5)` | `assert 5 == 5` |
| Run all | `npx playwright test` | `pytest` |
| Config | `playwright.config.ts` | `pytest.ini`, `conftest.py` |

## 17. Capstone Mini Project: Login Test in All Three

| Step | JavaScript | TypeScript | Python |
| --- | --- | --- | --- |
| Setup | `npm init playwright@latest` | same, choose TypeScript | `pip install pytest-playwright` then `playwright install` |
| Test data | `data/user.json` read with `fs` | `interface User`, typed JSON | `data/user.json` read with `json` |
| Page object | `pages/LoginPage.js` class | `pages/LoginPage.ts` with typed locators | `pages/login_page.py` class |
| Test file | `tests/login.spec.js` | `tests/login.spec.ts` | `tests/test_login.py` |
| Core test | `const lp = new LoginPage(page); await lp.open(); await lp.login(u.email, u.password); await expect(page).toHaveURL(/dashboard/);` | same | `lp = LoginPage(page); lp.open(); lp.login(u["email"], u["password"]); expect(page).to_have_url(re.compile("dashboard"))` |
| Negative case | wrong password then `await expect(page.locator(".error")).toBeVisible();` | same | `expect(page.locator(".error")).to_be_visible()` |
| Run | `npx playwright test` | same | `pytest --headed` |
| Report | `npx playwright show-report` | same | `pytest --html=report.html` (with plugin) |

**Stretch goals:** add data-driven users from JSON, an API login helper to skip UI login, a `BasePage`, screenshot on failure, and env-based config (`qa`, `stage`).

## 18. Interview Questions You Should Be Able to Answer

| Topic | Question | Key answer points |
| --- | --- | --- |
| JS | `var` vs `let` vs `const`? | scope, hoisting, reassignment |
| JS | `==` vs `===`? | type coercion, always use strict |
| JS | What is a Promise and `async/await`? | async handling, why Playwright needs `await` |
| JS | `map` vs `forEach`? | map returns new array, forEach does not and ignores await |
| JS | What is a closure? | inner function retains outer scope |
| JS | `null` vs `undefined`? | intentional empty vs unassigned |
| TS | Why TypeScript over JavaScript? | type safety, IDE support, fewer runtime bugs |
| TS | Interface vs type alias? | both describe shapes, interfaces can be extended and merged |
| TS | `any` vs `unknown`? | `unknown` requires narrowing |
| Python | List vs tuple vs set vs dict? | mutability, ordering, uniqueness, key-value |
| Python | What are decorators and fixtures? | wrapping functions, pytest setup/teardown |
| Python | `*args` vs `**kwargs`? | positional vs keyword variable arguments |
| Python | Shallow vs deep copy? | nested object sharing |
| OOP | Explain 4 pillars with your framework | POM examples from section 10 |
| OOP | Abstract class vs interface? | partial implementation vs pure contract |
| Error handling | Where do you use try/catch in automation? | optional elements, cleanup, diagnostics, never hide failures |
| Framework | Why Page Object Model? | maintainability, reuse, single place for locators |
| Framework | How do you handle flaky tests? | auto-wait, proper locators, no hard sleeps, retries as last resort |
| Framework | How do you do data-driven testing? | JSON/CSV + parametrize / loop-generated tests |

## 19. Suggested 4-Week Learning Plan

| Week | Focus | Deliverable |
| --- | --- | --- |
| 1 | Sections 1 to 5: variables, conditions, loops, strings | 20 small exercises in each language |
| 2 | Sections 6 to 9: arrays, objects, functions, async | Scripts that read table data from a demo site and validate sorting |
| 3 | Sections 10 to 13: OOP, errors, imports, file I/O | Page Object framework with JSON test data |
| 4 | Sections 14 to 18: TS/Python specifics, runner, capstone | Complete login + search + cart suite, plus interview practice |

**Pro tips:** practice on sites like saucedemo.com and the Playwright demo apps, always read the Playwright docs side by side in your chosen language tab, turn on TypeScript `strict` mode from day one, use ESLint (JS/TS) and `ruff` or `flake8` (Python) to catch mistakes early, and commit every exercise to Git so you build a portfolio.
