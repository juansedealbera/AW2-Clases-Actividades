import http from 'node:http'
import { obtenerUsuariosAPI } from './api.mjs'
import { guardarUsuarios, leerUsuarios } from './archivos.mjs'

const port = 3002

const app = http.createServer(async(peticion, respuesta) => {
    try {
        const { method, url } = peticion

        // --- RUTA: /usuarios ---
        if(method === 'GET' && url === '/usuarios') {
            respuesta.setHeader('Content-Type', 'application/json; charset=utf-8')

            // 1. Buscamos, 2. Guardamos, 3. Leemos
            const datosApi = await obtenerUsuariosAPI()
            await guardarUsuarios(datosApi)
            const datosLocales = await leerUsuarios()

            respuesta.statusCode = 200
            // Volvemos a convertir a texto para enviarlo por la red
            return respuesta.end(JSON.stringify(datosLocales))
        }

        // --- RUTA EXTRA: /usuarios/filtrados ---
        if(method === 'GET' && url === '/usuarios/filtrados') {
            respuesta.setHeader('Content-Type', 'application/json; charset=utf-8')

            // Reutilizamos nuestras funciones
            const datosApi = await obtenerUsuariosAPI()
            await guardarUsuarios(datosApi)
            
            // Aquí tenemos el arreglo completo
            const todosLosUsuarios = await leerUsuarios()

            // Filtramos: Solo nos quedamos con los que tienen ID menor a 10
            const usuariosFiltrados = todosLosUsuarios.filter(usuario => usuario.id < 10)

            respuesta.statusCode = 200
            return respuesta.end(JSON.stringify(usuariosFiltrados))
        }

        // --- RUTA: Raiz ---
        if(method === 'GET' && url === '/' ) {
            respuesta.setHeader('Content-Type', 'text/plain; charset=utf-8')
            respuesta.statusCode = 200
            return respuesta.end('Servidor funcionando. /usuarios o /usuarios/filtrados')
        }
    
        // --- FALLBACK ---
        respuesta.setHeader('Content-Type', 'text/plain; charset=utf-8')
        respuesta.statusCode = 404
        return respuesta.end('Recurso no encontrado')
        
    } catch(error) {
        console.error('Error interno.', error)
        respuesta.statusCode = 500
        return respuesta.end('Error interno del servidor')
    }
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})