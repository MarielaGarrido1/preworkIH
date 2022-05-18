/**
 * STRINGS
 * -¿qué son?
 * -¿cómo crearlos?
 * -¿como manipular string y substring?
 * 
 */
//Un estring es una cadena de carácteres que debe siempre estar entre comillas, o QUOTES las cuales pueden ser:
// "" Double Quotes, sirven para diferenciarlas del acento
//'' Single Quotes,
//`` Backticks, nos ayuda a usar la interpolación

//Ejemplo de la FORMA 1:("", ''):
const pais = 'Ukraine'
console.log('El país es:', pais)
const otroPais = 'Venezuela'
console.log("El otro país es:",otroPais)

//Ejemplo de la FORMA 2:(``):
const precio = 177
console.log(`El precio del producto es: ${precio} pesos mexicanos.`)

//(además los backtick´s respetan los saltos de línea, por ejemplo:)
const ubicaciones = `
-Madrid
-Barcelona
-Miami
-Mexico City
-Paris 
-Berlin `
console.log(`multiline string and interpolation: ${ubicaciones}`)

//LA CONCATENACION es irle sumando más valores a las variables con ( += )
let contenedorVacio= ' '
contenedorVacio +=  '¡Hola querido estudiante!'
contenedorVacio += '¿Cómo estás?'
console.log( contenedorVacio )


//INTERPOLACIÓN, muy parecido a la concatenación pero ésta se ejecuta con bacticks
let edad3 = 24
console.log(`Yo tengo ${edad} años de edad`)
console.log(`Y tú, ¿cuántos años tienes?`) 
console.log('tengo', edad, 'años de edad')
//forma 1
console.log(`Yo tengo ${edad + 1 } años de edad`)
//en éste ejemplo estoy sumando uno directamente a la variable edad, desde las llaves, lo que supondría que no se guarden los cambios.


//forma 2
edad += 1
console.log(`Yo tengo ${edad} años de edad`)
// en este otro ejemplo estoy asignando un nuevo valor a la variable edad, antes de llamarla.


//PROPIEDAD .length, ésta nos dice el número de caracteres en un string (ésta propiedad no lleva paréntesis)
const afirmacion = 'Amamos el desarrollo web'
console.log(`"${afirmacion}" es un string con un largo de: ${afirmacion.length} carácteres`)


//MÉTODO .toUpperCase()
//Transforma los carácteres de un string a mayúsculas
let miNombre= 'Luz Mariela'
let uppercased = miNombre.toUpperCase()
console.log(uppercased)

//Cómo acceder a los carácteres de un string por su índice
// (El índice es la posición que tienen las letras de un string) y empiezan a contarse desde el número 0, es decir la posición del primer carácter de un string empezará con el numero 0.

const saludando = 'Hello'
console.log(saludando [0])
console.log(saludando[1])
console.log(saludando[2])
console.log(saludando[3])
console.log(saludando[4])
//si introduces una posición que no existe obtienes un "undefined"
console.log(saludando[9])
console.log(saludando[-2])


//METODO  .indexof('substring')
// de la cadena principal me devuelve la posicion donde inicia la subcadena que estoy ingresando
// .indexOf te devuelve la posición de la primera coincidencia que encuentre
const fraseFav = 'let me see'
console.log(fraseFav.indexOf('let')) //0
console.log(fraseFav. indexOf('me')) //4
console.log(fraseFav.indexOf('ee'))


//MÉTODO .slice (start,end)
//extrae una parte del string como uno nuevo, sin modificar al original
//indices del start y end van dentro del paréntesis y esparados por una coma
let declaracion = "I am the Ironhacker and I can't wait for this course start!!!"

//cosas curiosas de .slice( X,Y )
//1._La posición final no la cuenta
console.log(declaracion.slice(0,19))
console.log(declaracion.indexOf('r '))
console.log(declaracion.indexOf('!!!'))
console.log(declaracion.slice(41, 58))
//2._Podemos evitar poner la posición final y tomará como final el último caracter de forma automática
console.log(declaracion.slice(34))
//3._ Si pones un número negativo como posición inicial empieza a contar desde el final, y el final es el final
console.log(declaracion.slice(-8)) 

//Ejercicio
let turtle1 = 'Leonardo '
let turtle2 = 'Raphael '
let turtle3 = 'Donatello '
let turtle4 = 'Michelangelo '

let allTurtles = ''
 allTurtles += turtle1 += turtle2 += turtle3 += turtle4
 console.log(allTurtles)
 
//en qué posicion empieza Donatello
//EL largo de allTurtles
console.log(` ${allTurtles.slice(17,27)} está en la posición ${allTurtles.indexOf('Donatello')} del string ${'"allTurtles"'} `)
console.log(`El largo de ${'"allTurtles"'} es de ${allTurtles.length} carácteres.`)


//Crear dos variables:
//a._ primerasDosTortugas
//b._ segundasDosTortugas
console.log(allTurtles.indexOf('Don'))
let primerasDosTortugas = allTurtles.slice(0,16)
console.log(primerasDosTortugas)
let segundasDosTortugas = allTurtles.slice(17)
console.log(segundasDosTortugas)
console.log(`Las primeras dos tortugas son ${'primerasDosTortugas'} y las segundas dos tortugas son ${'segundasDosTortugas'}`)