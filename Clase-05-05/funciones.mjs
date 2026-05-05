import productos from './productos.mjs'

export function obtenerProductos(req, res){
    res.json(productos)
}

export function obtenerProducto(req, res){
    //Logica previa
    const id_producto = Number(req.params.id)
    //Filter
    const productosFiltrados = productos.filter((producto) => {
        return Number(producto.id) === id_producto
    })
    //Verificamos si hay elementos en el arreglo
    if(productosFiltrados.length > 0) {
        const respuesta = {
            datos: productosFiltrados,
            url: 'http://localhost:3000/api/v1/productos/id' + id_producto,
            status: 200
        }
        res.json(respuesta)
    }else{
        res.status(404).json({
            mensaje:'Producto no encontrado.'
        })
    }
}

export function eliminarProducto(req, res){
    //Logica previa
    const id_producto = Number(req.params.id)
    //Filter
    const productosFiltrados = productos.filter((producto) => {
        return Number(producto.id) !== id_producto
    })
    //Pisamos el original
    //productos = productosFiltrados
    //Verificamos si hay elementos en el arreglo
    const respuesta = {
        mensaje: "Producto eliminado.",
        datos: productosFiltrados,
        url: 'http://localhost:3000/api/v1/productos/id' + id_producto,
        status: 200,
        verbo: 'DELETE'
    }
    res.json(respuesta)
}