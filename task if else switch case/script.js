// 0-3 korpe
// 3-13 usaq
// 13-18 yeniyetme
// 18-35 genc
// 35 - 55 orta yasli
// 55 - 90 yasli
// 90 - mermer

let age = 46;
if (age <= 3 ){
    console.log("korpe");
} else if (age <= 13) {
    console.log("usaq");
} else if (age <= 18) {
    console.log("yeniyetme");
} else if (age <= 35) {
    console.log("genc");
} else if (age <= 55) {
    console.log("orta yasli");
} else if (age <= 90) {
    console.log("yasli");
} else if (age > 90) {
    console.log("mermer");
}


switch (true) {
    case (age <= 3) :
        console.log("korpe");
        break;
    case (age <= 13):
        console.log("usaq");
        break;
    case (age <= 18):
        console.log("yeniyetme");
        break;
    case (age <= 35):
        console.log("genc");
        break;
    case (age <= 55):
        console.log("orta yasli");
        break;
    case (age <= 90):
        console.log("yasli");
        break;
    case (age > 90):
        console.log("mermer");
        break;
    default:
        console.log("Неверный возраст");
        break;

}

console.log(age <= 3 ? "korpe" : age <= 13 ? "usaq" : age <= 18 ? "yeniyetme" : age <= 35 ? "genc" :age <= 55 ? "orta yasli" :age <= 90 ? "yasli" : "mermer");



////task two
const productOne = ['bread','water','oil']; //10
const productTwo = ['onion','milk','egg']; //20
const productThree = ['meat','cola','fruits','fish']; //40
const productFour = productOne.concat(productTwo); //70
const productFive = productTwo.concat(productThree) //120

let product = 101;
if (product <= 10) {
    console.log(productOne);
}else if (product <= 20) {
    console.log(productTwo);
}else if (product <= 40) {
    console.log(productThree);
}else if (product <= 70) {
    console.log(productFour);
}else if (product <= 120) {
    console.log(productFive);
} else {
    console.log("not founded");
}

switch (true) {
    case (product <= 10):
        console.log(productOne);
        break;
    case (product <= 20):
        console.log(productTwo);
        break;
    case (product <= 40):
        console.log(productThree);
        break;
    case (product <= 70):
        console.log(productFour);
        break;
    case (product <= 120):
        console.log(productFive);
        break;
    default:
        console.log("not founded");
        break;
}

console.log(product <= 10 ? productOne : product <= 20 ? productTwo : product <= 40 ? productThree : product <= 70 ? productFour :product <= 120 ? productFive : "not founded");


//task three
let time=23;
let money = time*3;
console.log(money + "$");

if (money <= 10) {
    console.log(productOne);
}else if (money <= 20) {
    console.log(productTwo);
}else if (money <= 40) {
    console.log(productThree);
}else if (money <= 70) {
    console.log(productFour);
}else if (money <= 120) {
    console.log(productFive);
} else {
    console.log("not founded");
}

switch (true) {
    case (money <= 10):
        console.log(productOne);
        break;
    case (money <= 20):
        console.log(productTwo);
        break;
    case (money <= 40):
        console.log(productThree);
        break;
    case (money <= 70):
        console.log(productFour);
        break;
    case (money <= 120):
        console.log(productFive);
        break;
    default:
        console.log("not founded");
        break;
}

console.log(money <= 10 ? productOne : money <= 20 ? productTwo : money <= 40 ? productThree : money <= 70 ? productFour :money <= 120 ? productFive : "not founded");
