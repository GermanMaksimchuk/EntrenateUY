/* Array */

let productosIndumentaria = [];

/* Funciones */
function sumar (variable1, variable2){
    let resultado = variable1 + variable2
    return  resultado     }

function procentaje (porciento) {
    let resultado = Totaldecarrito *(1- porciento)
    return resultado    }


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



let Totaldecarrito = 0

let Sleccioneproducto = parseInt ( prompt("Escribe el producto que desea comprar : 1-Remera 2- Short 3- Zapatilla"
))

let Seguircomprando= true
let decision 
let cupon 
let descuento

/* Selecciona producto y se suma al monto de carrito*/
while (Seguircomprando === true) {
if (Sleccioneproducto===1 ){
    Totaldecarrito=  sumar (Totaldecarrito, Remera.precio)}
    else if (Sleccioneproducto==2){
    Totaldecarrito=  sumar (Totaldecarrito, Short.precio)}
    else if (Sleccioneproducto==3){
        Totaldecarrito= sumar (Totaldecarrito, Zapatilla.precio)} 

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
    porciento= 0.20  
    Totaldecarrito =procentaje (porciento)
            }
else if (cupon===142 && Totaldecarrito > 4000){
    porciento= 0.50  
    Totaldecarrito =procentaje (porciento)
    
    }
    

    
alert("El valor a pagar es de es : "+Totaldecarrito)




/* Manipulando el DOM*/

let titulo1 =document.getElementsByClassName("titulo1")

for (const elemento of titulo1){
elemento.innerText = "DOM MODIFICADO"}


const titulop =document.getElementsByTagName("h1")
titulop.innerText = "Entrenate URUGUAY"

const p1 = document.createElement("p")
p1.innerText= "Mas de 300 alumnos confian en nosotros"
const divp = document.getElementById("div")
divp.append(p1)