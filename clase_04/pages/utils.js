export function createPage(titulo, contenido){
    let html = ""

    html += '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<title>'+ titulo +'</title>'
    html += '<h1>'+'Mi espectacular pagina web'+'</h1>'
    html += contenido
    html += '</body></html>'

    return html
}

export function createProductList(productos){
    let html = "<ul>"
    productos.forEach( producto => {
        html += `<li>${producto.id} - ${producto.nombre} - ${producto.precio}</li>`
    } )
    html += "</ul>"
    return html
}

// module.exports = {createPage, createProductList}
// export { createPage, createProductList }
// export default createPage
