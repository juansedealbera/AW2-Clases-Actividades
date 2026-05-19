import { Router } from 'express'
import * as controlador from '../../../Clase-12-05/modulos/productos/controlador.productos.mjs'

//Instanciamos
const rutasProductos = new Router()

//Obtener todos los productos
//nunca poner los () de la funcion, sino se ejecuta por fuera
rutasProductos.get('/api/v1/productos', controlador.obtenerTodos)
rutasProductos.get('/api/v1/productos/:id', controlador.obtenerUno)
rutasProductos.delete('/api/v1/productos/:id', controlador.eliminarProducto)

export default rutasProductos
