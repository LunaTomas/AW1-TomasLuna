//Estructura de control -> bucle

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

//arreglos (el indice arranca de 0)
//const numeros = [1,2,3,4,5,[1,[1]]]
// const numeros2 = [1,2,3,4,5,6]

// console.log(numeros[5][1][0])
// numeros[2] = 5

// for(let i = 0; i < numeros.lenght; i++){
//     console.log(numeros[i])
// }

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

//objetos

const persona = {
    //propiedades : valor
    edad: 20,
    estudia: true,
    nombre: "goku",
    redes: [
        'istagram',
        'tiktok',
        'youtube',
    ],
    otros: {
        pasatiempo: 'pintar',
        mascotas: 2
    },
    caminar: function name(params) {
        //
    }
}

persona.nacionalidad = 'Argentina'

console.log(persona.edad)
console.log(persona.redes[1])
console.log(persona.nacionalidad)
console.log(persona.otros.pasatiempo)

