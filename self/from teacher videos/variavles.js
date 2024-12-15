variavles

let v = 7;
{
    let x = 5;
    console.log(x); //Work
    console.log(v);  //work
}

console.log(v);  // dont work

var c = 45;
{
    var b = 23;
    console.log(b)  //work
    console.log(c)  //work
}

var i1n_$f1o1 = "Hello";
console.log('i1n_$f1o1')

console.log(c)  //work
console.log(b)  //work

var po = 45;
var po = 56;
console.log('po');


const qwerty = 456;  //YES ONLY ONE TIME THE VALUE IS CONSTANCE

//const qwerty =46; //NO


let info = "Hello";
info = "new value";
console.log(info);

if (true) {
    var a = 5;

}

console.log(a);  //working becouse var is global element

if (true) {
    let a = 5;

}

console.log(a);  // dont work because let is local element