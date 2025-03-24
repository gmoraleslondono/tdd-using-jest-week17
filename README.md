# Week 17 - Test Driven Development Using Jest

## What is TDD?

Development approach where we write our test before actually writing the code.

## The TDD approach follows these 3 steps:

- Red: write the test and see that it fails
- Green: Write just enough code to make the test to pass
- Refactor: clean up the code while we keep the test green

## Advantages:

- Find bugs early
- make code reliable
- write code that is needed

## Jest Documentation:

[https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)

# Tutorial Development:

1. npm init -y
   set "type":"module"

2. npm i --save-dev jest
   set on package.json -> "test": "jest"
   NOTE: for this exercise we need to make some changes following [this guide](https://jestjs.io/docs/ecmascript-modules)

3. Start writing the test:

- use the subfix ".test.js", example: sum.test.js
- import at the top the file you will create with the code to test, it will complain (I know) because it is a file you haven't created yet.
- add a descriptive title to the test
- run the test: npm run test
- refactor if needed
