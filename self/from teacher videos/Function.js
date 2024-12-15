function introfunc0(g){
    
    console.log(g)
}

introfunc0("hello");

function intro(g,n){
    
    console.log(g+n)
}

intro(5);

function ty(g,n=2){
    
    console.log(g+n)
}

ty(5,50);

// function expression
const zxc = function(){
    console.log("hello function");
}
zxc()  // you must call function


// function declaration
zxc = function(){
    console.log("hello function");
}
zxc()   // you must call function


(function(){
    console.log("IIFE function"); // you dont need to call function
})()
/*
ECMA script 
ES1
ES2
ES3
ES4*/