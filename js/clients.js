const usuarios = [
    { nombre: "Sebastian Alvarado Rojas", email: "sebastuan4@gmail.com", id: 1, fechaNacimiento: "01/11/2001", genero:"Masculino",tipoPlan:"Telefono e internet",proximoPago:"7/4/2023",moroso:"no"},
    { nombre: "María Fernanda Pérez", email: "mariafp@gmail.com", id: 2, fechaNacimiento: "15/06/1995", genero:"Femenino",tipoPlan:"Cable e internet",proximoPago:"12/4/2023",moroso:"no"},
    { nombre: "Pedro Contreras Gutiérrez", email: "pedrocg@hotmail.com", id: 3, fechaNacimiento: "10/02/1989", genero:"Masculino",tipoPlan:"Cable y Teléfono",proximoPago:"10/4/2023",moroso:"no"},
    { nombre: "Ana Karenina Vázquez", email: "anakvzqz@gmail.com", id: 4, fechaNacimiento: "28/11/1978", genero:"Femenino",tipoPlan:"Internet",proximoPago:"20/4/2023",moroso:"no"},
    { nombre: "Santiago Ramírez Ortega", email: "sramirez@outlook.com", id: 5, fechaNacimiento: "02/09/2000", genero:"Masculino",tipoPlan:"Cable e internet",proximoPago:"9/4/2023",moroso:"no"},
    { nombre: "Laura González Morales", email: "lauragm@hotmail.com", id: 6, fechaNacimiento: "12/07/1992", genero:"Femenino",tipoPlan:"Cable Telefono e internet",proximoPago:"5/4/2023",moroso:"si"},
    { nombre: "Juan Carlos Torres", email: "juantorres@gmail.com", id: 7, fechaNacimiento: "22/03/1975", genero:"Masculino",tipoPlan:"Cable e internet",proximoPago:"8/4/2023",moroso:"no"},
    { nombre: "Valentina Torres", email: "valentinatorres@gmail.com", id: 8, fechaNacimiento: "05/01/2005", genero:"Femenino",tipoPlan:"Telefono e internet",proximoPago:"15/4/2023",moroso:"no"},
    { nombre: "Ricardo Hernández", email: "ricardohdz@yahoo.com", id: 9, fechaNacimiento: "19/12/1984", genero:"Masculino",tipoPlan:"Cable y Teléfono",proximoPago:"14/4/2023",moroso:"no"},
    { nombre: "Alicia García", email: "aliciagar@yahoo.com", id: 10, fechaNacimiento: "30/05/1972", genero:"Femenino",tipoPlan:"Internet",proximoPago:"30/4/2023",moroso:"no"},
    { nombre: "Andrés Pérez", email: "andrespz@gmail.com", id: 11, fechaNacimiento: "08/08/1998", genero:"Masculino",tipoPlan:"Cable Telefono e internet",moroso:"no"}
];

const sortBtn = document.getElementById("sort-btn");
const searchBox = document.getElementById("search");
let ordenAscendente = true;
const tabla = document.getElementById("tabla");
const tabla2 = document.getElementById("info")

function sortData(datos) {
    if (ordenAscendente) {
        datos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else {
        datos.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
    mostrarDatos(datos);
}
function mostrarDatos(datos=usuarios){
    tabla.innerHTML = "";
    datos.forEach(usuario => {
        const fila = document.createElement("div");
        fila.classList.add("row", "mb-4", "border-bottom", "pb-2");

        const col1 = document.createElement("div");
        col1.classList.add("col-3");

        const img = document.createElement("img");
        img.classList.add("rounded-circle", "shadow-4-strong");
        img.setAttribute("alt", "avatar");
        img.setAttribute("src", "img/user.png");
        img.style.width = "65px";

        col1.appendChild(img);

        const col2 = document.createElement("div");
        col2.classList.add("col-9");

        const nombre = document.createElement("p");
        nombre.classList.add("mb-2");
        nombre.innerHTML = `<strong><a href='#' onclick="details(${usuario.id})">${usuario.nombre}</a></strong>`;

        const email = document.createElement("p");
        email.innerHTML = `<u>${usuario.email}</u> ID= ${usuario.id}`;

        col2.appendChild(nombre);
        col2.appendChild(email);

        fila.appendChild(col1);
        fila.appendChild(col2);

        tabla.appendChild(fila);
    });
}

sortBtn.addEventListener("click", function() {
    sortData(usuarios);
    ordenAscendente = !ordenAscendente;
    sortData(usuarios);
});

searchBox.addEventListener("input", function() {
    const idBuscado = parseInt(searchBox.value); 
    const usuarioEncontrado = [usuarios.find(usuario => usuario.id === idBuscado)];
    tabla.innerHTML = "";
    if (searchBox.value === ""){
        window.location.reload()
    }
    if (usuarioEncontrado) {
        mostrarDatos(usuarioEncontrado);
    } else {
        tabla.innerHTML = "No se encontró ningún usuario con ese ID";
    }
    details(idBuscado)
});

function details(id){
    const usuario = [usuarios.find(usuario => usuario.id === id)];
    usuario.forEach(cliente => {
        tabla2.innerHTML = "";
        const divCliente = document.createElement("div");
        divCliente.classList.add("cliente");
        const img = document.createElement("img");
        img.setAttribute("src", "img/User.png");
        img.setAttribute("alt", "");
        img.style.width = "150px";
        img.style.margin = "5%";
        divCliente.appendChild(img);
    
        const nombre = document.createElement("p");
        nombre.innerText = cliente.nombre;
        divCliente.appendChild(nombre);
    
        const email = document.createElement("p");
        email.innerText = cliente.email;
        divCliente.appendChild(email);
    
        const id = document.createElement("p");
        id.innerText = `Id Cliente: ${cliente.id}`;
        divCliente.appendChild(id);
    
        const fechaNacimiento = document.createElement("p");
        fechaNacimiento.innerText = `Fecha Nacimiento: ${cliente.fechaNacimiento}`;
        divCliente.appendChild(fechaNacimiento);
    
        const genero = document.createElement("p");
        genero.innerText = `Genero: ${cliente.genero}`;
        divCliente.appendChild(genero);
    
        const tipoPlan = document.createElement("p");
        tipoPlan.innerText = `Tipo de plan: ${cliente.tipoPlan}`;
        divCliente.appendChild(tipoPlan);
    
        const proximoPago = document.createElement("p");
        proximoPago.innerText = `Proxima fecha de pago: ${cliente.proximoPago}`;
        divCliente.appendChild(proximoPago);
    
        const moroso = document.createElement("p");
        moroso.innerText = `Moroso: ${cliente.moroso}`;
        divCliente.appendChild(moroso);

        tabla2.appendChild(divCliente);
    });
}



 
mostrarDatos()
details(10)
