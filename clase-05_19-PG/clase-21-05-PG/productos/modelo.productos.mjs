import pg from "../conexion.bd.mjs";

/*
Capa encargada de los datos
Por ejemplo, consultas a una base de datos local o externa
*/  
// manera nombrada
export async function obtenerTodos() {
    const resultado = await pg.query('SELECT * FROM productos') //<---- devuelve un objeto result
    console.log(resultado.rows)
    return [] //<--- como se entregan los datos
}

export function obtenerUno(id) {

    const id_producto = Number(id)

    const productosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) === id_producto
    })

    return productosFiltrados
}

export function eliminarUno(id) {

    const id_producto = Number(id);

    const productosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) !== id_producto;
    })

    return productosFiltrados;
}