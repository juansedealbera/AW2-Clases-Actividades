import express from 'express'

const PUERTO = 3000

const app = express()

//Avisamos a Express -> chequear datos del cliente -> cuerpo (configuracion)
//app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Se ejecuta una sola vez
//estructura de datos como un array, es un objeto js
    const productos = [
        {
            id: 1,
            nombre: 'camiseta',
            precio: 20000
        },
        {
            id: 2,
            nombre: 'pantalon',
            precio: 35000
        }
    ]



const obtenerRaiz =  (req, res)=>{
    res.end('Estas en la raiz')
}

app.get('/', obtenerRaiz)

app.get('/usuarios', (req, res) =>{
    
    //estructura de datos como un array, es un objeto js
    const miObjeto = {
        materia: 'AW2'
    }
    
    //primero la peticion: el get nos da los datos del navegador
    //res: metodos para dar respuesta a la peticion. ej: codigo de estado, cabeceras, etc
    res.status(200)    

    //agrega una cabecera y convierte a texto
    //res.json(miObjeto)

    //res.set('content-type','application/json')
    //formato json
    //res.send('{"Materia":"AW2"}')
})

app.get('/productos', (req, res) =>{

    res.json(productos)
    
    //filtrar
    /*const productosFiltrados = productos.filter((producto)=>{
        //comparo
        return (producto.id === id)
    })*/

    /*const productosFiltrados = productos.filter((producto)=> producto.id === id)
    //si uso return no puedo usar else
    if(productosFiltrados,length > 0) {
        return res.json(productosFiltrados)
    }*/

    //si uso return no puedo usar else
    /*if(productosFiltrados,length > 0) {
        return
        res.json(productosFiltrados)
    }*/
    
    //res.json({"Mensaje":"Producto no encontrado."})
    
})

app.get('/productos/:id', (req, res) =>{ 

    const id = parseInt(req.params.id)
    console.log(id)
    
    const productosFiltrados = productos.filter((producto)=> producto.id === id)
    //si uso return no puedo usar else
    if(productosFiltrados,length > 0) {
        return res.json(productosFiltrados)
    }
    //res.json(productos)
    //res.status(200)    
})


//envio datos al sv
app.post('/productos', (req, res)=> {
    //Verificamos el cuerpo del mensaje
    const datosCliente = req.body
    productos.push(datosCliente)
    res.status(201).json({mensaje: "producto dado de alta"})    
})

app.listen(PUERTO, ()=>{
    console.log(`servidor escuchando en: http://localhost:${PUERTO}`)
})