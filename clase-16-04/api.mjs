export async function obtenerUsuariosAPI() {
    const peticionApi = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuarios = await peticionApi.json()
    return usuarios
}