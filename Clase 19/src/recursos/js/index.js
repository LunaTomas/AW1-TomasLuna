//siempre arriba el import
// import productos from './productos.js' // no nombrada
import {productosMascotas, categorias} from './productos.js' //nombrada
import {renderizarCatalogo, filtrarPorTalle} from './funciones.js'

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")
const EventoBoton = document.getElementById('BotonEvento')
const EventoDialogo = document.getElementById('Dialogo')
const carro = document.getElementById('carro')


//arreglo
const productosCarrito = []

//Escuchador
EventoBoton.addEventListener('click', (evento)=>{
    // console.log(evento)
    // EventoDialogo.show()
    EventoDialogo.showModal()
})

//filtrar
// const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// 1) Renderizamos  
renderizarCatalogo(contenedorProductos, productosMascotas)
//renderizarCatalogo(contenedorProductos, productosFiltrados)

// 2) Aplicamos escuchadores
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carro')
// const botonesCarro = contenedorProductos.querySelectorAll('[data-id]') //<-- selector de atributo

console.log(botonesCarro)

botonesCarro.forEach((boton)=>{
    boton.addEventListener('click', (evento)=>{
        // boton.showModal()
        // const idProducto = boton.dataset.id
        // const idProducto = Number(boton.dataset.id)
        const idProducto = parseInt(boton.dataset.id)
        // console.log('click en el boton')
        console.log(idProducto)
        productosCarrito.push(idProducto)
        console.log(productosCarrito)
        carro.textContent = productosCarrito.length
    })
})