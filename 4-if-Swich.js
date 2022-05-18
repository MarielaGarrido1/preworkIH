// DECLARACIONES CONDICIONALES O CONDITIONAL STATEMENTS

// 1. Declaracion de IF

if (5 > 3) {
    // Esto que esta dentro de las llaves se ejecuta si se cumple la condicion de arriba
    console.log('La condicion fue true')
  }
  
  
  const age = 17
  
  // Ejemplo 1: Bloque condicional if
  if (age < 18) {
    // something happens here
    console.log('Eres menor de edad')
  }
  
  // Ejemplo 2: Este es otro bloque condicional if
  const companyName = 'Ironhack'
  if (companyName == 'Ironhack') {
    // something happens here
    console.log('Bienvenido Ironhacker')
  }
  
  // Ejemplo 3: Otro bloque condicional mas
  const isStudent = false
  
  if(isStudent){
    console.log('Puedes acceder a los cursos')
  } else { 
    console.log('No puedes acceder porque no eres estudiante')
  }
  
  // Ejemplo 4: Se pueden anidar ifs(meter uno dentro de otro) 
  const esEstudiante = true
  const promedio = 9
  
  if(esEstudiante){
    if(promedio > 8) {
      console.log('Seras un gran desarrollador')
    }
  }
  
  // 2. Else statement se ejecuta si la condicion del if fue false
  // El else no lleva condicion
  // Ejemplo 5:
  const edad = 18
  
  if(edad >= 18){
    console.log('eres mayor de edad')
  } else {
    console.log('eres menor de edad')
  }
  
  // Ejemplo 6:
  let isStudent2 = false;
  let hardWork2 = 9;
  
  if (isStudent2) {
    console.log('Welcome to Ironhack :)');
  
    if (hardWork2 > 8) {
      console.log('You will be a great developer!');
    } else {
      console.log('You need to work harder... ');
    }
  } else {
    console.log('Necesitas registrarte en el curso')
  }
  
  // 3. else if statements
  const marimbaAge = 89
  
  if(marimbaAge < 18 && marimbaAge > 0) {
    console.log('Eres menor de edad')
  } else if (marimbaAge >= 18 && marimbaAge <= 100){
    console.log('Eres mayor de edad')
  } else {
    console.log('Introduzca una edad valida')
  }
  
  // Hacer un bloque, usando if, else if e if que revise si alguien es estudiante 
  // Si es estudiante que le de la bienvenida y despues revisa su calificacion y si tiene un promedio mayor a 8 felicitalo
  // Si es de 7 y 8 animalo a esforzarse mas
  // Si tiene 6 dale algun consejo
  // si tiene 5 o menos cagalo
  // Si el promedio no esta en el rando entre 0 y 10 dile que ingrese un promedio valdo
  // Si no es estudiante dile que se inscriba
  
  
  
  
  const estudiante = true
  const promedioEstudiante = 345
  
   if (estudiante){
     console.log('¡Bienvenido estudiante!')
     
      if (promedioEstudiante === 9 || promedioEstudiante === 10){
     console.log('¡Felicidades, tienes un gran promedio!')
     }
     else if( promedioEstudiante === 7 || promedioEstudiante === 8){
       console.log('¡Puedes esforzarte más! ;)')
     }
     else if ( promedioEstudiante === 6){
       console.log('Necesitas repasar tus temas de estudio para mejorar tu promedio ')
     }
     else if (promedioEstudiante <=5 && promedioEstudiante >=0){
       console.log('Eres un deshonor para tu casa, qué vergüenza')
     }
     else{
       console.log('Ingresa un promedio válido')
     } 
     }
  else {
    console.log('Si no eres estudiante por favor incríbete')
  }
     
  
  
  
  // Hacer un bloque de código donde la página te dé a partir 
  //de las 8 de la noche hasta las  5 de la mañana "buenas noches"
  // de las 5 de la mañana a las 12 del medio día buenos días 
  // de las 12 del medio día a las 12 
  
  const elSaludo = 1 
  
  if (elSaludo >= 11.59 &&  elSaludo <= 19.59 ){
    console.log('Buenas tardes')
  } else if(elSaludo >= 20.00 && elSaludo <= 4.59){
  console.log('Buenas noches')
  }else if ( elSaludo >= 5.00 && elSaludo <= 12 ){
    console.log('Buenos días')
  }
  else if (elSaludo >= 24 && elSaludo <=0){
    console.log( 'Ingresa una hora válida')
  }