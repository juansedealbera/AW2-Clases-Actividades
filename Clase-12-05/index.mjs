import express from 'express'
//no nombrado, se le puede poner cualquier nombre
//import productos from './productos.mjs'
import * as controlador from './modulos/productos/controlador.productos.mjs'

const PUERTO = 3000

const app = express()

//Obtener todos los productos
//nunca poner los () de la funcion, sino se ejecuta por fuera
app.get('/api/v1/productos', controlador.obtenerTodos)
app.get('/api/v1/productos/:id', controlador.obtenerUno)
app.delete('/api/v1/productos/:id', controlador.eliminarProducto)

app.listen(PUERTO)