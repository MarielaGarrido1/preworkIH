
// Previously on Avatar
const name = 'Ironhack'; // => string
const age2 = 25; // => number

//boolenano son valores de sí y no
// Quieres un chocolate? YES
// Redy for ou? NOU

// si = true ; no = false
let powerOn = true; // => boolean
let isRaining = false; // => boolean

// OPERADORES DE COMPARACION (1-8)
// Comparar dos valores y ver si se cumple la comparacion

// 1. (==) Retorna true si las expresiones tienen el mismo valor
console.log(3 == 3) // true
console.log(3 == 1) // false
console.log(3 == '3') // true

// 2. (===) Retorna true si las expresiones tienen el mismo valor y tipo de dato
console.log(3 === 3) // true
console.log(3 === 1) // false
console.log(3 === '3') // false

// 3. (!=) Retorna true si las expresiones no tienen el mismo valor
// != diferente
console.log(3 != 1) // true
console.log(3 != 3) // false

// 4. (!==) Retorna true si las expresiones no tienen el mismo valor y el mismo tipo de dato
// !== estrictamente diferente
console.log(3 !== 1) // true
console.log(3 !== 3) // false

// 5. (<) Retorna true si la exp1 es menor que exp2
console.log(3 < 5) // true
console.log(3 < 1) // false
console.log(3 < 3) // false

// 6. (>) Retorna true si la exp1 es mayor que exp2
console.log(3 > 1) // true
console.log(3 > 5) // false
console.log(3 > 3) // false

// 7. (<=)Retorna true si la exp1 es menor o igual que exp2
console.log(3 <= 5) // true
console.log(3 <= 1) // false
console.log(3 <= 3) // true

// 8. (>=) Retorna true si la exp1 es mayor o igual que exp2
console.log(3 >= 1) // true
console.log(3 >= 5) // false
console.log(3 >= 3) // true


// OPERADORES LOGICOS
// AND = && -> EXP1 && EXP2 
// Retorna true si ambas expresiones son true; de otra forma retorna falso

// dickParada && redyForOu - true
let edad2 = 24
console.log(edad >= 18 && edad < 65) // true
console.log(edad >= 0 && edad < 18) // false
//            true    &&   false // false

// OR = || -> EXP1 || EXP2 
// Retorna true si una de las dos expresiones es true; de otra forma retorna falso

// dickParada && redyForOu - true
console.log(edad >= 18 || edad < 65) // true
console.log(edad >= 0 || edad < 18) // true
//            true    &&   false // false

// NOT (!EXP)
// Retorna el valor booleano opuesto de la expresion. Si el valor o expresion es true retorna false, Si es false retorna true

console.log(!true) // false
console.log(!false) // true
console.log(! 4 > 3) // false
console.log(! 3 > 4) // true

// Ejercicios
console.log(true && false); // ==> false
console.log(11 % 3 === 2); // ==> true
console.log(false || true); // ==> true
console.log(!true || false); // ==> false
console.log(17 == '17'); // ==> true
console.log(123 === '123'); // ==> false


// Truthy and Falsy
const someString = 'h'
let someNumber

console.log(someString && 5 > 3)

// if (){
  console.log('Esto se ejecuta')


 // Todos los valores son truthy exepto los de abajo que son falsy

/**
    0     The Number zero
    ''  An empty String
    false  The Boolean value: false
    undefined 
    null 
    NaN 

*/