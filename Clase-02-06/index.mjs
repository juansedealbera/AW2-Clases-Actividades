import express from 'express'
//import multer from 'multer'
import rutasModuloProductos from './modulos/productos/rutas.productos.mjs'
import path from 'node:path'

const PUERTO = 3000

const app = express()

//Le avisamos a express que use las rutas del modulo productos
app.use(rutasModuloProductos)

//vinculamos el front
app.use(express.static(path.resolve('./front-crud')))

app.use('/archivos', express.static(path.resolve('./archivos')))
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en: http://localhost:3000`)
})

