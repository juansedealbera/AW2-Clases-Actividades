import productos from "./productos.mjs";

/**
 * Obtener todos los productos
 */
export function obtenerProductos(req, res) {
    res.json(productos)
}

/**
 * Obtener un producto por ID
 */
export function obtenerProducto(req, res) {

    const id = Number(req.params.id)

    const productosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) === id
    })

    if (productosFiltrados.length > 0) {
        res.json(productosFiltrados)
    } else {
        res.status(404).json({
            mensaje: 'El producto no existe'
        })
    }
}

/**
 * Dar de alta un nuevo producto
 */
export function altaProducto(req, res) {

    const producto = req.body

    // Aumentamos el ID autoincremental
    productos.ultimo_id++

    // Creamos el nuevo producto
    const productoFinal = {
        id: productos.ultimo_id,
        ...producto
    }

    // Lo agregamos al array
    productos.datos.push(productoFinal)

    res.status(201).json({
        mensaje: 'Se dio de alta el producto',
        producto: productoFinal
    })
}

/**
 * Modificar un producto existente
 */
export function modificarProducto(req, res) {

    // ID que viene por URL
    const id_producto = Number(req.params.id)

    // Datos nuevos del body
    const producto = req.body

    // Buscamos el índice del producto
    productos.datos.map((producto_actual) => {

        const indice = productos.datos.indexOf(producto_actual)

        if (Number(producto_actual.id) === id_producto) {

            // Reemplazamos el producto manteniendo el ID
            productos.datos[indice] = {
                id: id_producto,
                ...producto
            }
        }
    })

    res.json({
        mensaje: 'Producto modificado ' + id_producto
    })
}

/**
 * Eliminar un producto por ID
 */
export function eliminarProducto(req, res) {

    const id = Number(req.params.id)

    // Filtramos todos menos el que coincide
    const productosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) !== id
    })

    productos.datos = productosFiltrados

    res.json({
        mensaje: 'Producto eliminado',
        url: 'http://localhost:3000/api/v1/productos/' + id,
        status: 200,
        verbo: 'DELETE'
    })
}