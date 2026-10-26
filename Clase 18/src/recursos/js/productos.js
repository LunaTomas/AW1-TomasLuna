const productosMascotas = [
  {
    Nombre: "Cama para perros",
    Imagen: "https://placehold.co/400x400?text=Cama+Perros",
    Descripcion: "Cama acolchada ideal para brindar comodidad y descanso a perros.",
    Talles: ["M", "L"],
    Precio: 25000
  },
  {
    Nombre: "Collar ajustable",
    Imagen: "https://placehold.co/400x400?text=Collar",
    Descripcion: "Collar resistente ajustable con cierre seguro para paseos diarios cómodos.",
    Talles: ["S", "L"],
    Precio: 8500
  },
  {
    Nombre: "Arnés para perros",
    Imagen: "https://placehold.co/400x400?text=Arnes",
    Descripcion: "Arnés ergonómico diseñado para pasear mascotas cómodamente sin causar molestias.",
    Talles: ["S", "M"],
    Precio: 15000
  },
  {
    Nombre: "Abrigo impermeable",
    Imagen: "https://placehold.co/400x400?text=Abrigo",
    Descripcion: "Abrigo impermeable que protege mascotas del frío durante días lluviosos.",
    Talles: ["M", "L"],
    Precio: 22000
  },
  {
    Nombre: "Comedero para mascotas",
    Imagen: "https://placehold.co/400x400?text=Comedero",
    Descripcion: "Comedero práctico resistente y fácil de limpiar para mascotas pequeñas.",
    Talles: ["S", "L"],
    Precio: 9500
  },
  {
    Nombre: "Pelota de goma",
    Imagen: "https://placehold.co/400x400?text=Pelota",
    Descripcion: "Pelota resistente perfecta para juegos divertidos y ejercicio diario canino.",
    Talles: ["S", "M"],
    Precio: 4500
  },
  {
    Nombre: "Correa para perros",
    Imagen: "./recursos/imagenes/productos/CORREAS.webp", //nose que pasa aca
    Descripcion: "Correa reforzada con agarre cómodo para paseos seguros y tranquilos.",
    Talles: ["M", "L"],
    Precio: 11000
  },
  {
    Nombre: "Transportadora",
    Imagen: "https://placehold.co/400x400?text=Transportadora",
    Descripcion: "Transportadora ventilada ideal para trasladar mascotas pequeñas con total seguridad.",
    Talles: ["S", "L"],
    Precio: 38000
  },
  {
    Nombre: "Buzo para mascotas",
    Imagen: "https://placehold.co/400x400?text=Buzo",
    Descripcion: "Buzo suave y abrigado para mantener mascotas calientes durante invierno.",
    Talles: ["S", "M"],
    Precio: 17500
  },
  {
    Nombre: "Colchoneta para mascotas",
    Imagen: "https://placehold.co/400x400?text=Colchoneta",
    Descripcion: "Colchoneta cómoda y liviana perfecta para descansar dentro del hogar.",
    Talles: ["M", "L"],
    Precio: 19500
  }
];

const categorias = [
  'Ropa'
]

//dos maneras de exportar:
//1- exportacion no nombrada
// export default productosMascotas

//2- exportacion nombrada
export {productosMascotas, categorias}