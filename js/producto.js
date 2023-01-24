//Ejercicio 1: clase Producto.
export default class Producto {
    //attributos


    //constructor
    constructor(referencia, marca, nombre,ingredienteEsencial) {
        this._referencia = referencia;
        this._marca = marca;
        this._nombre = nombre;
        this._ingredienteEsencial = ingredienteEsencial
    }

    //getters y setters
    get referencia() { return this._referencia };
    set referencia(nuevaReferencia) {
        if (isNan(nuevaReferencia) || (nuevaReferencia > 999)) {
            throw new console.error("Debe ser un número y no puede tener más de 3 dígitos");
        }
        this._referencia = nuevaReferencia;
    }

    get marca() { return this._marca };
    set marca(nuevaMarca) { this._marca = nuevaMarca };

    get nombre() { return this._nombre };
    set nombre(nuevoNombre) { this._nombre = nuevoNombre };

    get ingredienteEssencial() { return this._ingredienteEsencial};
    set ingredienteEsencial(nuevoIngredienteEsencial){this._ingredienteEsencial=nuevoIngredienteEsencial};


    //toString
    toString() {
        return ` Referencia: ${this.referencia}\n Marca: ${this.marca}, Nombre: ${this.nombre}\n Ingrediente esencial: ${this._ingredienteEsencial.nombreI}(${this._ingredienteEsencial.porcentaje})`;
    }


}