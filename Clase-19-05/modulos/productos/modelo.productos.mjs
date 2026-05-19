/*
Capa encargada de los datos
Por ejemplo, consultas a una base de datos local o externa
*/

import productos from "../../productos.mjs";
//manera nombrada
export function obtenerTodos(){
    /*
        Si totmamos los datos de un archivo JSON
        Acá estaría el readFile
    */
    return productos
}

export function obtenerUno(id){
    const id_producto = Number(id)
    const productosFiltrados = productos.datos.filter((producto)=>{
        return Number(producto.id) === id_producto
    })
    return productosFiltrados
}

export function eliminarUno(id){
    const id_producto = Number(id);
    const productosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) !== id_producto;
    })
    return productosFiltrados;
}