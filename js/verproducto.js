function renderProducto() {
    const producto = JSON.parse(localStorage.getItem("producto"));
    let contenido = `<div class="col-md-4 offset-md-3" >
    <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
    </div>
    <div class="col-md-4">
        <h3 class="text-black">${producto.nombre}</h3>
        <h4 class="text-secundary"><b>$${producto.precio}</b></h4>
        <p class="my-5"><button class="btn btn-danger" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>
    </div>`;
    document.getElementById("contenido").innerHTML = contenido
}

renderProducto();
renderBtnCarrito();