import fsp from 'node:fs/promises'
import path from 'node:path'

const rutaArchivo = path.join(process.cwd(), 'usuarios.json')

export async function guardarUsuarios(datos) {
    // Escribimos los datos en el JSON
    await fsp.writeFile(rutaArchivo, JSON.stringify(datos, null, 4))
}

export async function leerUsuarios() {
    // Leemos el texto del archivo
    const contenido = await fsp.readFile(rutaArchivo, 'utf-8')
    // Lo convertimos a un arreglo (Array) para poder filtrarlo más fácil
    return JSON.parse(contenido)
}