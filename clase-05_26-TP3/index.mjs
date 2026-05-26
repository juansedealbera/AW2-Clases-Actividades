import express from 'express'
import rutasModuloProductos from './modulos/productos/rutas.productos.mjs'

const PUERTO = 3000

const app = express()

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en: http://localhost:3000`)
})

