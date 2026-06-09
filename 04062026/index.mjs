// ExpressJS -> framework de JS para cerar servidores
import express from 'express'
import cookieParser from 'cookie-parser'
const PUERTO = 3000



const app = express()

app.use(cookieParser('misecreto'))
app.use(express.urlencoded({extended:true}))
app.use('/login', express.static('./fronts/front_Login'))

function crearAceso(req, res, next){

   const miidentificador = req.signedCookies['sesion']
   if(miidentificador === 'indentificador'){
    return next()
   }

        return res.redirect('Login')
}

app.use('/Admin', crearAceso, express.static('./fronts/frontAdmin'))

app.post('/Autenticar', (req, res)=>{
      const {usuario, clave} = req.body
      if(usuario!='Juancito'||clave!='1234' ){
        return res.redirect('/Login')
      }






    res.cookie('sesion','indentificador', {
        secure:true,
        httpOnly:true,
        sameSite:'lax',
        signed:true,
        maxAge:1000*10
    })
   /* res.json({
        mensaje: 'Usuario logeado'
    })*/
    res.redirect('/Admin')
})

// --- INICIO DEL SERVIDOR ---
app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})