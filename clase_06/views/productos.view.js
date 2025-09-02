import { createPage } from "../pages/utils.js"

export function createProductPage(productos) {
    let html = "<a href='/productos/nuevo' >Nuevo producto</a>"
    html += "<ul>"
    productos.forEach(producto => {
        html += `<li>${producto.id} - ${producto.nombre} <a href="/${producto.id}" >Ver</a></li>`
    })
    html += "</ul>"
    return createPage("Productos", html)
}

export function createProductDetail(producto) {
    let html = ""
    if (producto) {
        html += `<p>${producto.id} - ${producto.nombre} - ${producto.precio}</p>`
        html += `<a href="/" >Volver</a>`
    } else {
        html += "<p>No se encontro el producto</p>"
        html += `<a href="/" >Volver</a>`
    }
    return createPage("Detalle", html)

}

export function nuevoProducto() {
    let html = ""
    html += "<form action='/productos/nuevo' method='post' >"
    html += "<div>"
    html += "<input type='text' name='nombre' placeholder='Ingresar nombre' />"
    html += "</div>"
    html += "<div>"
    html += "<input type='number' name='precio' placeholder='Ingresar precio' />"
    html += "</div>"
    html += "<input type='submit' value='Guardar'>"
    html += "</from>"

    return createPage("Nuevo producto", html)
}