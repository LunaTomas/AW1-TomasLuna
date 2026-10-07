// console.log('Hola') //imprime por consola

//Tipado
// const nombre = 'Colapinto' //este nombre es constante por eso da error
// nombre = 'Goku'
// console.log(nombre)

// let nombre = 'Colapinto'
// nombre = 'Goku'
// nombre = '2'
// console.log(nombre)
// console.log(typeof nombre)

// let esMayorDeEdad = true

// Operadores
// Aritmeticos

const Edad = 18
const MayoriaDeEdad = 18

const AumentoEdad = Edad + 1

// console.log(AumentoEdad)

// Logicos < > = <= >= != !== == ===

// estructura control -> de flujo
let esMayorDeEdad = Edad >= MayoriaDeEdad
console.log(esMayorDeEdad)

if(Edad > MayoriaDeEdad){
    console.log('Es mayor')
}
else if(Edad === MayoriaDeEdad){
    console.log('Tiene' + ' ' + MayoriaDeEdad)
}
else{
    console.log('Es menor')
}

