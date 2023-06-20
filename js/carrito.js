function renderProductos() {
    let productos = cargarCarritoLS();
    let contenido = "";

    if (cantidadTotalProductos() > 0) {
        contenido += `<table class="table">`;
        contenido += `<tr>
        <td colspan="3">&nbsp;</td>  
        <td class="text-end"><button class="btn bg-danger" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar Carrito X</button></td>
        </tr>`;

        productos.forEach(producto => {
            contenido += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="48"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle"><b>$${producto.precio}</b></td>
            <td class="align-middle text-end"><img src="img-optimizadas/trash-fill.svg" alt="Eliminar Producto" title="Eliminar Producto" width="24" onclick="eliminarProducto(${producto.id});"></td>
            </tr>
            </div>`;
        });

        contenido += `<tr>
        <td>&nbsp;</td>
        <td>Total</td>
        <td><b>$${sumaTotalProductos()}</b></td>    
        <td>&nbsp;</td>
        </tr>
        </table>`;
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">El carrito esta vacio!!</div>`;
    }
    
    document.getElementById("contenido").innerHTML = contenido;
};

renderProductos();
renderBtnCarrito();