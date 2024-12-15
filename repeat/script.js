//first method

// let info = 5;
// while(info<10){ //condition
//     info++;  //action
//     console.log(info);  //result
//     info++;
// }

// second method

// let info = 0;
// do{
// //result
// console.log(info);

// //action
// info++;
// }while(info<10)//condition

//third method

// for(let info = 0; info < 10; info++) {
//     console.log(info);
// }

//array
// const products = ["Table", "Pen", "Chair"];
// products[0] = "book"
// console.log(products);
// console.log(products[2]);


//array
// const products = ["Table", "Pen", "Chair"];

// products[3] = "New Data"
// products["myvalue"] = "test"
// console.log(products);


//array
// const products = ["Table", "Pen", "Chair",[1,2,3, [true, false],4,5]]
// console.log(products[3][3])


//aray
const products = [
    {
        title:"phone",
        price:2000,
        newDivice:true,
        color:['red','black']
    },
    {
        title:"Asuf Tuf",
        price:3000,
        newDivice:true,
        color:['red','black']
    },
    {
        title:"Tuf",
        price:4000,
        newDivice:true,
        color:['red','black']
    },
    {
        title:"Asuf",
        price:1000,
        newDivice:false,
        color:['yellow','black']
    },
]
// console.log(products[0].title);
// console.log(products[2].price);

// let data = ["table", "pen", "chair"];
// for(let counts = 0; counts<4; counts++){
//     console.log(products[counts].price);
//     console.log(products[counts]);
// }
// console.log(info[0]);
// console.log(info[1]);
// console.log(info[2]);

// let data = ["table", "pen", "chair"];
// for(let counts = 0; counts<4; counts++){
//     if(products[counts].price <= 3000){
//         console.log(products[counts].title);
//     }
// }

for(let leg of products){
    console.log(leg);
    console.log(leg.title)
}
for(let info in products){
    console.log(products);
    console.log(products[info].color)
}

let data = ["table", "pen", "chair"];
for(let counts = 0; counts<4; counts++){
    if(products[counts].price <= 3000){
        console.log(products[counts].title);
    }
}

const foo = window.prompt();

console.log(foo);