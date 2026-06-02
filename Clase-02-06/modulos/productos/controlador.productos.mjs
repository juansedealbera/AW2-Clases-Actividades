import multer from 'multer'
import * as modelo from './modelo.productos.mjs'
import * as vista from './vista.productos.mjs'
import path from 'node:path'

//--MULTER
//instanciamos multer
const subirArchivo = multer({
    dest: path.join('archivos')
})
//configuramos single
const manejarArchivo = subirArchivo.single('archivo') //<--- devuelve una funcion
//

export async function obtenerTodos(req, res) {
    // obtenemos la consulta a BD desde la capa modelo
    //const respuesta = await modelo.obtenerTodos() //<-- funcion asincrona
    //Respuesta tiene todos los datos de la consulta
    //const respuestaDatos = respuesta.rows //<-- arreglo
    manejarArchivo((req, res, (error)=>︃ {

    })
    //res.json(respuestaDatos) //<-- ese arreglo
}


export async function obtenerUno(req, res) {

    // obtenemos el id del parametro
    const id_producto = req.params.id

    // Ejecutamos la funcion importada desde modelo 
    const productos = await modelo.obtenerUno(id_producto)

    // En la vista modelamos la respuesta
    const respuesta = vista.obtenerUno(productos) // <-- arreglo

    // verificamos si hay producto, y respondemos en consecuencia
    if (respuesta.length > 0) {
        res.json(productos)
    } else {
        res.status(404).json({ mensaje: 'producto no encontrado' })
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

//POST
export async function crearUno(req,res) {
    manejarArchivo((req,res)=>{
        //si
        if(error) return res.status(200).json({mensaje: 'Registro no encontrado.'})
        //si no
        res.status(201).json({mensaje: 'Registro creado.'})
    })
}