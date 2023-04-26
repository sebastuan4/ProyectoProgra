const usuarios = [
    { nombre: "Sebastian Alvarado Rojas", email: "sebastuan4@gmail.com", id: 1, fechaNacimiento: "01/11/2001", genero:"Masculino",tipoPlan:"Telefono e internet",proximoPago:"7/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/eb/90/5d/eb905dce4c5e67259d5e324d682ec801.jpg"},
    { nombre: "María Fernanda Pérez", email: "mariafp@gmail.com", id: 2, fechaNacimiento: "15/06/1995", genero:"Femenino",tipoPlan:"Cable e internet",proximoPago:"12/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/bb/29/f4/bb29f4c0e65e7a1aef5d256e12ffaf21.jpg"},
    { nombre: "Pedro Contreras Gutiérrez", email: "pedrocg@hotmail.com", id: 3, fechaNacimiento: "10/02/1989", genero:"Masculino",tipoPlan:"Cable y Teléfono",proximoPago:"10/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/53/73/86/537386abac75390708597abefab87b7b.jpg"},
    { nombre: "Ana Karenina Vázquez", email: "anakvzqz@gmail.com", id: 4, fechaNacimiento: "28/11/1978", genero:"Femenino",tipoPlan:"Internet",proximoPago:"20/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/03/59/49/03594965c55a6a661e98c836cab70ee9.jpg"},
    { nombre: "Santiago Ramírez Ortega", email: "sramirez@outlook.com", id: 5, fechaNacimiento: "02/09/2000", genero:"Masculino",tipoPlan:"Cable e internet",proximoPago:"9/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/35/16/6e/35166eda618a1fc0bf913e32dfb45a94.jpg"},
    { nombre: "Laura González Morales", email: "lauragm@hotmail.com", id: 6, fechaNacimiento: "12/07/1992", genero:"Femenino",tipoPlan:"Cable Telefono e internet",proximoPago:"5/4/2023",moroso:"si", imagen:"https://i.pinimg.com/236x/8c/85/c2/8c85c2a8cab045de80ba6dcc78614217.jpg"},
    { nombre: "Juan Carlos Torres", email: "juantorres@gmail.com", id: 7, fechaNacimiento: "22/03/1975", genero:"Masculino",tipoPlan:"Cable e internet",proximoPago:"8/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/a0/3c/22/a03c2286cb754d14d953c6b590d9787b.jpg"},
    { nombre: "Valentina Torres", email: "valentinatorres@gmail.com", id: 8, fechaNacimiento: "05/01/2005", genero:"Femenino",tipoPlan:"Telefono e internet",proximoPago:"15/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/c5/bb/6e/c5bb6e4cdf6c37c71979172fc601511d.jpg"},
    { nombre: "Ricardo Hernández", email: "ricardohdz@yahoo.com", id: 9, fechaNacimiento: "19/12/1984", genero:"Masculino",tipoPlan:"Cable y Teléfono",proximoPago:"14/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/e5/66/31/e56631fa1cf153ba6ac23d0b2aaf4bc3.jpg"},
    { nombre: "Alicia García", email: "aliciagar@yahoo.com", id: 10, fechaNacimiento: "30/05/1972", genero:"Femenino",tipoPlan:"Internet",proximoPago:"30/4/2023",moroso:"no", imagen:"https://i.pinimg.com/236x/db/13/04/db1304f8f3a3f85181feaeb4ec3458bc.jpg"},
    { nombre: "Andrés Pérez", email: "andrespz@gmail.com", id: 11, fechaNacimiento: "08/08/1998", genero:"Masculino",tipoPlan:"Cable Telefono e internet",moroso:"no",imagen:"https://i.pinimg.com/236x/93/42/cf/9342cf5826a41a443d853681f367c32e.jpg"}
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
        img.setAttribute("src", `${usuario.imagen}`);
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
        img.classList.add("rounded-circle", "shadow-4-strong");
        img.setAttribute("src", `${cliente.imagen}`);  
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
details(1)

// Función para validar el formulario
function validateForm() {
    var form = document.getElementById("register-form");
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  }
  
  // Función para enviar los datos del formulario al servidor
  function submitForm() 
  {
    // Obtener los datos del formulario
    var nombre = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var birthDate = document.getElementById("birth-date").value;
    var address = document.getElementById("address").value;}
  
    // Enviar los datos del formulario al servidor usando AJAX
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        // Mostrar un mensaje de éxito al usuario
        alert("El cliente ha sido registrado exitosamente.");
        // Reiniciar el formulario
        document.getElementById("register-form").reset
    }}