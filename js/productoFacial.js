import Producto from './producto.js';

//Ejercicio 2: clase ProductoFacial.
export default class ProductoFacial extends Producto {

    //constructor
    constructor(referencia, marca, nombre, ingredienteEsencial, tipo) {
        super(referencia, marca, nombre, ingredienteEsencial);
        this._tiposPosibles = ["limpiador", "serum", "hidratante", "mascarilla"];
        this._tipo = tipo;
    }

    //getters y setters
    get tipo() { return this._tipo };
    set tipo(nuevoTipo) {
        if (!this._tiposPosibles.includes(nuevoTipo)) { throw new Error("el tipo no es valido"); }
        this._tipo = nuevoTipo;
    }

    get tiposPosibles(){return this._tiposPosibles};

    //toString
    toString() {
        return `${super.toString()}\n Tipo:${this.tipo}`;
    }


}


