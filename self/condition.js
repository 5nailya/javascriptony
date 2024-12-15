// condition statement

const abc = "hello";

if (5<10) {
    console.log('true');
}else if (100<1){
    console.log('it is true');
}else if (abc=="hello"){
    console.log("say yes")
}

else {
    console.log('false');
}


const age = 10;
if (age>=0 && age<15) {
    console.log('child')
}else if (age>15 && age<18) {
    console.log('tennager')
}else if (age>18 && age<29) {
    console.log('young')
}else if (age>29 && age<50) {
    console.log('averega age')
}else if (age>51) {
    console.log('old')
}
else {
    console.log('oldest')
}


const into = "qwertyuiop"

switch (into) {
    case 5:
    console.log('it is 5');
    break;
    case "hello":
    console.log('how are you');
    break;
    default:
    console.log('condition is not fullfiled');
}