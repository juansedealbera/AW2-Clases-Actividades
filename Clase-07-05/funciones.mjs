import productos from './productos.mjs'

export function obtenerProductos(req, res){
    res.json(productos)
}

export function obtenerProducto(req, res){
    //Logica previa
    const id_producto = Number(req.params.id)
    //Filter
    const productosFiltrados = productos.datos.filter((producto) => {
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

export function altaProducto(req,res){
    //recibe los datos convertidos a js
    const producto = req.body //esto es el objeto
    //trae el cuerpo del http convertido en json
    const ultimoId = productos.ultimo_id + 1
    //genero una estructura para el producto a insertar
    const productoFinal = {
        id: ultimoId,
        ...producto
    }

    //producto.id = productos.ultimo_id + 1

    productos.datos.push(productoFinal)

    productos.ultimo_id = ultimoId

    //responder
    res.status(201).json({mensaje:'Se dio de alta el producto.'})
}

export function modificarProducto(req, res){
    //Necesitamos saber el ID
    const id_producto = Number(req.params.id)
    //Necesitamos los datos del producto a modificar
    const nuevoProducto = req.body

    productos.datos.map((producto)=>{
        //Necesitamos saber la ubicacion dentro del arreglo del producto que queremos modificar
        //Necesitamos el indice
        //const indice = productos.indexOff(producto)
        if(Number(producto.id) === id_producto){
            //productos.datos.push(): no funciona porque agrega
            const indice = productos.datos.indexOf(producto)
            //console.log(indice)
            //Accede al indice
            productos.datos[indice] = {
                id: id_producto,
                ...nuevoProducto
            }
            // es igual que hacer esto: productos.datos[indice].nombre = producto.nombre
        }
    })
    res.json({mensaje:'Se modifico el producto con id' + id_producto})
}

export function eliminarProducto(req, res){
    //Logica previa
    const id_producto = Number(req.params.id)
    //Filter
    const productosFiltrados = productos.datos.filter((producto) => {
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