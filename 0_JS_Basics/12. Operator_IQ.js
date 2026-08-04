// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ==   → Loose check we will check either value or data type.
//   ===  → strict equality (no coercion, what you usually want)
//   ===  → Strict check we will check for both the datatype and value



console.log(5 == "5"); // true (type coercion) lose couple comparsion , value
console.log(5 === "5"); // false (strict equality) stict not allowed - valeu + datatype both
console.log(3 == "4"); // false (type coercion)
console.log(5 != "5"); // false (type coercion) lose -> datatype or value // ! -> not char
console.log(5 !== "5"); // true (strict inequality)
// console.log(5 !=== "5"); This dosn't


// ---------- 2. null and undefined ----------
console.log(null == undefined);   // true   → special rule in ==
console.log(null === undefined);  // false  → different types
console.log(null == 0);           // false  → null only == undefined/null
console.log(null >= 0);           // true   → >= coerces null to 0  (gotcha!)
console.log(null > 0);            // false
console.log(null == 0 || null > 0); // false … but null >= 0 is true


// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log( 0 == false ); // true (type coercion)
console.log( 0 === false ); // false (strict equality)
console.log("" == 0);        // true   → "" coerced to Number → 0
console.log("0" == 0);       // true   → "0" coerced to Number → 0
console.log("" == "0");      // false  → both strings, compared as-is

// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false

console.log("NaN is NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true