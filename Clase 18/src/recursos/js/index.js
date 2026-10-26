//siempre arriba el import
// import productos from './productos.js' // no nombrada
import {productosMascotas, categorias} from './productos.js' //nombrada
import {renderizarCatalogo, filtrarPorTalle} from './funciones.js'

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")

//filtrar
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

//Renderizamos  
// renderizarCatalogo(contenedorProductos, productosMascotas)
renderizarCatalogo(contenedorProductos, productosFiltrados)