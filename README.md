# Codecademy-practice
### π Description:

To restore and strengthen my knowledge in the fundamentals of JavaScript, I enrolled in [Codecademy JavaScript course](https://www.codecademy.com/learn/introduction-to-javascript). In this repository, I upload every project I am working on during this course to keep track of my learning journey.

### βοΈ Syllabus and my progress:
- [X] Data types, built-in methods, and variables
- [X] Conditionals
- [X] Functions
- [X] Scope
- [X] Arrays
- [X] Loops
- [ ] Iterators
- [ ] Objects

### πͺπΌ Progress:

In this section I am going to share my progress, thoughts and challenges throughout the course.

#### β  Data types, built-in methods, and variables
- This introduction to JS was very easy to go through since I already have a good idea of these concepts
- It was interesting to learn that `.` is an operator itself, known as <em>dot operator</em>
- I wasn't aware of <em>symbol</em> data type that is used in more complex coding

#### β  Conditionals
- This section talked about the basics of conditionals, such as if statements, if...else, comparison and logical operators and the switch statement
- There were several concepts I wasn't aware of prior this section, such as `Truthy/Falsy` values, `Short-circuit evaluation`, and `Ternary Operators`. It was especially interesting to learn about Short-circuit evaluation concept and Ternary Operators, since both of them are a great way to shorten your code and thus improve the program. 

<details>
 <summary>The list of falsy values:</summary>
 
- `0`
- Empty strings like `""` or `''`
- `null` (represents no value at all)
- `undefined`(declared variable lacks a value)
- `NaN`

 </details>
<details>
 <summary>Short-circuit evaluation</summary>
Instead of writing the following codeπ

```
let username = '';
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
```
You can shorten it by using short-circuit evaluation π

```
let username = '';
let defaultName = username || 'Stranger';
```
</details>

<details>
 <summary>Ternary Operator</summary>
Instead of writing the following codeπ

```
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
```
You can shorten it by using ternary operators π

```
let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
```
</details>

#### β  Functions
- I was introduced to `Arrow Functions` and `Concise Body` for the first time. I've seen it sometimes in the tutorials as well as someone's code, but was always confused. It turned out to be pretty simple to understand and use, I just need to practice it more often to get more comfortable with reading and writing it.
<details>
 <summary>Arrow Functions</summary>
Instead of writing the following codeπ

```
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
```
You can shorten it by using arrow function π

```
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
```
</details>

<details>
 <summary>Concise Body</summary>
Code example from MDN, breaking down step by step each techniqueπ

```
// Traditional Anonymous Function
(function (a) {
  return a + 100;
});

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" β the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```
</details>

#### β  Scope
- This section reconfirmed my existing knowledge of avoiding scope pollution by aiming to assign variables locally, not globally and to not reuse variable names within the global and local scopes.
<details>
 <summary>Benefits of Practicing Good Scoping</summary>
 
- It will make your code more legible since the blocks will organize your code into discrete sections.
- It makes your code more understandable
- Itβs easier to maintain your code, since your code will be modular.
- It will save memory in your code because it will cease to exist after the block finishes running.

</details>

#### β  Arrays
- When we use `const` to declare an array, elements in an array remain mutable - we can still change the contents of a const array, but cannot reassign a new array or a different value.
- While I heard of nested arrays, I haven't worked with them yet, so it was a nice to learn that to access elements in nested arrays chain indices using bracket notation. Example:
```
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```

#### β  Loops
- Loops used to be the hardest concept for me to learn, but after taking a course on JavaScript, Python and C, I am much more confident with loops and other foundations of programming languages. Thus it was very easy to go through this section
- I hardly practiced `do...while` loops, and wasn't sure when it would be appropriate to use this loop over `while` loop. This course clarified it for me! To sum it up, `do...while` loops will run the code at least once no matter what and it will check the stopping condition only after the first execution.
- I was also introduced to `break` for the first time in loops.

#### β  Higher-Order Functions
- Probably the most useful section so far as it teaches me of the concept I didn't know about before. such as:
- Functions are <em>first class objects</em> => JS functions can have properties and methods.
- <em>A higher-order function</em> is a function that either accepts functions as parameters, returns a function, or both. Functions that get passed in as parameters <em>callback functions</em>. Callback functions get invoked during the execution of the higher-order function.
- A function with no name is called an <em>anonymous function</em>.

### π Notes:
- Learn the concept of [Mutability in JS](https://www.youtube.com/watch?v=pslr6SWXFjQ)
