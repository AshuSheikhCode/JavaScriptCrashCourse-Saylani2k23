    // QUESTION # 1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num1 = +prompt("Write first number:");
let num2 = +prompt("Write second number:");

if(num1 > num2){
    console.log(+num1+ " is greater than " +num2);
}
else{
    console.log(+num2+ " is greater than " +num1);
}

// QUESTION # 2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

let sign = +prompt("(Enter a number:)");

if (sign > 0) {
    alert("The Sign is +");
}
else if (sign === 0) {
    alert("Zero is non positive");
} else {
    alert("The Sign is -");
}

// QUESTION # 3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.


let a  = +prompt("Enter First Number:");
let b  = +prompt("Enter second Number:");
let c  = +prompt("Enter third Number:");
let d  = +prompt("Enter Fourth Number:");
let e  = +prompt("Enter Fifth Number:");

if(a>b && a>c && a>d && a>e){
    console.log(+a+" is the greater number");
}
else if(b>a && b>c && b>d && b>e){
    console.log(+b+" is the greater number");
}
else if(c>a && c>b && c>d && c>e){
    console.log(+c+" is the greater number");
}
else if(d>a && d>b && d>c && d>e){
    console.log(+d+" is the greater number");
}
else{
    console.log(+e+" is the greater number");
}

// QUESTION # 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for(let i=0;i<=15;i++){
    if(i%2==0){
        console.log(+i+" is even");
   }
   else{
        console.log(+i+" is odd");
   }
}


// QUESTION # 5. Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

let avgMarks = +prompt("Enter Average Marks");

if(avgMarks<100 && avgMarks>=90){
    console.log("A");
}
else if(avgMarks<90 && avgMarks>=80){
    console.log("B");
}
else if(avgMarks<80 && avgMarks>=70){
    console.log("C");
}
else if(avgMarks<70 && avgMarks>=60){
    console.log("D");
}
else{
    console.log("F");
}


/* QUESTION # 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
multiples of three print "Fizz" instead of the number and for the multiples of five
print "Buzz". For numbers which are multiples of both three and five print
"FizzBuzz". */

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

/* QUESTION # 7.Write a JavaScript program to construct the following pattern, using a nested
for loop.
*
* *
* * *
* * * *
* * * * *       */

let n =5;
let string = "";

for(i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        string += "*";
    }   
    string += "\n";
}
console.log(string);
