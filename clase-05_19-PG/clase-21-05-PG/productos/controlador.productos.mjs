import * as modelo from './modelo.productos.mjs'

export function obtenerTodos(req, res) {

    const productos = modelo.obtenerTodos()

    res.json(productos)
}

export function obtenerUno(req, res) {

    const id_producto = req.params.id

    const productos = modelo.obtenerUno(id_producto)

    if (productos.length > 0) {
        res.json(productos)
    } else {
        res.status(404).json({
            mensaje: 'Producto no encontrado.'
        })
    }
}

export function eliminarProducto(req, res) {

    const id_producto = req.params.id

    const productosFiltrados = modelo.eliminarUno(id_producto)

    const respuesta = {
        mensaje: "Producto eliminado.",
        datos: productosFiltrados,
        url: 'http://localhost:3000/api/v1/productos/' + id_producto,
        status: 200,
        verbo: 'DELETE'
    }

    res.json(respuesta)
}