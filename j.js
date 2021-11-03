// a();
// // b();
// // functional statement and declartion

// function a(){
//     console.log("a");
// };

// // function expression
// var b= function (){
//     console.log("b")
// }


// // functional anynoymns a function without name but according to the ECMAscript function should have name

// // function(){
// //     console.log("c");
// // }


// // named function expression

// var c = function d(){
//      console.log("v")
// }

// c();


// // first class funtion
// var e = function a(){
//      return function xyz(){

//     }
// }


// console.log(e());


// //arrow function

// const l=()=>{
//     console.log("n")
// }


// console.log(l);


// // callback   



// // what is callback function in javascript


// // setTimeout(function(){console.log("teri meri kahahni")},5000);


// function x(y){
//   console.log("x")
//   y();
// }

// function y(){
//     console.log("y")



// }

// x(function(y){
//     console.log("y")
// })

// x(function y(){
//     console.log("y")
// })

// javascript is a synchronous and single-threaded 

// first class funtion and callback function



// document.getElementById("CLICKME").addEventListener("click", function xyz(){
//     console.log("hllooooo")
// })



// function addEventListener(){
//     let count=0;

//     document.getElementById("CLICKME").addEventListener("click", function xyz(){
//         console.log("count",count++);
//     })

    

// }
// console.log("start");


// setTimeout(function  cbT(){
//     console.log("CB setTImeout");
// },5000);

// fetch("https://api.netflix.com/").then(function cbF(){
//     console.log("netflix cb");
// })
// console.log("End");


// closure in javascript

function x(){
    let a = 7;
    function y(){
        console.log(a);
    }

     a = 100;
    return y;


}



var z = x();
console.log(z);


z();