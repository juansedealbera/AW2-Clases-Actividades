import express from 'express'
//levanta el archivo y lo ejecuta de una
import './iniciar.env.mjs'
import rutasModuloProductos from './modulos/productos/rutas.productos.mjs'
 
//variables de entorno
//Como acceder?
//console.log(process.env.PUERTO)

const PUERTO = process.env.PUERTO || 3000

const app = express()

//le avisamos a express que use las rutas del modulo productos
app.use(rutasModuloProductos)

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en: http://localhost:3000`)
})

