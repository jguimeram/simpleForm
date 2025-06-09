# Simple Form with HTML, CSS, and TypeScript

This project demonstrates how to build a simple and accessible HTML form with client-side validation using **TypeScript**, **HTML5**, and **CSS3**, without the use of any JavaScript frameworks or libraries. Styles has been generated with ChatGPT since I'm not too good with design. My goal is to manage data properly.

## 🧾 Project Overview

The form includes basic fields such as:

- Full Name (text input)
- Email (email input)
- Password (password input)
- Terms and Conditions (checkbox)
- Submit Button

## TODO LIST

[] Generate options of the select
[] Create validation rules
[] Test validations with Jest
[] Implement validation

## 📂 Notes

Hoisting:
Hoisting is a JavaScript behavior where variable and function declarations are moved (or “hoisted”) to the top of their containing scope—before the code is executed. This means that you can reference functions and certain variables before they are declared in the code.

| Construct       | Hoisted? | Initialized?               | Can use before declaration? | Scope Type      |
| --------------- | -------- | -------------------------- | --------------------------- | --------------- |
| `var`           | ✅ Yes   | ❌ No (set to `undefined`) | ✅ Yes, but `undefined`     | Function-scoped |
| `let` / `const` | ✅ Yes   | ❌ No (TDZ applies)        | ❌ No (ReferenceError)      | Block-scoped    |
| `function`      | ✅ Yes   | ✅ Yes                     | ✅ Yes                      | Function-scoped |
| `class`         | ✅ Yes   | ❌ No (TDZ applies)        | ❌ No (ReferenceError)      | Block-scoped    |

https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation

Higher-order function [https://oscar-reyes.medium.com/high-order-functions-with-typescript-44685ee09cc5]: A higher-order function is a function that either takes one or more functions as arguments, or returns a function as its result.
This contrasts with first-order functions, which are functions that don't take other functions as arguments or return them.

Function currying: Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions
[example](src/types/rules.d.ts)

functional programming approach:

anonymous function:

```js
const required: ValidationRule<string> = (value) => ({
  valid: value.trim().length > 0,
  message: value.trim().length > 0 ? undefined : "This field is required";
});
```

named function:

````js
function required(value: string): ValidationRule {
  return {
    valid: value.trim().length > 0,
    message: value.trim().length > 0 ? undefined : "This field is required",
  };
}
```

function currying:

```js
const minLength =
  (min: number): ValidationRule<string> =>
  (value) => ({
    valid: value.length >= min;
    message: value.length >= min ? undefined : `The minimum length is ${min}`;
  });
```

named function approach

```js
function minLength(min: number): ValidationRule {
  return function (value: string): ValidationResult {
    const isValid = value.length >= min;
    return {
      valid: isValid,
      message: isValid ? undefined : `The minimum length is ${min}`,
    };
  };
}
```
````

## Form Validation Rules Project

Final Idea:

### 1st part: create methods to validate data

---

types:

type Validation -> value: boolean, message: string

type ValidationFunction -> (value) => Validation

constans:
MIN_L:number = 15
MAX_L:number = 255

functions:

required () => (value) => Validation
string () => (value) => Validation
minLength (MIN_L) => (value) => Validation
maxLength (MAX_L) => (value) => Validation

data:
name: string, phone: string, option: number, checked: boolean

dataObject {
id: number
name: string
}

const name: dataObject

[
{name.id: [required, string, minLength(MIN_L)(name.value)]}
]
