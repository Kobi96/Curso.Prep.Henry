gitcsdcfunction crearClasePersona() {
    // Crear una clase para construir objeto de tipo Persona.
    // el constructor debe recibir:
    // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
    class Persona {
      constructor(nombre, edad, hobbies, amigos) {
        this.nombre = nombre;
        this.edad = edad;
        this.hobbies = hobbies;
        this.amigos = amigos;
  
      }
  
      addFriend(nombre, edad) {
        // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // no debe retornar nada.
  
        this.amigos.push({
          nombre: nombre,
          edad: edad
        })
        
      }
  
      addHobby(hobby) {
        // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
        // no debe retornar nada.
  
        this.hobbies.push(hobby)
  
      }
      getFriends() {
        // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
  
        let arrayAmigos = [];
  
        for (var i = 0; i < this.amigos.length; i++){
          arrayAmigos.push(this.amigos[i].nombre)
        }
  
        return arrayAmigos;
  
      }
  
      getHobbies() {
        // Escribe una función que retorne un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
  
        var actividades = []
  
        for (var i = 0; i < this.hobbies.length; i++){
          actividades.push(this.hobbies[i]);
        }
  
        return actividades;
  
      }
  
      getPromedioEdad() {
        // Escribe una función que retorne el promedio de edad de los amigos de una persona
        // ej, si la persona tuviera estos amigos:
        // {
        //   amigos: [{
        //     nombre: 'toni',
        //     edad: 33,
        //   }, {
        //     nombre: 'Emi',
        //     edad: 25
        //   }]
        // }
        // persona.getPromedioEdad() // retorna 29
  
  
        let arrayEdades = [];
  
        for (var i = 0; i < this.amigos.length; i++){
          arrayEdades.push(this.amigos[i].edad)
        }
  
        let arrayPromedio = arrayEdades.reduce(function(acc,ele){
          return acc + ele;
        },0)
  
        return arrayPromedio / this.amigos.length;
  
      }
  
    };
  
    return Persona;
}

function filtrar(funcion){
    //Escribe una funcion filtrar en el prototipo de arrays
    //que recibe una funcion callback que devuelve true o false.
    //Filtrar los elementos de ese arreglo en base al resultado de esa funcion
    //comparadora, devolver un nuevo arreglo con los elementos filtrados.
    //NO USAR LA FUNCION FILTER DE LOS ARREGLOS.

    Array.prototype.filtrar = function(cb){
        var array = [];

        for (let i = 0; i < this.length; i++){
            const resultado = cb(this[i]);
            if(resultado){
                array.push(this[i])
            }
        }

        return array;
    }

}

function checkInventario(inventario, item) {
    // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
    // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
    // La funcion debe devolver la cantidad de items que hay.
    // Si el item no existe la funcion tiene que devolver 0 (cero).
    // Ej:
    // var inventario = [
    //   {
    //     nombre: 'tenedor',
    //     cantidad: 6
    //   },
    //   {
    //     nombre: 'cuchara',
    //     cantidad: 4,
    //   },
    // ]
    // checkInventario(inventario, 'tenedor') devuelve => 6
  
    // Tu código aca:
  
    var cantidadTotal = 0;
    
    for (var i = 0; i < inventario.length; i++){
      if (inventario[i].nombre === item){
        cantidadTotal = cantidadTotal + inventario[i].cantidad
      }
    }
  
    return cantidadTotal
    
  }

function index(){
    /*Escribe una funcion encontraIndex en el prototipo de arrays que recibe un elemento
    La funcion tiene que devolver el indice del primer elemento que coincida con el pasado
    como elemento. Si el elemento se repite dentro del array, este devuelve el indice
    del primer elemento. Si no existe ese elemento la funcion debe devolver -1.
    No usar la funcion indexOf de los arreglos.
    Ejemplo: 
    var numeros = [5 ,6 ,4, 65, 8, 4]
    numeros.encontraIndex(4) debe devolver 2 ya que el numero 4 se encuentra en la posicion
    2 dentro del array.
    numeros.encontrIndex(23) debe devolver -1 ya que ese elemento no existe en el array. */
    
    Array.prototype.encontraIndex = function(elemento){
        for (var i = 0; i < this.length; i++){
            if (elemento === this[i]){
                return i;
            } 
        }
        return -1;
    }

}

function palabraMasLarga(array){
    //La funcion llamada 'palabraMasLarga' recibe un array de strings como parametro.
    //y debe devolver la palabra mas larga entre todas las frases.
    //Ejemplo: palabrasMasLarga(["Hola string" , "Frase zazazeada"]) = "zazazeada"

    var max = "";
    var stringJunto = array.join(" ").split(" ");

    for (var i = 0; i < stringJunto.length; i++){
        if (stringJunto[i].length > max.length){
            max = stringJunto[i];
        }
    }

    return max;
}

function pedazos(array, cantidad){
    //La funcion recibe un arreglo y un numero entero. Esta debe separar el array recibido
    //en N subarreglos que tengan como maximo el numero recibido en cantidad de elementos.
    //Ejemplo:
    //  pedazos([1,2,3,4,5] , 2) = [[1,2] , [3,4] , [5]];
    //  pedazos([1,2,3,4,5] , 4) = [[1,2,3,4] , [5]];
    //  pedazos([1,2], 5) = [[1,2]];

    var arrayResultado = [];

    for (var i = 0; i < array.length; i = i + cantidad){
      arrayResultado.push(array.slice(i , i + cantidad))
    }

    return arrayResultado
}

function mayorMenosMenor(array){
    //Obtener del array el numero mayor y el menor. Devuelva la resta entre los mismos.
    //NOTA: No utilizar los metodos "Min" y "Max" de "Math".


    var max = array[0];
    var min = array[0];

    for (var i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
    }   
        else if (array[i] < min){
            min = array[i]
        }
    }

    return (max - min);
}

function mismaCantidadCaracteres(strings, caracteres){
    //La funcion recibe un arreglo de strings y un numero entero llamado caracteres.
    //Debe devolver en un array los strings que tengan el numero de caracteres coincidentes
    //con caracteres. Ejemplo:
    //mismaCantidadCaracteres(["Hola", "Hi", "Gutten Tag"], 2) debe devolver ["Hi"] ya que tiene 2 caracteres.
    //mismaCantidadCaracteres(["Js", "Pedro", "Amigo", "Parque"], 5) debe devolver ["Pedro", "Amigo"]

    var array = [];

    for (var i = 0; i < strings.length; i++){
        if (strings[i].length === caracteres){
            array.push(strings[i]);
        }
    }

    return array;
}

function repetirCaracteres(){
    //Escribe una funcion llamda "repeatCharacters" en el prototipo del objeto global String
    //que reciba como parametro un string.
    //Devuelve un string en donde cada letra se repita una vez.
    //Ejemplo: "Hola".repeatCharacters() devuelve "HHoollaa"

    var stringRepeat = "";
    
    String.prototype.repeatCharacters = function (string){
        for (var i = 0; i < string.length; i++){
            stringRepeat = stringRepeat + string[i] + string[i]
        }
    }

    return stringRepeat;
}

function sumaTodosPrimos(array){
    //La funcion recibe como argumento un array de enteros
    //y debe devolver la suma total entre todos los numeros que sean primos.

    var arrayPrimos = [];
    var suma = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] < 2) continue;
        else if (array[i] === 2){
            arrayPrimos.push(array[i]);
        }
    }

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) continue;
        else{
            arrayPrimos.push(array[i]);
        }
    }

    suma = arrayPrimos.reduce(function(acc,ele){
        return acc + ele
    },0)
    
    return suma;
}

function menorAMayor(array){
    
    var aux;

    for (var i = 0; i < array.length -1; i++){
        for (var j = 0; j < array.length -1; j++){
            if (array[j] > array[j+1]){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }

    return array;
}

function sumarImpares(array){
    
    var suma = 0;

    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 != 0){
            suma = suma + array[i]
        }
    }

    return suma;
}

function estaOffline(usuarios, nombre){
    //La funcion recibe como argumento un array de objetos llamado Usuarios y un string
    //llamada nombre. Cada objeto tiene una propiedad "nombre" que es un string
    //y otra propeidad llamada Online que es un booleano. La funcion debe retornar
    //true si el usuario se encuentra Offline, de lo contrario false.
    /* Ejemplo:
    var usuarios [
        {
            nombre: Mushu,
            Online: True
        },
        {
            nombre: Nela,
            Online: True
        }

    ];
    
    estaOffline(usuarios, "Mushu") ---> True
*/


    for (var i = 0; i < usuarios.length; i++){
        if (usuarios[i].nombre === nombre){
            if(usuarios[i].Online === false){
                return true;
            } else {
                return false;
            }
        }
    }

}

function actividadesEnComun(persona1, persona2){
    //La funcion recibe dos arrays de actividades strings llamados persona1 y persona2 y debe devolver un array
    //con las actividades en comun (aquellas que se repitan) entre persona1 y persona2.
    // Ejemplo: 
    // persona1 = ["Leer", "Comer", "Pasear", "Dormir", "Jugar"];
    // persona2 = ["Comer, "Dormir", "Futbol"];
    //actividadesEnComun(persona1, persona2) ---> ["Comer", "Dormir"]

    var arrayComun = [];

    for (var i = 0; i < persona1.length; i++){
        for (var j = 0; j < persona2.length; j++){
            if (persona1[i] === persona2[j]){
                arrayComun.push(persona1[i])
            }
        }
    }

    return arrayComun;

}

function buscaDestruye(arreglo, num){
    //La funcion recibe como argumento un array de enteros y un numero.
    //Esta funcion tiene que eliminar los numeros del array que coincidan
    //con el numero recibido como argumento. La funcion debe retornar el array
    //sin los numeros sacados.
    //Ejemplo: buscaDestruye([1,2,3,4], 2) ---> [1,3,4];
    
    var arrayFiltrado = arreglo.filter(function(ele){
        if (ele != num){
             return ele;
        }
    })

    return arrayFiltrado;
}

function sumarElTipo(array){
    //La funcion recibe un array de strings que contiene tipos de vehiculos
    //y debe retornar un objeto con la cantidad de veces que se repita cada tipo.
    //El objeto que devuelve tiene como propiedades el nombre de cada vehiculo
    //y su valor es la cantidad de veces que se repite.
    // Ejemplo: 
    // sumarElTipo(["auto", "moto", "auto"]) ---> {auto: 2, moto: 1}

    var objetoFiltrado = {auto: 0, moto: 0};

    for (var i = 0; i < array.length; i++){
        if(array[i] === "auto"){
            objetoFiltrado.auto = objetoFiltrado.auto + 1;
        } else if (array[i] === "moto"){
            objetoFiltrado.moto = objetoFiltrado.moto + 1;
        }
    }

    return objetoFiltrado;
}

function soloEnteros(array){
    //La funcion recibe un array de numeros y strings.
    //Devuelve un array con solo los numeros.

    var arrayEnteros = [];

    for (var i = 0; i < array.length; i++){
        if (typeof(array[i]) === "number"){
            arrayEnteros.push(array[i])
        }
    }

    return arrayEnteros;
}

function sumaTodos(array) {
    // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
    // y debe devolver la suma total entre todos los numeros dentro de ese rango
    // ej:
    // sumaTodos([1,3]) => 1 + 2 + 3 = 6
    // Nota: Los numeros estan ordenados de menor a mayor.
  
    // Tu código aca:
    
    var suma = 0;
  
    for (var i = array[0]; i <= array[1]; i++){
      suma = suma + i;
    }
  
    return suma;
}

function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
  
    var numString = num.toString()
    var numeroInvertido = numString.split("").reverse().join("");
  
    for (var i = 0 ; i < numString.length; i++){
      if (numString[i] === numeroInvertido[i]){
        continue;
      } else {
        return false;
      }
    
    }
  
    return true;
  
}

function cuantosRepetidos(array, elemento) {
    // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
    // Cada subarray contiene strings.
    // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
    // Ej:
    // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
    // ya que 'manzana' se repite 2 veces.
    // Nota: Podes usar for loops anidados.
  
    // Tu código aca:
  
    var repetidos = 0;
  
    for (var i = 0; i < array.length; i++){
      for (var j = 0; j < array[i].length; j++){
        if (array[i][j] === elemento){
          repetidos = repetidos + 1;
        }
      }
    }
    return repetidos;  
}
