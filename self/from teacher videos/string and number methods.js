const cd = "hello";

console.log(cd.length)

console.log(cd.substring(0,2));  //hel

/* const tri = "     qwee   rty tyu   "
console.log(tri.trim());  // trim srim empty placeholder
*/
//number 

var ppp = 5;

console.log(typeof ppp);

console.log(typeof ppp.toString());
console.log(ppp.toString());

var rem = 5.5;

console.loge(rem.toString());
console.loge(Math);
console.loge(rem.toFixed());  //  return 6 rem automatically become string type

console.loge(Math.round(rem));  //  return 6 but type is still number
console.loge(Math.ceil(rem));  // always return bigest round 6
console.loge(Math.floor(rem));  // always return smallest round 5
console.loge(Math.random() *10);  // return random number until 10 letters