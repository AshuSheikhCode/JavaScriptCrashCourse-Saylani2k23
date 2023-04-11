
// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function closure(a){
    return function(b){
        console.log(a + b);
    }
}

let innerFunction = closure(6);
innerFunction(5);


// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function search(arr, l, r, x) 
{ 
    if (r < l) 
        return -1; 
    if (arr[l] == x) 
        return l; 
    if (arr[r] == x) 
        return r; 
     return search(arr, l+1, r-1, x); 
} 
     
    let arr = [12, 34, 54, 2, 3]; 
    let i; 
    let n = arr.length; 
    let x = 12; 
    let index = search(arr, 0, n - 1, x); 
  
    if (index != -1){
      document.write(`Element ${x} is present at index ${index}`); 
    }
    else{
        document.write("Element is not present " + x); 
    }
    

//     3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


function para(text){
    document.write("<p> " + text + " /<p>");
}

para("Asad Ahmed Sheikh");
para("This is a paragraph");


// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


var data = {
    set: function(key, value) {
      if (!key || !value) {return;}
  
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    },
    get: function(key) {
      var value = localStorage.getItem(key);
  
      if (!value) {return;}
  
      // assume it is an object that has been stringified
      if (value[0] === "{") {
        value = JSON.parse(value);
      }
  
      return value;
    }
  }