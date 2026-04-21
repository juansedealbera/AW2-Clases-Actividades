//ExpressJS: framework de js para crear servidores
import express from 'express'

const PUERTO = 3005

//Instancia de servidor
const app = express()

//Verbo y Ruta configurada -> GET / 
//Primer argumento es la ruta, el segundo es un callback
app.get('/', (req, res)=>{
    res.status(200)
    res.send('Hola expressJS')
})

//Verbo y Ruta configurada -> GET /usuarios 
app.get('/usuarios', (req, res)=>{
    res.status(200)
    res.set('content-type','text/html')
    res.send('<h1>Hola expressJS en /usuarios</h1>')
})

//Verbo y Ruta configurada -> GET /usuarios 
app.post('/usuarios', (req, res)=>{
    res.status(201)
    res.send('Hola post en /')
})

//abro puerto para escuchar peticiones. si no lo pones, no funciona el sv
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})




