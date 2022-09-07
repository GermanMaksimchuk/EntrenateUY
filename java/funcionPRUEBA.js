/* Array */

let productosIndumentaria = [];


/* Constructor */


class Indumentaria { 
    constructor (tipo,precio,marca) {
    this.tipo = tipo;
    this.precio = precio;
    this.marca = marca;
    }
}
/* Creando con clases */

const Remera = new Indumentaria ("Remera H",1000,"Adidas");
productosIndumentaria.push(Remera)
const Short = new Indumentaria ("Short H ",1500,"Adidas");
productosIndumentaria.push(Short)
const Zapatilla = new Indumentaria ("Zapatilla H ",3000,"Adidas");
productosIndumentaria.push(Zapatilla)


console.log(productosIndumentaria)


/* Carrito a cargar*/
let Totaldecarrito = 0
/* Cuadro de dialogo*/
let Sleccioneproducto = parseInt ( prompt("Escribe el producto que desea comprar : 1-Remera 2- Short 3- Zapatilla"
))

let Seguircomprando= true
let decision 
let cupon 
let descuento

/* Selecciona producto y se suma al monto de carrito*/
while (Seguircomprando === true) {
if (Sleccioneproducto===1 ){
    Totaldecarrito= Totaldecarrito + Remera.precio}
    else if (Sleccioneproducto==2){
    Totaldecarrito= Totaldecarrito + Short.precio}
    else if (Sleccioneproducto==3){
        Totaldecarrito= Totaldecarrito + Zapatilla.precio} 

decision = parseInt(prompt("Quiere seguir comprando? 1-YES 2-NO" ))

if (decision === 1 ) {
    Sleccioneproducto = parseInt ( prompt("Escribe el producto que desea comprar : 1-Remerea - 2-Short - 3-Zapatilla"
))

}
else if (decision === 2) {
    Seguircomprando= false

}
}

alert("El valor total antes de impuesto es : "+Totaldecarrito)

/* Cupon de descuento*/


cupon = parseInt(prompt("Ingrese cupon de descuento" ))


if (cupon===142 && Totaldecarrito <=4000 ) {
       Totaldecarrito = Totaldecarrito*0.85
            }
else if (cupon===142 && Totaldecarrito > 4000){
    Totaldecarrito = Totaldecarrito*0.75
    
    }
    

    
alert("El valor a pagar es de es : "+Totaldecarrito)


