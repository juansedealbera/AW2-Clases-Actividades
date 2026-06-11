// Token de acceso TID AW2 p.366

import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import pool from './conexion.bd.mjs';
//inyectar las VE al proceso
dotenv.config();

const PUERTO = process.env.PUERTO || 4000;

const app = express();

app.use(express.json());
//ambos sirven para leer y parsear el cuerpo para guardar en el body y 
// lo convierte en objteto JS
app.use(express.urlencoded({extended:true}))

//lee la cabecera de las cookies cuando el cliente las envia - crea un objeto: cookies -> objeto JS
//Si la cookie esta firmada, la va a poner como signedCookies
app.use(cookieParser(process.env.JWT_FIRMA));

app.post('/registrar', async (req, res) => {
    const { usuario, pass } = req.body;
    if (!usuario || !pass) {
        return res.sendStatus(400);
    }
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashingPass = bcrypt.hashSync(pass, salt);
        const resultado = await pool.query(
            'INSERT INTO usuarios (username, password_hash) VALUES ($1, $2)',
            [usuario, hashingPass]
        );
        if (resultado.rowCount > 0) {
            res.redirect('/login'); // Redirigimos al usuario a la página de login
        } else {
            res.sendStatus(500);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/autenticar',async (req,res)=>{
    const {usuario, pass} = req.body
    if (!usuario || !pass){
        return res.sendStatus(400)
    }
    //consultar a la BD
    if(true){
        jwt.sign({usuario:'juanse'},'largaysupersecreta',{expiresIn:'1h', (error, token)=>{
            if (error){
                return res.json({mensaje:'error'})
            }
            res.cookie('token', token){

            })
        }

    })
    


//Servir ambos fronts
function verificarAcceso(req,res,next){
    const token = req.signedCookies['token']
    jwt.verify(token, 'largaysupersecreta',function(error,decoded){
        if(error){
            return res.redirect('/login')
        }
        next()
    })
}
app.use('/admin', express.static('./fronts/front-admin'))
app.use('/login', express.static('./fronts/front-login'))


app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto: http://localhost${PUERTO}`);
});
