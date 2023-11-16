Trabajo Práctico Final Número 4
Programación multimedial

Tema
Desarrollo de un videojuego
Estudiantes
Agustina Ferraro
Santiago Caceres
Brisa Rodriguez
Ramona Ikonicoff
Docente
Belén López del Monte
Apertura del Trabajo
Jueves, 17 de Octubre de 2023, 09:00
Cierre del Trabajo
Jueves, 16 de Noviembre de 2023, 09:00
Año
2023



Índice
1. Condiciones…………………….……………………………………………....………………….…. 3
2. Consigna..……...……………...………………………………………………..………………….…. 4
3. Información sobre el trabajo……………………………………………….………………………... 5
4. Roles de cada integrante…….……..……………………….…..…...………………………………7
5. Materiales utilizados...…...…………..……………………….…..…...….…………………………. 8

















Condiciones
El TP es en grupos, pero cada nota es individual.

La nota se compone de tres partes: el correcto funcionamiento final del proyecto (45%), la dedicación individual, que se evalúa en los avances - git mediante - de cada etapa del proyecto (25%), y el conocimiento individual del desarrollo completo (30%).

En cada clase dedicada al TP se le puede pedir a cualquier integrante del equipo que explique parte del proyecto, siendo esto parte de su nota.

Se deberá prestar atención al diseño y el UX.

El trabajo se desarrollará colaborativamente, utilizando GitHub.

El repositorio deberá incluir el README.md, con el resumen del trabajo, todos los materiales utilizados, creadores y toda la información que consideren necesaria.

En todos los casos al comenzar el juego se deberá pedir el nombre del jugador.

Siempre debe estar presente el nombre junto al score en la pantalla.

En caso de jugar contra la PC, se deberá mostrar ambos score, y al finalizar el juego mostrar el ganador.

Entrega
El 16 de noviembre se deberá entregar el link al repositorio de GitHub con el proyecto final y presentarlo en clase, completo y totalmente funcional.





Consigna
Memotest
Solicitar al usuario que nivel de dificultad quiere jugar - Bajo, Medio, Alto -, los mismos están dados por el tiempo que el usuario tiene para resolver el juego.

El tablero tiene 36 fichas, repartidas aleatoriamente en una grilla de 6x6 y el usuario tiene 5 (bajo), 3 (medio) o 2 (alto) minutos para encontrar todas las combinaciones.

Cada vez que encuentra una combinación, se anulan esas cartas y suma 10 puntos. Cada vez que se equivoca en una combinación, se vuelven a voltear ambas cartas y resta 2 puntos.
















Información sobre el trabajo
Resumen del trabajo

Para poder trabajar en equipo, creamos un repositorio en Github.
https://github.com/agustiinaferraro/final 

Para comenzar con el trabajo, decidimos buscar referencias de otros juegos de Memotest. Ejemplos: 
https://www.youtube.com/watch?v=wrYXSXd3mMA&ab_channel=CodingTube 
https://www.juegosinfantilespum.com/memoria/09-frutas-tramas.php
https://www.juegosdememoriagratis.com/adultos/01-simples/s-japon.html
https://www.memo-juegos.com/juegos-de-memoria-online/ninos/juego-ninos-de-8-anos/memory-frozen-2 
https://www.juegosdememoriagratis.com/adultos/03-dificiles/d-simbolos.html 
https://www.juegosdememoriagratis.com/adultos/03-dificiles/d-simbolos.html 

Luego creamos una carpeta en Google Drive para compar informacion util sobre el trabajo: https://drive.google.com/drive/folders/1miF1YYu5FvadqMAtREpmzDjd17tkHE-S 

Necesitábamos saber como iba a verse el código, por eso creamos un documento en Figma:
https://www.figma.com/file/o9V5c19UsPgk7wqL3QNdt0/final-programacion-multimedial-1?type=design&node-id=0-1&mode=design&t=wOdmRQVPmVWBgkZY-0 

Una vez que estaba claro lo que debíamos hacer, comenzamos a desarrollar el código.
Desarrollo del código.
Objetivo del Juego
El juego consiste en encontrar todas las parejas de cartas en el menor tiempo posible.
Se presentan cartas con imágenes y el jugador debe hacer click en dos cartas para ver si coinciden.
Si las cartas coinciden, se mantienen visibles. Si no coinciden, se vuelven a ocultar después de un breve período.

Estructura del Código

Configuración Inicial
Se define un conjunto de imágenes para las cartas en un array multidimensional llamado ¨imagenes¨.
Se define otro array multidimensional llamado ¨pares¨ con las posiciones del array ¨imagenes¨ que representan las cartas que forman una pareja en el juego.

Manejo de Cartas
Se utiliza la función ¨ocultarCartas¨ para controlar la visibilidad de las cartas.

Las funciones toman elementos de carta (divs) como parámetros y manipulan el estilo para mostrar u ocultar las imágenes (en este caso se oculta la imagen el dorso de las cartas).

Lógica del Juego
Se utiliza la función ¨sonCartasIguales¨ para verificar si dos cartas seleccionadas son iguales, comparándolas entre sí.
Se emplea un temporizador (setTimeout) para controlar el tiempo entre mostrar y ocultar cartas no coincidentes.

Interfaz de Usuario
Se solicita al usuario su nombre al inicio del juego.
Se muestra un mensaje de bienvenida personalizado según el nivel seleccionado (Principiante, Medio, Experto).
Se presenta una cuadrícula de cartas en la interfaz.

Niveles de Dificultad
Se implementan tres niveles de dificultad: Principiante, Medio, y Experto.
Cada nivel tiene un límite de tiempo diferente para completar el juego.

Temporizador
Se muestra un reloj que cuenta el tiempo restante para cada nivel.
Cuando se agota el tiempo, se muestra un mensaje indicando que el juego ha terminado.
Flujo del Juego
El jugador selecciona un nivel al inicio.
Se inicia un temporizador y se muestra la cuadrícula de cartas.
El jugador hace click en dos cartas a la vez.
Se verifica si las cartas son iguales y se procede en consecuencia.
Si son iguales, se suman 10 puntos.
El juego termina cuando se encuentran todas las parejas o se agota el tiempo.

Roles de cada integrante
Agustina Ferraro
Creación de las cartas.
Desarrollo del prototipo en Figma.
Desarrollo del documento del trabajo
Desarrollo del código JS
Desarrollo del html
Orden de las cartas.
Encargada de brindar el material utilizado.
Desarrollo del Css
Desarrollo de la presentación

Santiago Cáceres
Encargado de brindar referencia de juegos
Desarrollo del prototipo en Figma
Desarrollo de la presentación
Desarrollo del Css

Brisa Rodriguez
Encargada de brindar referencias de juegos.
Desarrollo del Css

Ramona Ikonicoff
Creación de las cartas
Orden de las cartas
Desarrollo del Css

Materiales utilizados
Los materiales utilizados para realizar este trabajo fueron los siguientes:

https://docs.google.com/presentation/d/1JLELImPZ8lvJRKgDByrGAojFaJQAimARfF-HbqWqx1A/edit#slide=id.g1e91ce7a80d_0_9 

https://www.w3schools.com/ 

https://developer.mozilla.org/es/ 

https://github.com/ 

https://drive.google.com/drive/my-drive?hl=es 

https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1293372737424793879 


