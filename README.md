Una startup está decidida a traer a Europa productos de cosmética "Made in South Korea" para su comercialización. Van a empezar vendiendo productos para el cuidado facial a través de tiendas físicas y van a iniciar su andadura en Sevilla. Están en la fase desarrollo de la aplicación que gestionará los productos. Ayuda a la startup a hacer las siguientes tareas:

Ejercicio 1: Clase Producto.

Implementa la clase Producto que representará los productos de la startup.

Atributos y métodos
Tipo	Identificador	Características	Restricciones
Atributo	referencia	Un número que representa la referencia del producto.	
Debe ser un número y no puede tener más de 3 dígitos.

Atributo	
 marca

Una cadena que representa la marca del producto.	
 

Atributo	
nombre

Una cadena que representa el nombre del producto.	
 

Atributo	
ingredienteEsencial

Un objeto literal con dos propiedades, una cadena nombre y número porcentaje que representan el nombre del ingrediente principal del producto y el porcentaje del mismo que contiene el producto.	
 

Método	constructor	Recibe la referencia, la marca, el nombre y el ingrediente esencial del producto.	
Método

toString	Devuelve la referencia, la marca, el nombre y el ingrediente esencial del producto como una cadena con el formato mostrado en la imagen que aparece más abajo.
 


Ejercicio 2: Clase ProductoFacial.

Implementa la clase ProductoFacial que representará los productos para el cuidado facial. Esta clase hereda de la clase Producto y añade los siguientes atributos y métodos:

Atributos y métodos
Tipo	Identificador	Características	Restricciones
Atributo	
tipo

Una cadena que representa el tipo de producto de cuidado facial.	
Sólo admite los valores: "limpiador", "serum", "hidratante" y "mascarilla". Puedes crear un atributo adicional para recoger estos posibles valores.

Método	constructor	Recibe la referencia, la marca, el nombre, el ingrediente esencial y el tipo del producto facial.	
Método

toString	Devuelve la referencia, la marca, el nombre y el ingrediente esencial usando el método toString de la clase Producto y el tipo del producto facial como una cadena con el formato mostrado en la imagen que aparece más abajo.	

Salida por consola del método toString de la clase ProductoFacial
Salida por consola del método toString de la clase ProductoFacial
Salida por consola del método toString de la clase ProductoFacial
Ejercicio 3: Clase Tienda.

Implementa la clase Tienda que representará las tiendas físicas en las que se venderán los productos

Atributos y métodos
Tipo	Identificador	Características	Restricciones
Atributo	
ciudad

Una cadena que representa la ciudad en la que estará la tienda física.	
 

Atributo	
productosFaciales

Un array de objetos ProductoFacial que representa el conjunto de productos faciales que se venderán en la tienda.	
Método	constructor	Recibe la ciudad en la que se ubicará la tienda y crea un array de productos faciales vacío.	
Método	introducirProductoFacial	Recibe un objeto de la clase ProductoFacial y lo añade al array productos faciales. El objeto sólo se añadirá si no existe ya un producto con la misma referencia en el array. Utiliza el método some para comprobarlo. Si se encuentra un producto igual, el método devolverá false, en caso contrario, se añadirá el producto al array y se devolverá true.	El objeto recibido sólo puede ser de la clase ProductoFacial.
Método	eliminarProductoFacial	Recibe el número de referencia de un producto y lo elimina del array. Si en el array no hay ningún producto con la referencia recibida, el método devolverá false. Utiliza la función findIndex para realizar la comparación. Si hay un producto con dicha referencia, se eliminará del array y el método devolverá true. Elimina el producto usando la función splice.	
Método	
ordenarProductos

FacialesPorReferencia

Ordena el array de productos faciales por número de referencia de mayor a menor. Utiliza el método sort.	
Método	
obtenerProductos

FacialesPorTipo

Crea un array bidimensional que guarde en cada fila los productos faciales de un tipo. En la fila 1 los productos de tipo "limpiador", en la fila 2 los productos de tipo "serum" y así sucesivamente. Recorre el array de productos faciales e inserta cada producto en la posición que corresponda. El método devolverá el array bidimensional creado.	
Método

toString	Devuelve la ciudad y los productos faciales de la tienda como una cadena con el formato mostrado en la imagen que aparece más abajo. Utiliza el método join.	


Ejercicio 4: Creación y uso de objetos.

Una vez implementadas las clases, realiza las siguientes tareas:

a) Crea los siguientes objetos de la clase ProductoFacial:

Producto de referencia 120, marca benton, nombre honestFoam, que contiene como ingrediente esencial la centellaAsiatica en un porcentaje del 50% y es de tipo limpiador.
Producto de referencia 122, marca cosrx, nombre lowPhGel, que contiene como ingrediente esencial la centellaAsiatica en un porcentaje del 30% y es de tipo limpiador.
Producto de referencia 201, marca meisani, nombre blueElixir, que contiene como ingrediente esencial el retinol en un porcentaje del 0.1% y es de tipo serum.
Producto de referencia 203, marca aromatica, nombre roseInfusion, que contiene como ingrediente esencial el extractoRosa en un porcentaje del 20% y es de tipo serum.
Producto de referencia 210, marca cosrx, nombre hyaluronicMoisture, que contiene como ingrediente esencial el acidoHialuronico en un porcentaje del 10% y es de tipo serum.
Producto de referencia 323, marca benton, nombre deepGreenTea, que contiene como ingrediente esencial el teVerde en un porcentaje del 15% y es de tipo hidratante.
Producto de referencia 334, marca aromatica, nombre organicGel, que contiene como ingrediente esencial el aloeVera en un porcentaje del 90% y es de tipo hidratante.
b) Crea un objeto de la clase Tienda para la ciudad de Sevilla y añade los productos faciales creados anteriormente a través del método correspondiente de la clase.

c) Elimina de la tienda el producto con número de referencia 334 usando el método correspondiente de la clase.

d) Ordena los productos faciales de la tienda de mayor a menor número de referencia usando el método correspondiente de la clase.

e) Muestra la ciudad y los productos de la tienda de Sevilla usando el método toString de la clase. Puedes ver un ejemplo de la salida en la imagen que aparece al final del apartado.

f) Obtén el array bidimensional de productos ordenados por tipo de la tienda usando el método correspondiente de la clase y úsalo para mostrar los productos de tipo hidratante. Utiliza el método join. Puedes ver un ejemplo de la salida en la imagen que aparece al final del apartado.

