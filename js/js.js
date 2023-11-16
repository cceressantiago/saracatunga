
/*
El TP es en grupos, pero cada nota es individual.
La nota se compone de tres partes: el correcto funcionamiento final del proyecto (45%), la dedicación individual, que se evalúa en los avances - git mediante - de cada etapa del proyecto (25%), y el conocimiento individual del desarrollo completo (30%).
En cada clase dedicada al TP se le puede pedir a cualquier integrante del equipo que explique parte del proyecto, siendo esto parte de su nota.

Se deberá prestar atención al diseño y el UX.
El trabajo se desarrollará colaborativamente, utilizando GitHub.
El repositorio deberá incluir el README.md, con el resumen del trabajo, todos los materiales utilizados, creadores y toda la información que consideren necesaria.

En todos los casos al comenzar el juego se deberá pedir el nombre del jugador.
Siempre debe estar presente el nombre junto al score en la pantalla.
En caso de jugar contra la PC, se deberá mostrar ambos score, y al finalizar el juego mostrar el ganador.

El 16 de noviembre se deberá entregar el link al repositorio de GitHub con el proyecto final y presentarlo en clase, completo y totalmente funcional


Memotest
Solicitar al usuario que nivel de dificultad quiere jugar - Bajo, Medio, Alto -, los mismos están dados por el tiempo que el usuario tiene para resolver el juego.

El tablero tiene 36 fichas, repartidas aleatoriamente en una grilla de 6x6 y el usuario tiene 5 (bajo), 3 (medio) o 2 (alto) minutos para encontrar todas las combinaciones.

Cada vez que encuentra una combinación, se anulan esas cartas y suma 10 puntos. Cada vez que se equivoca en una combinación, se vuelven a voltear ambas cartas y resta 2 puntos.
*/

var imagenes = [
        
  ["multimedia/brad y angelina/angelina.jpg", "multimedia/will smith y jada pinkett/jada-pinkett.jpg", "multimedia/coti y cone gran hermano/cone.jpg", "multimedia/rusher y la china/china-suarez.jpg", "multimedia/dani y thiago gran hermano/thiago.jpg", "multimedia/de paul y tini/de-paul.png"],
  
  ["multimedia/trueno y nicki nicole/nicki nicole.jpg", "multimedia/thimothee y kylie jenner/kylie.jpg", "multimedia/the weekend y selena gomez/selena-gomez.jpg", "multimedia/shakira y pique/pique.jpg", "multimedia/de paul y tini/tini.jpg", "multimedia/raw y la rosalia/la-rosalia.jpg"],
  
  ["multimedia/icardi y wanda/icardi.jpg", "multimedia/jack y rose/jack.jpg", "multimedia/johnny depp y amber/johnny-depp.jpg", "multimedia/justin y hailey/justinnn.png", "multimedia/johnny depp y amber/amber.jpg", "multimedia/brad y angelina/brad-pitt.jpg"],
  
  ["multimedia/dani y thiago gran hermano/dani.jpg", "multimedia/raw y la rosalia/raw.jpg", "multimedia/will smith y jada pinkett/will-smith.png", "multimedia/the weekend y selena gomez/the-weekend.jpg", "multimedia/coti y cone gran hermano/coti.jpg", "multimedia/marcos y julieta gran hermano/julieta.jpg"],
  
  ["multimedia/thimothee y kylie jenner/timothee.jpg", "multimedia/icardi y wanda/wanda.jpg", "multimedia/milei y bregman/bregman.jpg", "multimedia/kendall y bad bunny/bad-bunny.jpg", "multimedia/shakira y pique/shakira.jpg", "multimedia/rusher y la china/rusher.jpg"],
  
  ["multimedia/milei y bregman/milei.jpg", "multimedia/jack y rose/rose.jpg", "multimedia/marcos y julieta gran hermano/marcos.jpg", "multimedia/justin y hailey/hailey.png", "multimedia/trueno y nicki nicole/trueno.jpg", "multimedia/kendall y bad bunny/kendall.jpg"]
  
];


// variable que almacena las imagenes pares
var pares = [
  [0, 17], // Brad y Angelina
  [1, 20], // Jada y will
  [2, 22], // Cone y coti
  [3, 29], // China y rusher
  [4, 18], // Thiago y dani
  [5, 10], // de paul y tini
  [6, 34], // Nicki y trueno
  [7, 24], // kylie y timothee
  [8, 21], // Selena y the weekend
  [9, 28], // pique y shakira
  [11, 19], // rosalia y raw
  [12, 25], // icardi y wanda
  [13, 31], // jack y rose
  [14, 16], // johny y amber
  [15, 33], // justin y hailey
  [23, 32], // julieta poggio y marcos
  [27, 35], // bad bunny y kendall
  [26, 30], // bregman y milei
];


var cartasVolteadas = 0; //contador para saber cuantas cartas se voltean en la grilla

var primeraCarta = null; // almacena la primera carta volteada

var segundaCarta = null; // almacena la segunda carta volteada (null es valor que falta, no son letras ni numeros)

var bloqueo = false; // con el false evita que se volteen más cartas mientras se procesan las dos cartas volteadas 
                  //(osea, mientras pase el tiempo indicado hasta que se verifique si son pares o no)

var puntaje = 0; // Variable para almacenar el puntaje

var puntajeElemento = document.getElementById('puntaje'); // Elemento HTML donde se mostrará el puntaje

// Comprueba si dos cartas son iguales
function sonCartasIguales(carta1, carta2) {
  
  for (var i = 0; i < pares.length; i++) { // Recorre el array pares
    
    var valor1 = carta1.getAttribute('data-value');
    
    var valor2 = carta2.getAttribute('data-value');

    var par = pares[i]; // Encuentra una posición en el bucle que recorre el array

    if (
    
      (par[0] === Number(valor1) && par[1] === Number(valor2)) || // Compara la posición
    
      (par[0] === Number(valor2) && par[1] === Number(valor1)) // Compara la posición al revés
    
    ) {

      //las propiedades data-value vienen en string, por eso Number lo pasa a numero, (number es un constructor que lo que le pasas lo pasa a numero)
      /*
      Verifica si las cartas representan un par.
      Compara las dos cartas (carta1 y carta2)
      con los valores almacenados en par.
      
      La condición (par[0] === carta1 && par[1] === carta2)
      verifica si las cartas coinciden en el orden del array par,
      y (par[0] === carta2 && par[1] === carta1)
      verifica si coinciden en orden inverso.
      Si cualquiera de estas condiciones es verdadera,
      significa que las cartas son iguales.

      La primera carta (carta1)
      tiene que ser igual a la posición 0 del par (par[0]),
      y la segunda carta (carta2)
      tiene que ser igual a la posición 1 del par (par[1]).

      O, la primera carta (carta1)
      tiene que ser igual a la posición 1 del par (par[1]),
      y la segunda carta (carta2)
      tiene que ser igual a la posición 0 del par (par[0]).

      Esto cubre los dos casos:
      el orden original de las cartas en el par y el orden inverso.
      Si cualquiera de estas condiciones es verdadera,
      la función devuelve true,
      indicando que las cartas son un par.
      Sino, devuelve false.
      */

       // Verifica si las cartas representan un par
       carta1.setAttribute('data-status', 'resuelto'); //setAttribute se usa para modificar los atributos de un elemento HTML

       carta2.setAttribute('data-status', 'resuelto'); //establece el estado de la carta a resuelto

       return true; // Son cartas iguales

      }

  }
  
  return false; // No son cartas iguales

}


function ocultarCarta(carta) { // Oculta la imagen de una carta

  // carta.querySelector('.imagen-dorso').style.display = ' ';
  carta.getElementsByClassName('imagen-dorso')[0].style.display = 'block'; //con el block se muestra devuelta la imagen dorso, impidiendo que se vea la de abajo
   //el 0 accede al primer elemento con clase imagen-dorso

   /*
   se usa para mostrar el dorso de la carta 
   después de que se hayan comparado dos cartas 
   y no son un par.
   */
 
}


function voltearCarta() {

var carta = this; // "this" hace referencia a la carta que se hizo clic

if (carta === primeraCarta || carta.getAttribute('data-status') === 'resuelto') {
 
  return; // Evita que la misma carta se haga clic dos veces o las cartas resueltas se oculten

}

carta.getElementsByClassName('imagen-dorso')[0].style.display = 'none'; // con el none, se oculta el dorso y se muestra la imagen de la carta al hacer clic

/*
Se utiliza el classname porque 
al generar varias filas y columnas usando bucles, 
cada elemento generado en el bucle 
tendrá el mismo ID si se usa getElementById. 
El ID debe ser único en toda la página HTML. 
Por otro lado, al usar getElementsByClassName, 
se puedes aplicar la misma clase a varios elementos sin ningún problema.
*/

/*
getElementsByClassName('imagen-dorso') 
da una lista (como una fila) de todas las 'imagen-dorso' de todas las cartas. 
Pero, solo interesa la carta que se está volteando en ese momento, 
se usas [0] para decirle al programa: 
"Quiero la primera 'imagen-dorso' de esta lista". 
'primera' significa la 'imagen-dorso' 
de la carta que se está manipulando.

[0] es como decir "la 'imagen-dorso' de la carta que estoy viendo ahora mismo". 
Si no se usa [0], se estaría hablando de todas las 
'imagen-dorso' del juego, 
y eso no es lo que se quiere cuando se voltea una carta específica.
*/

if (primeraCarta === null) { 

  primeraCarta = carta;  // Esta es la primera carta volteada


} else {

  segundaCarta = carta;  // Esta es la segunda carta volteada

  
  if (sonCartasIguales(primeraCarta, segundaCarta)) { // Compara las imágenes de ambas cartas

    puntaje += 10; // Incrementar el puntaje en 10 puntos

    
    puntajeElemento.textContent = 'Puntaje: ' + puntaje; // Actualizar el elemento HTML con el puntaje actualizado

     
      bloqueo = true; // bloquea // si son cartas iguales, mantenerlas visibles 
  
      cartasVolteadas += 2; //maximo 2 cartas

      primeraCarta = null;

      segundaCarta = null; 

      if (cartasVolteadas === imagenes.length * imagenes[0].length) { //cuando quedan 0 cartas se muestra el alert

        alert('¡Ganaste! Tus puntos son: ' + puntaje);
       
      }
    
  } else {
  
    setTimeout(function () { // No son iguales, oculta las cartas después de 1 segundo
  
      ocultarCarta(primeraCarta);
  
      ocultarCarta(segundaCarta);
  
      primeraCarta = null; // resetea
  
      segundaCarta = null;
  
      bloqueo = false; // Desbloquea antes de ocultar
  
    }, 900); // 1 segundo
   
  }

}

}

function asignarEventosACartas() {// Asignar click a las cartas

  var cartas = document.getElementsByClassName('columna'); /*
                                                             Selecciona todas las cartas que tienen la clase CSS 'columna' 
                                                             y las almacena en la variable cartas.  
                                                            */

  for (var i = 0; i < cartas.length; i++) { //recorre todas las cartas obtenidas en la variable cartas.

    cartas[i].addEventListener('click', voltearCarta); // llama a la funcion mostrar carta para que actue si el usuario hace click

    /*
    addEventListener es una función 
    que permite "escuchar" eventos en elementos HTML. 
    Un evento podría ser algo como hacer click en un botón.
    En este caso se usa para asignar el evento 'click' a las cartas del juego.
    
    Para cada carta, se utiliza addEventListener 
    para decirle a la carta 
    que esté atenta al evento de click. 
    Cuando se hace click, 
    la función voltearCarta se ejecuta
    */
  }

}


/*
// Con esto obtenemos por el id el lugar donde queremos mostrar las imágenes (en el div del html) 
// y lo almacenamos en la variable "cuadricula".
var cuadricula = document.getElementById("cuadricula");

// Recorremos el arreglo de imágenes "imagenes" y creamos elementos <img> para cada una.
for (var i = 0; i < imagenes.length; i++) {

  // Creamos un nuevo elemento de imagen <img> y lo almacenamos en la variable "img".
  // este es un nuevo espacio para colocar una imagen.
  var img = document.createElement("img");

  // Configuramos la fuente (ruta) de la imagen "img.src" con la URL de imagen del arreglo "imagenes[i]".
  // Le decimos a ese espacio creado cuál es la imagen que debe mostrar.
  // en [i] le decimos qué imagen cargar.
  img.src = imagenes[i]; 

  // Agregamos la imagen como un hijo al elemento con el ID "cuadricula" (div).
  // Añadimos la imagen al lugar donde queremos mostrarla.
  // Esto coloca la imagen en la cuadrícula en la página (div). 
  cuadricula.appendChild(img);
*/



  function crearGrilla() { // Función para crear la grilla de imágenes
      
      // Obtener el elemento (div) de la cuadrícula por su ID y guardar en la variable "cuadricula"
      var cuadricula = document.getElementById("cuadricula");
      
      // filas
      for (var i = 0; i < imagenes.length; i++) { // Itera a través del array de "imagenes" para crear filas en la cuadrícula
  
          var fila = document.createElement("div"); // Crea un nuevo elemento div para representar una fila en la grilla
          fila.className = "fila"; // Asigna una clase "fila" para aplicar estilos
    
      // cada fila no contiene contenido específico, sino que actúa como un contenedor para las columnas.

      
          // columnas
          // Itera a través de las imágenes en la fila actual del array (como en el ejercicio de la piramide decreciente)
          for (var j = 0; j < imagenes[i].length; j++) {
              
                  // Crea un nuevo elemento HTML <img> y lo almacena en la variable dorso. 
                  // Esto crea un nuevo espacio en la memoria para una imagen.
                  var dorso = document.createElement("img");
                  dorso.src = "multimedia/dorso.png";
                  dorso.className = "imagen-dorso";
                  dorso.style.display = "block"; // dorso esté visible
  
                  // Creamos un nuevo elemento de imagen <img> y lo almacenamos en la variable "img".
                  // este es un nuevo espacio para colocar una imagen.
                  var img = document.createElement("img");
      
                  // Configuramos la fuente (ruta) de la imagen "img.src" con la URL de imagen del arreglo "imagenes[i]".
                  // Le decimos a ese espacio creado cuál es la imagen que debe mostrar.
                  // en [i] le decimos qué imagen cargar.
                  img.src = imagenes[i][j];

                  var columna = document.createElement("div"); // Crea un nuevo elemento div para representar una columna que contendrá la imagen

  
                  columna.className = "columna"; // Asigna una clase "columna" para aplicar estilos

                  var agregar = i*imagenes[i].length;
                  var valor = j+agregar;
                  /* j es 0 pero al ponerle + agregar se le pone automaticamente el valor de agregar*/

                  columna.setAttribute('data-value',valor);
                  // Agrega el atributo 'data-value' con el valor correspondiente del array pares
                  // columna.setAttribute('data-value', imagenes, i, j);
                  //columna.setAttribute('data-value', i, j);

                  columna.appendChild(dorso); // Agrega la imagen del dorso primero


                  // Agregamos la imagen como un hijo al elemento con el ID "cuadricula" (div).
                  // Añadimos la imagen al lugar donde queremos mostrarla.
                  // Esto coloca la imagen en la cuadrícula en la página (div). 
                  columna.appendChild(img);

                  // Agrega la columna a la fila
                  fila.appendChild(columna);
                // Agrega la columna a la última fila
      
              }
              
              cuadricula.appendChild(fila); // Agrega la fila a la cuadrícula

      }   

      // Cambia el estilo de la cuadrícula para mostrarla (estilo "display" en "grid")
      cuadricula.style.display = "grid"; // Muestra la cuadrícula
  }
  
    document.getElementById("ComenzarButton").onclick = function () { // Cuando un usuario hace clic en el botón "Comenzar", queremos que ocurra lo siguiente:

    document.getElementById("TituloPrincipal").style.display = "none"; // Oculta el <h1> principal después de apretar comenzar
    
    document.getElementById("ComenzarButton").style.display = "none"; // Oculta el botón "Comenzar" después de apretar comenzar
    
    document.getElementById("Divuser").style.display = "block"; // Muestra el div de ingreso de nombre

    
      /*
      Esta línea de código hace que el elemento con el ID "Divuser" se muestre en la página. 
      El estilo "display" se establece en "block", 
      lo que significa que se mostrará como un bloque en la página (visible).
      */
  };


  document.getElementById("AceptarButton").onclick = function () {  // Cuando se hace clic en el botón "Aceptar" (para ingresar el nombre)

      // Selecciona el elemento de entrada de nombre por su ID y obtén el valor que el usuario ha ingresado.
      var nombre = document.getElementById("NombreInput").value;
      // Actualiza el mensaje de bienvenida con el nombre
      /*
      declarando una variable llamada "nombre" 
      y asignándole el valor del campo de entrada de texto con el ID "NombreInput". 
      La propiedad .value se utiliza para obtener el contenido (texto) 
      ingresado por el usuario en ese campo.
      */

      document.getElementById("BienvenidaUsuario").textContent = "¡" + nombre + "!";// Actualiza el mensaje de bienvenida
      //textContent se usa para acceder y modificar el contenido de texto 

      document.getElementById("Divuser").style.display = "none";  // Oculta el div de ingreso de nombre

      document.getElementById("MensajeBienvenida").style.display = "block"; // Muestra el mensaje de bienvenida

      document.getElementById("ElegirNivel").style.display = "block"; // Muestra la selección de nivel

  };


  function mostrarTiempoRestante(tiempo) { // Función para mostrar el tiempo restante en el reloj

  var reloj = document.getElementById("Reloj"); // Obtiene el elemento del reloj del html

  reloj.style.display = "block"; // Muestra el reloj configurando su estilo a "block" (visible)

  var minutos = Math.floor(tiempo / 60); //Calcula los minutos y segundos a partir del tiempo restante

  var segundos = tiempo % 60;


  //Formatea los minutos y segundos en dos dígitos (agrega un cero si es necesario)
  /*
  Esto es para que el reloj se vea de la forma tradicional 
  (por ejemplo, "05:03" en lugar de "5:3").
  */

  /*
  minutosFormateados = minutos < 10 ? "0" + minutos : minutos:  
  Si minutos es menor que 10, se agrega un "0" antes del valor de minutos 
  de lo contrario, se deja el valor de minutos sin cambios (osea 10, si es una unidad se muestra con 0 adelante).

  segundosFormateados: (lo mismo pero en segundos)
  si segundos es menor que 10, se agrega un "0" antes del valor de segundos, 
  de lo contrario, se deja el valor de segundos sin cambios.
  */

  var minutosFormateados = minutos < 10 ? "0" + minutos : minutos; 

  /*El signo de interrogación (?) se utiliza en estas líneas de código como parte de una expresión condicional,
  Lo que se está haciendo es verificar si minutos o segundos son menores que 10 (como in if else)
  */
  var segundosFormateados = segundos < 10 ? "0" + segundos : segundos;

  // Actualiza el contenido del reloj con los minutos y segundos formateados
  reloj.textContent = minutosFormateados + ":" + segundosFormateados;

  if (tiempo > 0) { //Si tiempo es mayor que 0, significa que todavía queda tiempo en el juego.
  
      // Paso 6: Si queda tiempo, resta un segundo y programa una llamada a sí misma después de 1 segundo
  
      setTimeout(function () { // La función setTimeout se utiliza para esperar 1 segundo 
                              //(1000 milisegundos) y luego llamar nuevamente a mostrarTiempoRestante con tiempo - 1
  
          mostrarTiempoRestante(tiempo - 1); //Esto es una cuenta regresiva de 1 segundo a la vez y, actualiza el reloj para mostrar el nuevo tiempo restante.
  
      }, 1000); // Espera 1 segundo (1000 milisegundos) para actualizar el tiempo restante
  
  
  } else {
  
      alert("¡Tiempo agotado! El juego ha terminado."); // El tiempo se acabo, muestra un alert

  }
}

  document.getElementById("PrincipianteButton").onclick = function () { // Cuando se hace clic en el botón "Principiante"

      /*
      Aca se esta asociando una función al evento "onclick" 
      del botón con el ID "PrincipianteButton". 
      Cuando el usuario hace clic en este botón, 
      la función se ejecutará.
      */

      var nombre = document.getElementById("NombreInput").value; //esto está obteniendo el valor ingresado en el campo de nombre.


      // Actualiza el mensaje de bienvenida según el nivel elegido
      document.getElementById("BienvenidaUsuario").textContent = "Principiante" + "\n" + "¡" + nombre + ", encontrá la pareja más LAM!";
      
      document.getElementById("ElegirNivel").style.display = "none";  // Oculta los botones de nivel

      crearGrilla() //llamo  a la funcion para que se muestre la grilla

      // Iniciar la cuenta regresiva (5 minutos para el nivel "Bajo")
      var tiempoRestante = 5 * 60; // 5 minutos
      
      mostrarTiempoRestante(tiempoRestante);

      asignarEventosACartas();
      
      document.getElementById("puntaje").style.display = "block";
  };


  // Evento click para el botón "Medio"
  document.getElementById("MedioButton").onclick = function () {
  
      nombre = document.getElementById("NombreInput").value;
      
      // Actualiza el mensaje de bienvenida según el nivel elegido
      document.getElementById("BienvenidaUsuario").textContent = "Medio" + "\n" + "¡" + nombre + ", encontrá la pareja más LAM!";
      /*Actualizamos el contenido del elemento con el ID "BienvenidaUsuario" 
      y establecemos un mensaje de bienvenida personalizado que incluye el nivel 
      (en este caso, "Principiante") y el nombre del usuario. 
      El "\n" es utilizado para agregar un salto de línea.
      Es como un <br> pero para javascript*/

      document.getElementById("ElegirNivel").style.display = "none";  // Oculta los botones de nivel



      crearGrilla() //llamo  a la funcion para que se muestre la grilla

      // Iniciar la cuenta regresiva (3 minutos para el nivel "Medio")
      tiempoRestante = 3 * 60; // 3 minutos // creo q no hace falta el tiempo restante, ya se declaro antes
      
      mostrarTiempoRestante(tiempoRestante);
  
      asignarEventosACartas();

      document.getElementById("puntaje").style.display = "block";

  };



  // Evento click para el botón "Experto"
  document.getElementById("ExpertoButton").onclick = function () {

      nombre = document.getElementById("NombreInput").value;
      
      // Actualiza el mensaje de bienvenida según el nivel elegido
      document.getElementById("BienvenidaUsuario").textContent = "Experto" + "\n" + "¡" + nombre + ", encontrá la pareja más LAM!";
      
      document.getElementById("ElegirNivel").style.display = "none"; // Oculta los botones de nivel
      
      crearGrilla() //llamo  a la funcion para que se muestre la grilla


      document.getElementById("Reloj").style.display = "block";// Muestra el reloj


      // Inicia la cuenta regresiva (2 minutos para el nivel "Experto")  
      tiempoRestante = 2 * 60; // 2 minutos
      
      mostrarTiempoRestante(tiempoRestante);
      
      asignarEventosACartas();

      document.getElementById("puntaje").style.display = "block"; // Muestra el elemento del puntaje después de elegir el nivel

      };
