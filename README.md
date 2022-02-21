# Recursion review

Recursion is the process of defining a problem (or the solution to a problem) in terms of (a simpler version of) itself.

**Parts of a Recursive Algorithm**

All recursive algorithms must have the following:

**Recursive** algorithms       |
-------------------------------|
1- Base Case (when to stop)    |
2- Work toward Base Case       |
3- Recursive Call (call itself)|

For example, we can define the operation "Being a developer in RBK" as:

- If you passed all RBK's phases, CONGRATS you are a full stack JavaScript developer.

- Pass one more phase.

- "Succeed all phases ".

Here the solution to being a developer in RBK is three steps (three steps).

1. First, we don't have anymore phases if we completed all of them.
2. Second, we do a very simple action that makes our situation simpler to solve (Pass a phase) .
3. Finally, we redo the entire algorithm.

Consider the following function:

```js
var Succeed = function(steps){
  if(!steps.length){
        console.log('Now I am a full stack javascript developer!');
  }
  else{
    console.log('steps before success:', steps);
    console.log('now doing', steps.pop());
    Succeed(steps);
  }
}
```

===> Which produces this output:

Succeed(['SENIOR phase','JUNOIR phase','BOOTSTRAP'])

- steps before success: ['SENIOR phase', 'JUNOIR phase', 'BOOTSTRAP']
- now doing BOOTSTRAP
- steps before success: ['SENIOR phase', 'JUNOIR phase']
- now doing JUNOIR phase
- steps before success: ['SENIOR phase']
- now doing SENIOR phase
- Now I am a full stack javascript developer!

- - - -

You can use recursion on problems where smaller parts of the problem look the same as the larger problem as a whole.

In this sprint, you'll be reimplementing parts of the browser that involve recursion. In so doing, don't use the things
you're reimplementing, or any other built-in shortcuts that make these problems trivial. (You'll probably know if you're cheating,
 but feel free to ask us if you're not sure.)

(Curious fact: many browsers don't have any of these functions in them, and people do need to reimplement them.
 When we reimplement new browser functionality in older browsers, it's called a "polyfill".)

**New for the Review Sprint**

## Review Sprint Repo

The repo you will be working out of will be a different repo from Precourse. Look on Github for recursion-review instead of recursion. Work on this from scratch and do not reference code from Precourse.

## Broken Tests

To help you familiarize yourself with our favorite testing tools, Mocha and Chai, we've broken the test suite.

Mocha  is a test framework that provides the structure for test files, and is responsible for running tests and reporting their results. Mocha provides the it and describe global variables along with useful hooks like beforeEach.

Chai  is an assertion library that makes your tests more expressive and your error messages more helpful. Chai provides the expect function and various methods  that allow you to express your behavior in a human readable way.

Pay careful attention to the test files and fix them as necessary. Do not to refer back to the previous test suite, you would only be cheating yourself out of an important learning opportunity. Instead, use the Mocha and Chai documentation. You can do it!

## Bare minimum Requirements

- Implement the function mutate in src/mutate.js, and make the specs pass, fixing them as necessary.

- Replace stringifyJSON with your own function in src/stringifyJSON.js, and make the specs pass, fixing them as necessary.

- Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass, fixing them as necessary.
  - You should use document.body, element.childNodes, and element.classList
