// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  // [34, 5, 6]
  //  0   1  2
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let lastItem = array.pop();

  return lastItem;

  // Otra posibilidad:
  // return array[array.length-1]
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  let nuevoArray = [];

  for (i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1; // Otra posibilidad = nuevoArray.push(array[i] + 1)
  }

  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);

  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);

  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(" "); // Se agrega el espacio como elemento separador, tambien podria ser una coma o un punto
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for (i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }

  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let suma = 0;

  for (i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }

  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  promedioResultados = 0;

  for (i = 0; i < resultadosTest.length; i++) {
    promedioResultados = promedioResultados + resultadosTest[i];
  }

  return promedioResultados / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let nuevoArray = numeros[0]; // Almacenamos el primer valor para poder compararlo con los demas en el for

  for (let i = 1; i < numeros.length; i++) {
    //Empieza a iterar desde la segunda posicion y compara todo con la primera
    if (numeros[i] > nuevoArray) {
      nuevoArray = numeros[i]; // Si alguna posicion es mas grande que numeros[0], se intercambia por i
    }
  }

  return nuevoArray;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length < 1) return 0; // Se determina que arguments tenga mas de un argumento
  var total = 1; // se multiplican
  for (var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  let nuevoArray = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      nuevoArray++; // Sube la cantidad de nuevoArray por cada elemento de arreglo que sea mayor a 18
    }
  }
  return nuevoArray;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí

  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let strNum = n.toString(); // Convertimos el numero a string

  if (strNum.charAt(0) === "9") {
    return true;
  } // Seleccionamos el primero con charAt

  return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  for (var i = 0; i < arreglo.length - 1; i++) {
    // -1 para que se detenga antes del ultimo
    if (arreglo[i] !== arreglo[i + 1]) {
      // Suma 1 y asi va comparando 1 elemento con el otro
      return false;
    }
  }
  return true;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let meses = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      meses.push(array[i]);
    }
  }

  if (meses.length !== 3) {
    return "No se encontraron los meses pedidos";
  } // Se determina que meses punto length debe tener 3 valores

  return meses;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }

  return nuevoArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    // Se itera por la cantidad de veces solicitada, 0 cuenta
    suma = suma + 2; // se aplica una variable ya que numero no es un array
    if (suma === i) break;
    else {
      array.push(suma);
    }
  }
  if (i < 10) {
    // en caso de que se haya interrumpido la iteracion se devuelve el mensaje
    return "Se interrumpió la ejecución";
  } else {
    return array;
  }
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    if (i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
