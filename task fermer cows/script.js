//                      variant one

// let day = parseInt(prompt("Write the number of days: "));
// let cow = parseInt(prompt("Write the number of cows: "));
// let earnings = 9; // Each cow generates $9 per day
// let cowCost = 300; // Cost of one cow
// let literseveryDay = 3;

// if (cow > 0) {
//   let totalMoney = day * cow * earnings;
//   let totalLiters = literseveryDay * day * cow;
//   let additionalCows = Math.floor(totalMoney / cowCost);
//   let totalCows = cow + additionalCows;
//   let updatedTotalLiters = totalCows * literseveryDay * day;
//   console.log("Money: $" + totalMoney);
//   console.log("origin Cow count: " + cow);
//   console.log("Additional bought cows: " + additionalCows);
//   console.log("Total Cow count after purchase: " + totalCows);
//   console.log("Total liters of milk produced (origin): " + totalLiters);
// } else {
//   console.log("Invalid input.");
// }

// //                     task variant two
function calculate(days){
  let cows=1;
  let milkPrice=3;
  let literseveryDay=3;
  let cowCost=300;
  let farmprice =15000;

  let buyfarm=false;
  let totalLiters = 0;
  let milkincome = 0;  // прибыль за малоко
  let currentmoney = 0;  // текущие деньги после покупок
  let expense = 0;      // расходы

  for( let day=0; day<=days; day++){
    let daymilk = cows * milkPrice;
    totalMoney =  milkPrice* cows * literseveryDay;
    totalLiters = cows * literseveryDay * day;
    milkincome = milkincome + daymilk * milkPrice;
    currentmoney = milkincome - expense;

    if (currentmoney >= cowCost) {
      cows++; // ineklerin sayi bir dene artir;
      expense = expense + cowCost;
      currentmoney = currentmoney - cowCost;
    
    }
    if (currentmoney >= farmprice) {
      buyfarm = true;
      expense = expense + farmprice;
      currentmoney = currentmoney - farmprice;
    }
  }
  return{
    currentMoney: currentmoney,
    totalCowCount: cows,
    totalLitersOfMilkProduced: totalLiters,
    canBuyFarm: buyfarm,
    Days: days,
    expenses: expense,
    }
}

let result=calculate(prompt("Введите количество дней: "));

// console.log("current Money: " + currentmoney);
// console.log("total Cow Count: " + cows);
// console.log("total Liters Of Milk Produced: " + totalLiters);
// console.log("can Buy Farm: " + buyfarm);
// console.log("days: " + days);
// console.log("expenses: " + expense);

console.log(result);