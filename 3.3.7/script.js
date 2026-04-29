function rekniAhoj() {
    console.log("čus bus");
 
}
 
rekniAhoj();
rekniAhoj();
 
let pozdrav = "Pozdrav!";
 
function ukazPozdrav() {
    console.log(pozdrav)
}
 
function testLocal() {
    let localValue = 123;
    console.log(localValue)
}
 
ukazPozdrav();
testLocal();
 
 
// tady byla chyba
 
if (true) {
    var y = "var blok nerespektuje";
}
console.log(y);
   
//Parametr & Argument
 
function sayHello(name) { // name = parametr
     console.log("Ahoj" + name);
}
 
sayHello("Alice");
 
function addNumber(num1, nuum2) {
    console.log(num1 + nuum2);
}
 
addNumber(5,8);

function odcitani(num3, num4) {
    console.log (num3 - num4);
}
odcitani(11,8);

function nasobeni(num5, num6) {
    console.log(num5 * num6)
}
nasobeni(6,7)

function deleni(num7, num8) {
    console.log(num7 / num8)
}
deleni(21,3)

