function renderProductos() {
    let productos = cargarProductosLS();
    let textoBusqueda = document.getElementById("textoBusqueda").value;
    

    productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;
    
    fetch ("js/productos.json")
    .then(productos => productos.json())
    .then(productos=>{
        let contenido ="";
        productos.forEach(producto => {
            if(producto.marca != "Lubricentro JF"){
            contenido += `<div class="col-md-3 mb-5">
            <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
                <div class="card text-center border border-0">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h6 class="text-body-tertiary">${producto.marca}</h6>
                        <p class="card-text text-secundary-énfasis"><b>$${producto.precio}</b></p>
                        <h5 class="text-black">${producto.nombre}</h5>
                    </div>
                </div>
            </a>
          </div>`;
        }
    })
     document.getElementById("contenido").innerHTML = contenido;
}).catch(error => console.log(error));
}   

renderProductos();
renderBtnCarrito();