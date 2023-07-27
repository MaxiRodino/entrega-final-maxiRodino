var marcas=[];
var servicios=[];

fetch("js/productos.json").then(productos => productos.json()).then(resultado => {
    productos = resultado;
    resultado.forEach( producto => {
       
        if(!marcas.includes(producto.marca) && producto.marca != "Lubricentro JF"){
            marcas.push(producto.marca);
            crearInputs(producto.marca, "marcas");
        }
        if(producto.tipo === "Servicios"){
            servicios.push(producto.nombre);
        }
        
    
    });
    crearServicios();//una vez que recorri todo el listado
});

function agregarServicio(input){
    let contenido = "";
    let productos = cargarProductosLS();
    productos = productos.filter( item => (input.value === item.nombre && input.checked));
    
    if (productos.length > 0){
        productos.forEach(producto => {
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
    });
   }
   document.getElementById("contenido").innerHTML += contenido;
}

function filtroInicial(){
    let filtro = document.getElementById("marcas")
        filtro.innerHTML=""
    marcas.forEach( marca =>
       crearInputs(marca, "marcas") )
       renderProductos();
       let botones = document.getElementsByName("filtro-servicio");
       botones.forEach(boton => boton.checked = false)
}

function crearServicios(){
    let filtroServicios = document.getElementById('servicios');
    let titulo = document.createElement("h4");
    titulo.innerHTML = "Servicios";
    filtroServicios.appendChild(document.createElement("br"));
    filtroServicios.appendChild(titulo);

    servicios.forEach(servicio => crearInputs(servicio, 'servicios'))
}
function crearInputs(marca, idFiltro){
    let filtros = document.getElementById(idFiltro);
    let input = document.createElement('input');
    let label = document.createElement('label');
    let div = document.createElement('div');
            
    div.className = "form-check";
            
    label.setAttribute('for', 'flexCheckDefault');
    label.className = "form-check-label";
    label.innerHTML = marca;
            
    input.setAttribute('type', 'checkbox');
    input.className = 'form-check-input';
    if(idFiltro === "marcas"){
        input.addEventListener('click', function(){
            filtrarProductos(this);
        });
    }else{
        input.addEventListener('click', function(){
            agregarServicio(this);
        });
        input.setAttribute("name", "filtro-servicio");
    }

    input.value = marca;

    div.appendChild(input);
    div.appendChild(label);

    filtros.appendChild(div); 
}

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

function estaEnElCarrito(id) {
    const carrito = cargarCarritoLS();

    return carrito.some(item => item.id === id)
}

function agregarProducto(id) {
    const carrito = cargarCarritoLS();

    if (estaEnElCarrito(id)) {
        let pos = carrito.findIndex(item => item.id === id);
        carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarCarritoLS(carrito);
    renderBtnCarrito();
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    let pos = carrito.findIndex(item => item.id === id);
    if (carrito[pos].cantidad > 1) {
        carrito[pos].cantidad -= 1;
    } else {
        carrito.splice(pos, 1);
    }

    guardarCarritoLS(carrito);
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

    return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0);
}

function sumaTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.cantidad * item.precio, 0);
}

function verProducto(id) {
    let productos = cargarProductosLS();
    let producto = productos.find(item => item.id == id);
    localStorage.setItem("producto", JSON.stringify(producto));
}

function filtroProductos(){
    let productos = cargarProductosLS();
    let textoBusqueda = document.getElementById("textoBusqueda").value;
    let contenido = "";

    productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;

    if (productos.length > 0){
        productos.forEach(producto => {
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
    });
   } else {
    contenido += '<div class="alert alert-danger text-center" role="alert"> No hemos encontrado lo que buscas, realiza una nueva o contactanos a traves de nuestras redes</div>';
   }

    document.getElementById("contenido").innerHTML = contenido;
}

function filtrarProductos(input){
    let productos = cargarProductosLS();
    productos = productos.filter( item => (input.value === item.marca && input.checked));
    let contenido = "";

    if (productos.length > 0) {
        let filtroMarcas = document.getElementById("marcas")
        filtroMarcas.innerHTML=""
        
        let span = document.createElement("span");        
        let button = document.createElement("button")
        
        button.className="btn"
        button.className="bg-primary"
        button.onclick = function (){filtroInicial()}
        button.innerHTML="Quitar filtros" 
        span.innerHTML = input.value;
        filtroMarcas.appendChild(span)
        filtroMarcas.appendChild(document.createElement("br"))
        filtroMarcas.appendChild(button)

        productos.forEach(producto => {
            contenido += `<div class="col-md-3 mb-5">
            <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
                <div class="card text-center border border-0">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <p class="card-text text-primary"><b>$${producto.precio}</b></p>
                        <p class="text-secondary">${producto.nombre}</p>
                    </div>
                </div>
            </a>
            </div>`;
        });
        document.getElementById("contenido").innerHTML = contenido;
    } else {
        renderProductos();
    }
    
}

