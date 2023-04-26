const empresas = [
    { nombre: "HughesNet", email:"ventas@hughesnet.com",sitioWeb:"www.hughesnet.com", idProv: 1, proximoPedido:"7/4/2023",direccion:"11717 Exploration Lane, Germantown, MD 20876", numeroTelefono:"1-866-347-3292" ,producto:"Internet vía satélite en los Estados Unidos. Ofrecen conexiones de alta velocidad en áreas donde las opciones de banda ancha terrestre no están disponibles.",imagen:"https://www.hughesnet.com/themes/custom/hughes_theme/logo.svg"},
    { nombre: "Viasat",email: " info@viasat.com  ",sitioWeb: "www.viasat.com",idProv: 2,proximoPedido: "9/6/2023",direccion: "6155 El Camino Real, Carlsbad, CA 92009",numeroTelefono: "1-855-463-9333",producto:"Ofrece servicios de internet vía satélite en los Estados Unidos. Ofrecen conexiones de alta velocidad en áreas donde las opciones de banda ancha terrestre no están disponibles, así como paquetes de televisión y telefonía digital en asociación con otros proveedores.",imagen: "https://www.viasat.com/content/dam/viasat/us/en/int_vsat_TM_rgb_grd_72x24.svg"},
    { nombre: "Dish Network",email: "support@dish.com",sitioWeb: "  www.dish.com",idProv: 3,proximoPedido: "5/8/2023",direccion: "9601 S Meridian Blvd, Englewood, CO 80112",numeroTelefono: "1-800-333-3474",producto:"Proveedor de televisión por satélite que ofrece una amplia selección de canales de televisión, paquetes de deportes y películas, así como opciones de programación de pago por visión. ",imagen: "https://www.dish.com/images/nav/dishLogo.svg"},
    {nombre: "DIRECTV",email: "info@directv.com ",sitioWeb: "www.directv.com",idProv: 4,proximoPedido: "3/10/2023",direccion: "2230 E. Imperial Hwy, El Segundo, CA 90245",numeroTelefono: "1-800-531-5000",producto:"Ofrece servicios de televisión por satélite y, en asociación con otros proveedores, opciones de internet de alta velocidad.",imagen: "https://www.directv.com/dtvassets/global/logos/dtv/directv/directv_hz_rgb_pos.svg" }

];

const sortBtn = document.getElementById("sort-btn");
const searchBox = document.getElementById("search");
let ordenAscendente = true;
const tablaProv = document.getElementById("tabla");
const tablaProv2 = document.getElementById("info")

function sortData(datos) {
    if (ordenAscendente) {
        datos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else {
        datos.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
    mostrarDatos(datos);
}
function mostrarDatos2(datos=empresas){
    tablaProv.innerHTML = "";
    datos.forEach(proveedor => {
        const fila = document.createElement("div");
        fila.classList.add("row", "mb-4", "border-bottom", "pb-2");

        const col1 = document.createElement("div");
        col1.classList.add("col-3");

        const img = document.createElement("img");
        img.classList.add("rounded-circle", "shadow-4-strong");
        img.setAttribute("alt", "avatar");
        img.setAttribute("src", `${proveedor.imagen}`);
        img.style.width = "65px";

        col1.appendChild(img);

        const col2 = document.createElement("div");
        col2.classList.add("col-9");

        const nombre = document.createElement("p");
        nombre.classList.add("mb-2");
        nombre.innerHTML = `<strong><a href='#' onclick="details(${proveedor.idProv})">${proveedor.nombre}</a></strong>`;

        const email = document.createElement("p");
        email.innerHTML = `<u>${proveedor.email}</u> ID= ${proveedor.idProv}`;

        col2.appendChild(nombre);
        col2.appendChild(email);

        fila.appendChild(col1);
        fila.appendChild(col2);

        tablaProv.appendChild(fila);
    });
}

sortBtn.addEventListener("click", function() {
    sortData(empresas);
    ordenAscendente = !ordenAscendente;
    sortData(empresas);
});

searchBox.addEventListener("input", function() {
    const idBuscado = parseInt(searchBox.value); 
    const proveedorEncontrado = [empresas.find(proveedor => proveedor.idProv === idBuscado)];
    tablaProv.innerHTML = "";
    if (searchBox.value === ""){
        window.location.reload()
    }
    if (proveedorEncontrado) {
        mostrarDatos2(proveedorEncontrado);
    } else {
        tablaProv.innerHTML = "No se encontró ningún usuario con ese ID";
    }
    details(idBuscado)
});

function details(idProv){
    const proveedor = [empresas.find(proveedor => proveedor.idProv === idProv)];
    proveedor.forEach(prov => {
        tablaProv2.innerHTML = "";
        const divProveedor = document.createElement("div");
        divProveedor.classList.add("prov");
        const img = document.createElement("img");
        img.classList.add("rounded-circle", "shadow-4-strong");
        img.setAttribute("src", `${prov.imagen}`);  
        img.setAttribute("alt", "");
        img.style.width = "150px";
        img.style.margin = "5%";
        divProveedor.appendChild(img);
    
        const nombre = document.createElement("p");
        nombre.innerText = prov.nombre;
        divProveedor.appendChild(nombre);
    
        const email = document.createElement("p");
        email.innerText = prov.email;
        divProveedor.appendChild(email);

        const numeroTelefono = document.createElement("p");
        numeroTelefono.innerText = prov.numeroTelefono;
        divProveedor.appendChild(numeroTelefono);

        const direccion = document.createElement("p");
        direccion.innerText = `Direccion: ${prov.direccion}`;
        divProveedor.appendChild(direccion);

        const idProv = document.createElement("p");
        idProv.innerText = `ID: ${prov.idProv}`;
        divProveedor.appendChild(idProv);

        const sitioWeb = document.createElement("p");
        sitioWeb.innerText = `Sitio web: ${prov.sitioWeb}`;
        divProveedor.appendChild(sitioWeb);

        const proximoPedido = document.createElement("p");
        proximoPedido.innerText = `Proximo pedido: ${prov.proximoPedido}`;
        divProveedor.appendChild(proximoPedido);
    
        const producto = document.createElement("p");
        producto.innerText = `Producto: ${prov.producto}`;
        divProveedor.appendChild(producto);

        tablaProv2.appendChild(divProveedor);
    });
}




 
mostrarDatos2()
details(1)

