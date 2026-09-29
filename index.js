// ==========================================================
// BIKRAM JAVASCRIPT
// ==========================================================



// ==========================================================
// VARIABLES
// ==========================================================


// 1.- Crear variable tipo let de nombre variableSinValor
// declarada sin valor

let variableSinValor;

// 2.- Crear 2 variables tipo let de nombres booleano1 y booleano2
// con valores booleanos

let booleano1 = true;
let booleano2 = false;

// 3.- Crear variable tipo const de nombre PI
// declarada con valor 3.14

const PI = 3.14;

// 4.- Crear variable tipo const de nombre TAU
// declarada con valor 2 veces PI

const TAU = PI * PI;



// ==========================================================
// BOOLEANOS
// ==========================================================


// 5.- Crear variable booleanoAnd
// cuyo valor sea:
// booleano1 AND booleano2

let booleanoAnd = booleano1 && booleano2;

// 6.- Crear variable booleanoNot
// cuyo valor sea:
// NO booleano1

let booleanoNot = !booleano1;

// 7.- Crear variable booleanoMix0
// cuyo valor sea:
// (booleano1 OR booleano2)
// AND
// (booleano1 OR (NO booleano1 AND NO booleano2))

let booleanoMix0 =(booleano1||booleano2)&&(booleano1 ||(!booleano1 && !booleano2))





// ==========================================================
// OPERADORES
// ==========================================================


// 8.- Crear variable incrementarDesp con valor 2
// y asignar su valor con POSTINCREMENTO a resultadoDesp
//
// Recuerda:
// postincremento -> variable++

let incrementarDesp = 2
let postincremento = incrementarDesp++

// 9.- Crear variable incrementarAntes con valor 2
// y asignar su valor con PREINCREMENTO a resultadoAntes
//
// Recuerda:
// preincremento -> ++variable

let incrementarAntes = 2
let resultadoAntes = ++incrementarAntes;



// ==========================================================
// BUCLES
// ==========================================================


// 10.- Crear variable contarHasta10_2 con valor 0
// Hacer un bucle FOR que incremente su valor
// hasta llegar a 10

let contarHasta10_2 = 0;
for (let i = 0; i <= 10; i++) {
    contarHasta10_2++;   
}
// postI = 0
// postJ = 0
//
// Crear un bucle que itere 11 veces
//
// En cada iteración:
// sumar a postI el valor de postJ++
//
// Recuerda que postJ++ primero usa el valor
// y después incrementa postJ

let postI = 0;
let postJ = 0;

for (let i = 0; i <= 11; i++) {
    postI =+ postJ++;
}


// 12.- Crear variable sumaPares con valor 0
//
// Crear un bucle que itere 10 veces:
// i < 10
//
// Si i es PAR:
// sumar i a sumaPares
//
// Pista:
// para comprobar si un número es par puedes usar %

let sumaPares = 0;
for (let i = 0; i < 10; i++) {
   if(i % 2 === 0){
    sumaPares += i;
   }
    
}



// ==========================================================
// PROYECTO INDIVIDUAL
// ==========================================================



// ==========================================================
// VARIABLES
// ==========================================================


// 13.- Crear variable tipo let de nombre variableValorNumerico
// con cualquier valor numérico

let variableValorNumerico = 0;

// 14.- Crear variable tipo const de nombre MiNombre
// con tu nombre como valor

const MiNombre = "Carlos Rodriguez Ruiz";

// 15.- Crear variable tipo const de nombre MiNumeroFav
// con un número que tú elijas

let MiNumeroFav = 7;



// ==========================================================
// BOOLEANOS
// ==========================================================


// 16.- Crear variable booleanoOr
// cuyo valor sea:
// booleano1 OR booleano2

let booleanoOr = booleano1 || booleano2;

// 17.- Crear variable booleanoMix1
//
// Debe comprobar:
//
// (booleano1 AND (TAU / 2 es igual a PI))
// OR
// (variableValorNumerico es mayor o igual que MiNumeroFav)

let booleanoMix1 = (booleano1 && (TAU / 2 === PI))||(variableValorNumerico >= MiNumeroFav)

// 18.- Crear variable seisNoEsNueve
//
// Debe comprobar:
// 6 NO es estrictamente igual a 9
//
// Recuerda el operador de "distinto estricto"

let seisNoEsNueve = 6 !== 9;

// 19.- Crear variable booleanoMix2
//
// Debe comprobar:
//
// variableValorNumerico es mayor que 0
// OR
// variableValorNumerico es menor que -(MiNumeroFav * TAU)


let booleanoMix2 = (variableValorNumerico > 0 )


// ==========================================================
// OPERADORES
// ==========================================================


// 20.- Crear variable valorSuma
//
// Debe ser:
// MiNumeroFav + variableValorNumerico



// 21.- Crear variable valorResta
//
// Debe ser:
// MiNumeroFav - variableValorNumerico



// 22.- Crear variable valorMultiplicación
//
// Debe ser:
// MiNumeroFav * variableValorNumerico



// 23.- Crear variable valorDivisión
//
// Debe ser:
// MiNumeroFav / 3





// ==========================================================
// BUCLES
// ==========================================================


// 24.- Crear variable contarHasta10 con valor 0
//
// Crear un bucle WHILE
// que aumente contarHasta10
// hasta que sea igual a 10



// 25.- Crear:
// preI = 0
// preJ = 0
//
// Crear un bucle que itere 11 veces
//
// En cada iteración:
// sumar a preI el valor de ++preJ
//
// Recuerda:
// ++preJ primero incrementa
// y después utiliza el valor



// 26.- Crear variable sumaImpares con valor 0
//
// Crear un bucle que itere 10 veces:
// i < 10
//
// Si i es IMPAR:
// sumar i a sumaImpares
//
// Pista:
// utiliza % para comprobar si es impar