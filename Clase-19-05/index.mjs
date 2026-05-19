import express from 'express' //no nombrado, se le puede poner cualquier nombre
import rutasProductos from './modulos/productos/rutas.productos.mjs'

const PUERTO = 3000

const app = express()
//use ya tiene por defecto la ruta raiz
//se va a ejecutar en: /api/v1, /v1, /api, /
app.use(/*no es necesario poner solo '/', el use ya lo tiene.*/rutasProductos)


app.listen(PUERTO)