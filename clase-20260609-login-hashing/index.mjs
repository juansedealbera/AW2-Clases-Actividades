import express from 'express';
import bcrypt from 'bcryptjs'
import pool from './conexion.bd.mjs'

const PUERTO = 3000

////////////////

////////////////
const app = express();

app.use(express.json()) //---> req.body -> dan un objeto JS
app.use(express.urlencoded({extended:true})) //---> req.body -> dan un objeto JS

//hacer publicas estas carpetas para acceder desde el navegador
// -> /admin -> peticion (./fronts/front-admin)
app.use('/admin', express.static('./fronts/front-admin'))
// -> /login -> peticion (./fronts/front-login)
app.use('/login', express.static('./fronts/front-login'))

//Configuracion rutas login y registro
app.post('/autenticar', (req,res)=>{

})

app.post('/registrar', async (req,res)=>{
    //1. Obtengo los datos del formulario
    //req.body.usuario
    //req.body.pass 
    const { usuario, pass } = req.body

    //2. Chequear datos
    if(!usuario || !pass) {
        //si viene vacio es falso, pero se invierte para que pase
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }

    // 3. hashing
    //utilizar try/catch
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt)

    const resultado = await pool.query(
        `INSERT INTO usuarios
            (username, password_hash)
        VALUES 
            ($1,$2)
        RETURNING id, username

        `,
    [
        usuario,
        hash
    ])

    if(resultado.rowCount > 0){
        return res.status(201).json({
            mensaje: 'Usuario registrado',
            usuario: resultado.rows[0].username
        })
    }

    res.json({
        mensaje: 'registrado'
    })
})

//----------------------------------

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto: http://localhost:${PUERTO}`);
});
