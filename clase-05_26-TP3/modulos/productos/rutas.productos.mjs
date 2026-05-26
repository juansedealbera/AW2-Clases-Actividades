import { Router } from 'express'
import * as controlador from './controlador.productos.mjs'
//import pool from '../bd/conexion.mjs'

const rutasProductos = new Router()


// INSTANCIAMOS
// Obtener todos los productos
rutasProductos.get('/api/v1/productos', controlador.obtenerTodos)

//rutasProductos.get('/api/v1/productos/:id', controlador.obtenerUno)

//rutasProductos.delete('/api/v1/productos/:id', controlador.eliminarProducto)

export default rutasProductos