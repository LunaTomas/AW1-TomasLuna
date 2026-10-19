//metodos de arreglos

const numeros = [2, 8, 12, 50]

//foreach -> loop -> no devuelve nada
//el callback se ejecuta una vez por elemento
numeros.forEach((numero, indice, arreglo)=>{
    console.log(numero, indice, arreglo)
})

console.log('---------------------------')

//map -> loop -> devuelve el nuevo arreglo
const NumerosIncrementados = /*<---*/ numeros.map((numero)=>{
    return numero + 1
})

console.log(NumerosIncrementados)

//filter(nuevo arreglo) y find(valor)