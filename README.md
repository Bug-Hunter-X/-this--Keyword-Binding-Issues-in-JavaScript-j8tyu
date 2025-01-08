# JavaScript 'this' Keyword Bug

This repository demonstrates a common issue in JavaScript related to the `this` keyword.  The `this` keyword's context is dynamic and depends on how the function is invoked. This example shows how unexpected behavior can arise if the context of `this` is not carefully considered.

## Problem

The `bug.js` file shows a function `myFunc` where the value of `this` changes depending on how it's called. When called directly, `this` refers to the global object. When called as a method of an object, `this` refers to that object. This behavior can be surprising and lead to errors if not understood.

## Solution

The `bugSolution.js` file demonstrates several ways to manage the `this` binding, enhancing code clarity and preventing unexpected behavior.  Methods like `bind`, `call`, and `apply` offer solutions for controlling the `this` value.