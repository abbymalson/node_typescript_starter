//import { strict } from "assert"
//use strict

console.log("hi there")
console.log("this is what this is for")

let message: string = 'Hello, World!';
console.log(message);

// create a new heading 1 element
//let heading = document.createElement('h1');
//heading.textContent = message;
// add the heading the document
//document.body.appendChild(heading);

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);