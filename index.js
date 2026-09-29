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

const TAU = PI * 2;



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

let booleanoMix0 =
  (booleano1 || booleano2) &&
  (booleano1 || (!booleano1 && !booleano2));



// ==========================================================
// OPERADORES
// ==========================================================


// 8.- Crear variable incrementarDesp con valor 2
// y asignar su valor con POSTINCREMENTO a resultadoDesp

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;


// 9.- Crear variable incrementarAntes con valor 2
// y asignar su valor con PREINCREMENTO a resultadoAntes

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;



// ==========================================================
// BUCLES
// ==========================================================


// 10.- Crear variable contarHasta10_2 con valor 0
// Hacer un bucle FOR que incremente su valor
// hasta llegar a 10

let contarHasta10_2 = 0;

for (let i = 0; i < 10; i++) {
  contarHasta10_2++;
}


// 11.- Crear las variables postI y postJ con valor 0
// Crear un bucle que itere 11 veces
// En cada iteración se deberá sumar a postI el valor de postJ++

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
  postI += postJ++;
}


// 12.- Crear variable sumaPares con valor 0
// Crear un bucle que itere 10 veces
// Si la iteración es par, sumar i a sumaPares

let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
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

let variableValorNumerico = 10;


// 14.- Crear variable tipo const de nombre MiNombre
// con tu nombre como valor

const MiNombre = "Carlos Rodriguez Ruiz";


// 15.- Crear variable tipo const de nombre MiNumeroFav
// con un valor numérico

const MiNumeroFav = 7;



// ==========================================================
// BOOLEANOS
// ==========================================================


// 16.- Crear variable booleanoOr
// cuyo valor sea:
// booleano1 OR booleano2

let booleanoOr = booleano1 || booleano2;


// 17.- Crear variable booleanoMix1
// cuyo valor sea:
//
// (booleano1 AND (TAU / 2 sea igual a PI))
// OR
// (variableValorNumerico mayor o igual que MiNumeroFav)

let booleanoMix1 =
  (booleano1 && TAU / 2 === PI) ||
  variableValorNumerico >= MiNumeroFav;


// 18.- Crear variable seisNoEsNueve
// cuyo valor sea:
// 6 no es estrictamente igual que 9

let seisNoEsNueve = 6 !== 9;


// 19.- Crear variable booleanoMix2
// cuyo valor sea:
//
// variableValorNumerico positivo
// OR
// variableValorNumerico menor que -(MiNumeroFav * TAU)

let booleanoMix2 =
  variableValorNumerico > 0 ||
  variableValorNumerico < -(MiNumeroFav * TAU);



// ==========================================================
// OPERADORES
// ==========================================================


// 20.- Crear variable valorSuma
// cuyo valor sea:
// MiNumeroFav + variableValorNumerico

let valorSuma = MiNumeroFav + variableValorNumerico;


// 21.- Crear variable valorResta
// cuyo valor sea:
// MiNumeroFav - variableValorNumerico

let valorResta = MiNumeroFav - variableValorNumerico;


// 22.- Crear variable valorMultiplicación
// cuyo valor sea:
// MiNumeroFav * variableValorNumerico

let valorMultiplicación =
  MiNumeroFav * variableValorNumerico;


// 23.- Crear variable valorDivisión
// cuyo valor sea:
// MiNumeroFav / 3

let valorDivisión = MiNumeroFav / 3;



// ==========================================================
// BUCLES
// ==========================================================


// 24.- Crear variable contarHasta10 con valor 0
// Crear un bucle while
// hasta que contarHasta10 sea igual a 10

let contarHasta10 = 0;

while (contarHasta10 < 10) {
  contarHasta10++;
}


// 25.- Crear las variables preI y preJ con valor 0
// Crear un bucle que itere 11 veces
// En cada iteración sumar a preI el valor de ++preJ

let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
  preI += ++preJ;
}


// 26.- Crear variable sumaImpares con valor 0
// Crear un bucle que itere 10 veces
// Si la iteración es impar, sumar i a sumaImpares

let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}