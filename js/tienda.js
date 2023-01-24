import ProductoFacial from './productoFacial.js';

//Ejercicio 3: clase Tienda.
export default class Tienda {

    //constructor
    constructor(ciudad) {
        this._ciudad = ciudad;
        this._productosFaciales = [];
    }

    //getters y setters
    get ciudad() { return this._ciudad };
    set ciudad(nuevoCuidad) { this._ciudad = nuevoCuidad };

    get productosFaciales() { return this._productosFaciales };


    //methodos
    introducirProductoFacial(productoFacial) {
        let productoEncontrado = this.productosFaciales.some((producto) => producto.referencia === productoFacial.referencia);
        if (productoEncontrado) {
            return false;
        } else {
            this._productosFaciales.push(productoFacial);
            return true;
        }
    }

    eliminarProductoFacial(ref) {
        let productoEncontrado = this.productosFaciales.findIndex((producto) => producto.referencia === ref);
        if (productoEncontrado) {
            this.productosFaciales.splice(productoEncontrado, 1);
            return true;
        } else {
            return false;
        }
    }

    ordenarProductosFacialesPorReferencia() {
        this.productosFaciales.sort((a, b) => b.referencia - a.referencia);
    }


    //he tenido que utilizar el depurador para que funcione correctamente
    obtenerProductosFacialesPorTipo(tiposPosibles) { 
        let productosPorTipo = [[], [], [], []]; 
        this.productosFaciales.forEach( 
            (producto) => { 
            let posicion = tiposPosibles.indexOf(producto.tipo); 
            productosPorTipo[posicion].push(producto); 
        }); 
        return productosPorTipo; 
    }



    

    toString() { 
     let productosFacialesString = this._productosFaciales .map((producto) => producto.toString()) .join("\n\n");
     return `Cuidad: ${this.ciudad}\n\n productosFaciales:\n\n ${productosFacialesString}`; }
}

