function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function buscarProducto(id) {
    const productos = cargarProductosLS();
    
    return productos.find(item => item.id === id);
}

function agregarProducto(id) {
    const carrito = cargarCarritoLS();
    const producto = buscarProducto(id);
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBtnCarrito();
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const nuevoCarrito = carrito.filter(item => item.id != id)
    guardarCarritoLS(nuevoCarrito);
    renderBtnCarrito();
    renderProductos();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderBtnCarrito();
    renderProductos();
}

function cantidadTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.length;
}

function sumaTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

function renderBtnCarrito() {
    let BtnCarrito = document.getElementById("BtnCarrito");
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="img-optimizadas/Carrito.png" alt="Carrito" width="32">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalProductos()}
    </span>
    </button>`;
    BtnCarrito.innerHTML = contenido;
}