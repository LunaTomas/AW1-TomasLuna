function renderizarCatalogo(contenedorProductos, productos){

  let productosHTML = ''
  productos.forEach((producto) => {
    productosHTML += `
    <article>
    <h3>${producto.Nombre}</h3>
        <picture>
        <img src="${producto.Imagen}" alt="${producto.Nombre}">
        </picture>
        <p>
            ${producto.Descripcion}
        </p>
        <ul>
            <li>
                Talles : ${producto.Talles[0]}
            </li>
            <li>
                Precio : $ ${producto.Precio}
            </li>
        </ul>
        <button>Agregar al carro</button>
    </article>
    `
  })
  contenedorProductos.innerHTML = productosHTML
  return productosHTML
}

export {renderizarCatalogo}

function filtrarPorTalle(arreglo, talle){
  //.filtrar -> solo dejar pasar al nuevo arreglo, solo si el arreglo talles tiene el talle buscado
    // return arreglo.filter((producto)=>{
    //     const talles = producto.talles.filter((talleEncontrado)=>{
    //         return talleEncontrado === false
    //     })
    //     return talles.length > 0
    // })

    //indexOf ->
    //includes()
    // arreglo.filter((producto)=>{
    //     //debe ser verdadero o falso
    //     return producto.talles.includes(talle)
    // })
    // return arregloFiltrado
}

export {filtrarPorTalle}