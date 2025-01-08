function myFunc() {
  console.log(this);
}

myFunc(); // 'this' will be the global object (window in browsers, undefined in strict mode)

const obj = {
  myMethod: myFunc
};

obj.myMethod(); // 'this' will be the obj object