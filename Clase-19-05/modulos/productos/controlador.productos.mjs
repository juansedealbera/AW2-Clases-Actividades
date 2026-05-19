import * as modelo from './modelo.productos.mjs'
import * as vista from './vista.productos.mjs'

export function obtenerTodos(req, res){
    //Obtenemos capa modelo de la funcion
    const productos = modelo.obtenerTodos()
    //En la vista modelamos la respuesta
    const respuesta = vista.obtenerTodos(productos)
    res.json(respuesta)
}

export function obtenerUno(req,res){
    //obtenemos el id del parametro
    const id_producto = req.params.id
    //Ejecutamos la funcion importada desde modelo
    const productos = modelo.obtenerUno(id_producto) 
    //verificamos si hay producto y respondemos en consecuencia
    if(productos.length > 0){
        res.json(productos)
    }else{
        res.status(404).json({mensaje:'Producto no encontrado.'})
    }
}

export function eliminarProducto(req, res){
    // Obtenemos el id del parámetro
    const id_producto = req.params.id
    
    // Ejecutamos la función en la capa modelo
    const productosFiltrados = modelo.eliminarUno(id_producto)
    
    const respuesta = {
        mensaje: "Producto eliminado.",
        datos: productosFiltrados,
        url: 'http://localhost:3000/api/v1/productos/' + id_producto,
        status: 200,
        verbo: 'DELETE'
    }
    
    res.json(respuesta);
}