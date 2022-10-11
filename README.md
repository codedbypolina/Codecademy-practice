# Codecademy-practice
### 📝 Description:

To restore and strengthen my knowledge in the fundamentals of JavaScript, I enrolled in [Codecademy JavaScript course](https://www.codecademy.com/learn/introduction-to-javascript). In this repository, I upload every project I am working on during this course to keep track of my learning journey.

### ✏️ Syllabus and my progress:
- [X] Data types, built-in methods, and variables
- [X] Conditionals
- [ ] Functions
- [ ] Scope
- [ ] Arrays
- [ ] Loops
- [ ] Iterators
- [ ] Objects

### 💪🏼 Progress:

In this section I am going to share my progress, thoughts and challenges throughout the course.

#### ✓  Data types, built-in methods, and variables
- This introduction to JS was very easy to go through since I already have a good idea of these concepts
- It was interesting to learn that `.` is an operator itself, known as <em>dot operator</em>
- I wasn't aware of <em>symbol</em> data type that is used in more complex coding

#### ✓  Conditionals
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
Instead of writing the following code👇

```
let username = '';
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
```
You can shorten it by using short-circuit evaluation 👇

```
let username = '';
let defaultName = username || 'Stranger';
```
</details>

<details>
 <summary>Ternary Operator</summary>
Instead of writing the following code👇

```
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
```
You can shorten it by using ternary operators 👇

```
let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
```
</details>

#### ✓  Functions
- I was introduced to `Arrow Functions` and `Concise Body` for the first time. I've seen it sometimes in the tutorials as well as someone's code, but was always confused. It turned out to be pretty simple to understand and use, I just need to practice it more often to get more comfortable with reading and writing it.
<details>
 <summary>Arrow Functions</summary>
Instead of writing the following code👇

```
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
```
You can shorten it by using arrow function 👇

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
Code example from MDN, breaking down step by step each technique👇

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

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```
</details>
