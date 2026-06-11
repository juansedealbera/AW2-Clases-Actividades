import jwt from 'jsonwebtoken'

// sign <---filmar

// verify <---verificar la firma

jwt.sign({usuario:'juanse'},'largaysupersecreta',{expiresIn:'1h'},(error,token)=>{
    console.log(token)
})