// Numeros
const edad = 25

let vLuz = 300000

console.log(edad);
console.log(vLuz);

// Operadores
/**
 *  + addition
    - subtraction
    * multiplication
    / division
*/

console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);

// Operadores Avanzados
// Exponencial o potencias
console.log(2 ** 3); // => (2 * 2 * 2) result: 8

const numero1 = 2
const numero2 = 3

const resultado = numero1 ** numero2

console.log(resultado)

// Modulo - Residuo de una division
// Esta al revez la division 5 % 7 ==> 7/5 residuo = 5
console.log(5 % 7) // => 5

// Operador de asignacion es un solo igual = 
let miNumero = 69
miNumero = 5

// Podemos usar el valor anterior de una variable para reasignar valor
let myAge = 24;

myAge = myAge + 1;

console.log(myAge); // <-- 25

// Forma avanzada de asignar operadores, se puede con todos los operadores de arriba
let myAge2 = 25;

myAge2 += 1; // es lo mismo que: myAge = myAge + 1

console.log(myAge2);

// Jerarquia de operadores
let result = (7 + 5) / 3 - 8;
console.log(result); // => -4

console.log(10 - 8 * 2 ** 2) // -22

const i = 10 + (5 * 2 ** 3) / 4 - 6

console.log(i)

const expressionOne = ((2 * 2) + 5) * 6;
console.log(expressionOne);

const expressionTwo = ((2 * 2) + (5 * 3)) - 5;
console.log(expressionTwo)

const expressionThree = (5 * 5) / (5 * 5);
console.log(expressionThree);

const expressionFour = 5 * 5 - 5 * 4;
console.log(expressionFour);





/**
 * teniedno las variables de abajo calcula las calorias que tiene el omelet
 */

let cheeseCalories = 200;

let eggsRequired = 4;
let caloriesPerEgg = 75;1234


let eggsCalories

eggsCalories = caloriesPerEgg * eggsRequired

console.log(eggsCalories)

let omeletCalories = eggsCalories + cheeseCalories

console.log(omeletCalories)


console.log(omeletCalories / 2)




