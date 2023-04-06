// Question # 1: Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");

if (num1 > num2) {

    console.log("The grater number is: "+ num1);
}else {
    console.log("The grater number is: "+ num2);
}

// Question # 2: Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let numSign = +prompt("Enter a Number");

if (numSign >= 0){
    alert("The sign is + ");
}else{
    alert("The sign is - ");
}

// Question # 3: Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let number1 = +prompt("Enter First Number");
let number2 = +prompt("Enter Second Number");
let number3 = +prompt("Enter Third Number");
let number4 = +prompt("Enter Fourth Number");
let number5 = +prompt("Enter Fifth Number");

if (number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5) {

    console.log("The grater number is: " + number1);
}else if (number2 > number1 && number2 > number3 && number2 > number4 && number2 > number5){
    console.log("The grater number is: " + number2);
}else if (number3 > number1 && number3 > number2 && number3 > number4 && number3 > number5){
    console.log("The grater number is: " + number3);
}else if (number4 > number1 && number4 > number2 && number4 > number3 && number4 > number5){
    console.log("The grater number is: " + number4);
}else{
    console.log("The grater number is: " + number5);
}

// Question 4: Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the screen.

for (let i = 0; i <=15; i++) {
    if(i % 2 == 0){
        document.write(i + " is even"+ "<br><br>");
    }else{
        document.write(i + " is odd" + "<br><br>");
    }
    
}

// Question # 5:  Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding grade.

let studentMarks = +prompt("Enter Student marks");

if (studentMarks >= 90 && studentMarks <=100){
    console.log("Grade is A");
}else if(studentMarks >= 80){
    console.log("Grade is B");
}else if(studentMarks >= 70){
    console.log("Grade is C");
}else if(studentMarks >= 60){
    console.log("Grade is D");

}else{
    console.log("Grade is F");
}


// Question # 6: Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
 
for (let i = 1; i <= 100; i++) {
    if(i%3==0 && i%5==0) {
        console.log(i + " FizzBuzz")
    }else if(i%3==0){
        console.log(i + " Fizz")
    }else if(i%5==0){
        console.log(i + " Buzz")
    }else{
        console.log(i);
    } 
    
}

// Question # 7: Write a JavaScript program to construct the following pattern, using a nested for loop.

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }