import express from 'express';

const PUERTO = 3000

////////////////

////////////////
const app = express();
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
