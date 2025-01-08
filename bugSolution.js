function myFunc() {
  console.log(this);
}

const obj = {
  myMethod: myFunc.bind(this) // Bind 'this' to the current context
};

obj.myMethod();

const obj2 = {
  myMethod: function() { myFunc.call(this); } // Explicitly set 'this' with call()
};

obj2.myMethod();

const obj3 = {
  myMethod: function() { myFunc.apply(this, arguments); } // Explicitly set 'this' with apply()
};

obj3.myMethod();

// Using arrow functions, 'this' lexically binds to its surrounding scope
const obj4 = {
  myMethod: () => {
    console.log(this); // 'this' here refers to the surrounding scope, not obj4
  }
};

obj4.myMethod();