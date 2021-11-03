// console.log("color");



// const key="email";

// const person={
//     name:"harshit",
//     age:22,
//     "person hobbies":["guitar","sleeping","listening"]
// }


// person.key="harshit@gmail.com";
// console.log(person)

// person[key]="harshit@gmail.com";

// console.log(person)

// // how to iterate objects in
// // for in loop

// // object.keys


// for(let item in person){
//     console.log(item)
// }

// const a=Object.keys(person);
// console.log(a)


// for(let item in person){
//     console.log(`${item } " : "  ${person[item]} `)
// }

// // computed properties


// let myvar1="hello";
// let myvar2="world";
// const key1="myvaluestring";
// const key2="myvalue2";


// const bj={
//    [key1]:myvar1,
//     [key2]:myvar2,
// }
// console.log(bj);


// const newObject = {..."abc"};
// console.log(newObject);

const band={
    bandName:"led zeppin",
    famousSong:"stairway to haven",
    famouSong:"stairway to haven",
    Song:"stairway to haven"
};

console.log("bandName",band.bandName)
const {bandName:var1, famousSong,...restap} = band;
console.log(band);
console.log(var1);


const users=[
    {userId:1,username:"harsit",gender:'male'},
    {userId:2,username:"harsitmehta",gender:'female'},
    {userId:3,username:"harsittiwari",gender:'male'},
]




