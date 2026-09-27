// let n = 5;

// for(let i =0; i<n; i++){
//     console.log("hello, ", i);
// }

// console.log("bye");



// from here we use the export.js for the another file (Export.js) i make function already there
// const someValue = require("./Export");

// console.log(someValue);

// const math = require("./Export");
// console.log(math.sum(2,2));
// console.log(math.PI);



// figlet
// const figlet = require("figlet");

// figlet("PREETAM MISHRA!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// import from the math/Export.js
import {sum, PI} from "./Export.js";
console.log(sum(1,2));
import {generate} from "random-words";
console.log(PI);
console.log(generate());