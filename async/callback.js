"use strict";

// javascript is synchronous
// Execute te code block in order after hoisting
// hoisting : var, function declarations

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
process.nextTick(() => {
  console.log(4);
});

// synchronous callback
function printImmediatly(print) {
  print();
}

printImmediatly(() => console.log("hello"));

// asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

class UserStorage {
  loginUser(id, password, onSucess, onError) {
    setTimeout(() => {
      if (user==='ellie'){
    onSucess({name: 'ellie', role : 'admin'});
      }
  })

  getRoles(user, onSucess, onError) {}
}
}