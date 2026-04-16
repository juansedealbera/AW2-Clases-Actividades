//modulo http
//vainilla= puro
//modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'

const app = http.createServer(async (peticion, respuesta) => {
    
    // Extraemos method y url para escribir menos código
    const { method, url } = peticion;

    try {
        if (method === 'GET') { 
            if (url === '/') {
                respuesta.statusCode = 200;
                return respuesta.end('Ruta raiz /');
            }

            if (url === '/usuarios') {
                respuesta.statusCode = 200;
                return respuesta.end('ruta usuarios /usuarios');
            }
        } 

        if (method === 'POST') {
            if (url === '/') {
                const ruta = './contenido.txt';
                // Escribimos el archivo de forma asíncrona
                await fsp.writeFile(ruta, 'Contenido creado desde el POST');
                
                respuesta.statusCode = 201; // 201 significa "Created"
                return respuesta.end('Recurso Creado y archivo guardado');
            }
        }

        // Si nada de lo anterior coincidió
        respuesta.statusCode = 404;
        return respuesta.end('No se encontro la ruta');

    } catch (error) {
        console.error("Error en el servidor:", error);
        respuesta.statusCode = 500;
        return respuesta.end('Error interno del servidor');
    }
});

app.listen(3001, () => {
    console.log(`Servidor escuchando en http://localhost:3001`);
});