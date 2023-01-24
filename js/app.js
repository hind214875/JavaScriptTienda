import ProductoFacial from "./productoFacial.js";
import Tienda from "./tienda.js";
import Producto from "./producto.js";

//Ejercicio 4: Creación y uso de objetos.
//main test
//ejercicio1
try{
    const ingredienteEsencial={nombreI:"extractoRosa",porcentaje:"(20%)"};
    const nuevoProducto=new Producto(123,"aromatica","roseInfusion",ingredienteEsencial);
    console.log(nuevoProducto.toString());
    
    //ejercicio2
    const ProductoFacial1=new ProductoFacial(123,"aromatica","roseInfusion",{nombreI:"extractoRosa",porcentaje:"(20%)"},"serum");
    console.log(ProductoFacial1.toString());

    //ejercicio3
    const tienda1=new Tienda("Sevilla");
    //liste of productos Faciales
    const ProductoFacial2=new ProductoFacial(120,"benton","honestFoam",{nombreI:"centellAsiatica",porcentaje:"(50%)"},"limpiador");
    const ProductoFacial3=new ProductoFacial(122,"cosrx","lowPhGel",{nombreI:"centellAsiatica",porcentaje:"(30%)"},"limpiador");
    const ProductoFacial4=new ProductoFacial(201,"meisani","blueElixir",{nombreI:"retinol",porcentaje:"(0.1%)"},"serum");
    //añadir los productos a la lista de productos Facial
    tienda1.introducirProductoFacial(ProductoFacial2);
    tienda1.introducirProductoFacial(ProductoFacial3);
    tienda1.introducirProductoFacial(ProductoFacial4);
    tienda1.introducirProductoFacial(ProductoFacial1);

    //muestra el resultado
    console.log(tienda1.toString());

    //ejercicio4
    const ProductoFacial5=new ProductoFacial(210,"Cosrx","hyaluronicMoisture",{nombreI:"acidoHialuronico",porcentaje:"(10%)"},"serum");
    const ProductoFacial6=new ProductoFacial(323,"benton","deepGreenTea",{nombreI:" teVerde",porcentaje:"(15%)"},"hidratante");
    const ProductoFacial7=new ProductoFacial(334,"aromatica","organicGel",{nombreI:" aloeVera ",porcentaje:"(90%)"},"hidratante");

    tienda1.introducirProductoFacial(ProductoFacial5);
    tienda1.introducirProductoFacial(ProductoFacial6);
    tienda1.introducirProductoFacial(ProductoFacial7);
    //console.log(tienda1.toString());

    //eliminar el producto con referencia number 334
    tienda1.eliminarProductoFacial(334);
   // console.log(tienda1.toString());

   //ordenar los productos faciales de la tienda de mayor a menor
   tienda1.ordenarProductosFacialesPorReferencia();
   //e
   console.log(tienda1.toString());

   //f
   console.log("Cosmeteca Coreana: Hidratantes (Tienda de Sevilla)");
  //obtener la lista de productos faciales de la tienda ordenados por tipo
  let productosPorTipo = tienda1.obtenerProductosFacialesPorTipo(ProductoFacial1.tiposPosibles);
  let productosHidratantes = productosPorTipo[2].map(producto => producto.toString()).join("\n");
  console.log(productosHidratantes);
   
   

}catch(error){
    console.log(`${error.name}:${error.message},${error.stack}`);
}

