# JS Fundamentals

## 01 Module

### Run Manually:

- You need to have node.js installed.

- Now open the terminal and go to the project directory that the file is in and run it:

```bash
  node <fileName.js>
```

### 1. Functions:

> What is a function?
>
> > `It is a set of instructions that executes a task or calculates a value`

**_Use the file `01-functions.js` inside the `01-module` folder as a reference._**

> Declaring a function:

    1 - Function name;
    2 - List of arguments to the function between () and separated by commas;
    3 - JS statements that define the function between braces {};

```
 function firstFunction() {
  console.log("It's working!!");
 }
```

> How to execute a function?

```
 The function must be called by its name followed by ()
 firstFunction();
```

> Uncomment the code between `line 1 to line 4 and run` it in the terminal to test and see the result.

---

---

> **Function without parameter:**
>
> > It is a function that only performs tasks within its scope without interacting with other variables or functions.
> > It does not receive any value inside the ().
> >
> > > Uncomment the code between `line 7 to line 10 and run` it in the terminal to test and see the result.

> **Function with parameter**
>
> > It is a function that receives a value on its call, between the () and returns these values to the () of the function.
> > It interacts with values outside the scope of the function.
> >
> > > Uncomment the code between `line 13 to line 16 and run` it in the terminal to test and see the result.

> **How to return a values from a function?**
>
> > You can pass the expression to the front of the return statement that will end the function execution.
> >
> > **_Be aware: from the return statement to the lines below, nothing is executed in the function block._**
> >
> > > Uncomment the code between `line 19 to line 23 and run` it in the terminal to test and see the result.

### 2. Variables:


> What is a variable?
>> `They are a container for a value. The variable declarations are processed before any other code is executed.`

***Use the file `02-variables.js` inside the `01-module` folder as a reference.***

> There are 3 types:
    1 - var
    2 - let
    3 - const

> **var:**
>>The scope is your current running context, the function it belongs to, and if declared in the file the scope is global.
>>>Currently it is not used, but it is important to know because in legacy projects it is still possible to have variables of the var type
```
    var nameVar = "Adriano";
    console.log("Name: ", nameVar);
```

>>The var is limited in scope within a function as in the example between line 4 and 14, uncomment the lines and test.
>>>A reference error will occur, because the variable was not declared, but you see it inside the function, and this is exactly the variable scope limit.
```
    ReferenceError: name is not defined.
```

> **Let**
>>The scope of a let is limited to the smallest block it belongs to, in the current block.
>>Can be declared without being initialized

```
    let ageLet = 35;
    console.log("Age: ", ageLet);
```

>>Its value can be reassigned.
```
    let ageLet = 35;
    console.log("Age: ", ageLet);
    ageLet = 36;
    console.log("age after the value of the variable has been updated: ", ageLet);
```
>>>Uncomment the code between `line 14 to line 17 and run` it in the terminal to test and see the result.

>>>In practice, the scope of a `let` is limited to the block it belongs to, in the example the `let` is created inside an `if` block and can only be manipulated inside the block, if you try to use the variable outside the block an error will occur because the variable has not been defined.
```
    ReferenceError: name is not defined.
```

>>>Uncomment the code between `line 19 to line 30 and run` it in the terminal to test and see the result.

> **const**
>>It has block scope equal to `let`.
>>The value of the variable cannot be reassigned.
>>Needs the initialization during the declaration.

```
    const nameConst = "Adriano";
    console.log("NameConst: ", nameConst);
```
>>Its value cannot be reassigned.

```
    const nameConst = "Adriano";
    console.log("NameConst: ", nameConst);
    // BUG:TypeError: Assignment to constant variable.
    nameConst = "Salles"; 
    console.log("NameConst: ", nameConst);
```

>>>Uncomment the code between `line 32 to line 36 and run` it in the terminal to test and see the result.

>>>Testing Scope uncomment the code between `line 38 to line 45 and run` it in the terminal to test and see the result.

>>>The const cannot be used as a variable for repeat loops, for example, because its value cannot be reassigned.
>>>The code block is not processed by js.

>>>Testing Scope uncomment the code between `line 47 to line 50 and run` it in the terminal to test and see the result.

---
---

> **Variable Manipulation:**
>>
>>We will use let and const for examples.

>>**Let:**
>>>With `let` you can manipulate the variables in many different ways, in the example I will use an object to manipulate its internal data.

>>>Between `lines 52 and 55` an object is declared with two keys and value, objectName which is a string and objectAge which is a number.
>>>Below between `lines 58 and 61` we are reassigning the values of the two keys declared in the userLetHandling object.

>>>Uncomment the code between `line 52 to line 62 and run` it in the terminal to test and see the result.

> **Const:**
>>
>>With `const` you cannot manipulate the variables values.
>>>Using a similar example to `let`, between `lines 64 and 67` we declare a variable that is an object just like the one declared for let.
>>>Between `lines 71 and 74` we try to reassign the key values of the object directly and when running the project the terminal returns an error saying that it is not possible to reassign values for a constant.
>>>>Comment out the code between lines 71 and 75.
>>>>>Now there is a way to reassign the values of the object keys by accessing them using a simple `.`.
>>>>>Look at the code between `lines 77 and 78` and notice that we can access and manipulate the values with this expression.

>>>>Uncomment the code between `line 64 to line 79 and run` it in the terminal to test and see the result.
