import express from 'express'

const PUERTO = 3000

const app = express()

//MiddleWare
function middleware1(req, res, next){
    //console.log('Usuario existe, puede pasar.')
    const usuarioExiste = true

    if(usuarioExiste){
        console.log('Usuario existe, puede pasar.')
        next() //-----> hace que avance al siguiente
    }else{
        console.log('Usuario no existe, no puede pasar')
        res.send('Usuario no registrado.')
    }
}