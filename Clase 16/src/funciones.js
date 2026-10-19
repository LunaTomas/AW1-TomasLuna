//Funciones

//Declaracion
function suma(a, b){
    //console.log(a + b)
    return a + b
}

//invocar / ejecutar / llamar
const resultado = suma(10,2)
console.log(resultado)

//funcion flecha -> anonima
//fat arrow
// const resta = (a, b)=>{
//     return a - b
// }

//const resta = (a, b)=> a + b //forma abreviada de hacer lo de arriba

//const resta = a => a + 5 //solo si hay 1 solo parametro se pueden sacar los parentesis

//callback //es una funcion que se pasa como argumento de otra funcion
const a = (cb)=>{
    console.log('Se ejecuto A')
    cb()
}
//nuestro callback
const b = ()=>{
    console.log('Se ejecuto el CallBack B')
}
//console.log(b())
a(b)

