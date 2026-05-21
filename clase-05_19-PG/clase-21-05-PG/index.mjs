import express from 'express'
import rutasProductos from './productos/rutas.productos.mjs'

const PUERTO = 3000

const app = express()
app.use(rutasProductos)
app.listen(PUERTO)