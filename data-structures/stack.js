/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

// function Stack(capacity) {
//   this.storage = "";
//   this.capacity = capacity;
// }

function Stack(capacity){
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
};

// Stack.prototype.push = function(value) {
//   if(this.count() < this.capacity){
//     this.storage += "--"+value;
//     return this.count();
//   }
//   else {
//     return "Max capacity already reached. Remove element before adding a new one."
//   }
// }

Stack.prototype.push = function(value){
  if(this._count < this._capacity){
    this._storage[this._count++] = value;
    return this._count;
  }
  return "Max capacity already reached. Remove element before adding a new one."
};
// Time complexity: O(1) - constant

// Stack.prototype.pop = function() {
//   var toReturn = this.storage.slice(this.storage.lastIndexOf("--")+2);
//   this.storage = this.storage.substring(0, this.storage.lastIndexOf("--"));
//   return toReturn;
// };

Stack.prototype.pop = function(){
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if(this._count < 0){
    this._count = 0;
  }
  return value;
}
// Time complexity: O(1);

// Stack.prototype.peek = function() {
//   return this.storage.slice(this.storage.lastIndexOf("--")+2);
// };

Stack.prototype.peek = function(){
  return this._storage[this._count - 1];
}
// Time complexity: O(1)

// Stack.prototype.count = function() {
//   var num = 0;
//   for(var i=0; i<this.storage.length; i++){
//     if(this.storage[i] === "-"){
//       num += 1;
//       i++;
//     }
//   }
//   return num;
// };

Stack.prototype.count = function(){
  return this._count;
}
// Time complexity: O(1)

// Stack.prototype.contains = function(value) {
//   var found = false;
//   var stack_copy = this.storage;
//   while(!found) {
//     var elem = stack_copy.slice(stack_copy.lastIndexOf("--")+2);
//     if(elem === value){
//       found = true;
//     }
//     else if(stack_copy.length===0){
//       break;
//     }
//     else {
//       stack_copy = stack_copy.substring(0, stack_copy.lastIndexOf("--"));
//     }
//   }
//   return found;
// };

// Stack.prototype.until = function(value){
//   var stack_copy = this.storage;
//   var count = 0;
//   while(stack_copy.length > 0){
//     count += 1
//     if(stack_copy.slice(stack_copy.lastIndexOf("--")+2) == value){
//       break;
//     }
//     else {
//       stack_copy = stack_copy.substring(0, stack_copy.lastIndexOf("--"));
//     }
//   }
//   return count;
// };


//test code
var myStack = new Stack(10);
myStack.push(2);
myStack.push(3);
myStack.push(2);
myStack.push(2);
myStack.push(2);
myStack.push(4);
myStack.push(2);

/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
