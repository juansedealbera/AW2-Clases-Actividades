import express from 'express'
//import productos from './productos.mjs'
import { obtenerProductos, obtenerProducto, eliminarProducto, altaProducto, modificarProducto } from './funciones.mjs'

const PUERTO = 3000

const app = express()

app.use(express.json()) 
//Avisa a express que parsee los datos del json en formato http

//Definiendo una API REST

//GET /api/v1/productos ---> todos
app.get('/api/v1/productos', obtenerProductos)

//GET /api/v1/productos/:id ---> uno por ID
app.get('/api/v1/productos/:id', obtenerProducto)

//POST /api/v1/productos ---> dar de alta un nuevo producto
app.post('/api/v1/productos/:id', altaProducto)

//PUT /api/v1/productos/:id ---> modificar un registro (producto) cuando ya existe
app.put('/api/v1/productos/:id', modificarProducto)

//DELETE /api/v1/productos/:id
app.delete('/api/v1/productos/:id', eliminarProducto)

app.listen(PUERTO)