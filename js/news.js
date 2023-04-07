const noticias = [
    { category: "Productos", date: "7/4/2023", title: "Nuevos servicios de Telefonia", text: "Los nuevos servicios ofrecen tasas competitivas en el mercado clic para ver mas...", image:"https://images.unsplash.com/photo-1598464824367-4d6b4c22bd2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { category: "Promociones", date: "7/4/2023", title: "Descuento del 20% en planes de internet", text: "Aprovecha nuestra promoción de internet con descuento del 20% en planes seleccionados.", image:"https://images.unsplash.com/photo-1598238179116-ec3c4c0f7a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    { category: "Productos", date: "7/3/2023", title: "Lanzamiento de nueva caja decodificadora", text: "Disfruta de tus programas y películas favoritas con nuestra nueva caja decodificadora de alta definición.", image:"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"},
    { category: "Servicio al cliente", date: "7/2/2023", title: "Mejoras en la atención al cliente", text: "Estamos trabajando constantemente para brindarte un mejor servicio al cliente y resolver tus dudas y problemas de manera rápida y efectiva.", image:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  },
    { category: "Eventos", date: "7/1/2023", title: "Participación en Feria de Tecnología", text: "Te esperamos en nuestro stand en la Feria de Tecnología para que conozcas nuestros últimos productos y servicios.", image:"https://images.unsplash.com/photo-1582192730841-2a682d7375f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"  },
    { category: "Productos", date: "6/30/2023", title: "Lanzamiento de nueva línea de teléfonos inteligentes", text: "No te pierdas nuestro lanzamiento de la nueva línea de teléfonos inteligentes con tecnología de última generación.", image:"https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { category: "Promociones", date: "6/29/2023", title: "Día del cliente: ofertas en todos nuestros servicios", text: "Celebra con nosotros el Día del Cliente y aprovecha nuestras ofertas en servicios de cable, teléfono e internet.", image:"https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" },
    { category: "Productos", date: "6/28/2023", title: "Nueva opción de paquetes combinados", text: "Ahorra dinero y disfruta de todos nuestros servicios con nuestras nuevas opciones de paquetes combinados.", image:"https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { category: "Servicio al cliente", date: "6/27/2023", title: "Nuevo chat en línea para atención al cliente", text: "Contáctanos a través de nuestro nuevo chat en línea para una atención al cliente más rápida y eficiente.", image:"https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
  ];const news = document.getElementById("noticias");
var start = 0
var end = 3
var actual = 1
function mostrarDatos(datos=noticias){
    news.innerHTML = "";
    datos=noticias.slice(start,end);
    datos.forEach(noticia => {
        const div1 = document.createElement("div");
        div1.classList.add("col-lg-4", "col-md-12", "mb-4", "mb-lg-0");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        div3.classList.add(
        "bg-image",
        "hover-overlay",
        "shadow-1-strong",
        "ripple",
        "rounded-5",
        "mb-4"
        );
        div3.setAttribute("data-mdb-ripple-color", "light");

        const img = document.createElement("img");
        img.setAttribute(
        "src",
        `${noticia.image}`
        );
        img.classList.add("img-fluid");

        div3.appendChild(img);
        div2.appendChild(div3);

        const div4 = document.createElement("div");
        div4.classList.add("row", "mb-3");

        const div5 = document.createElement("div");
        div5.classList.add("col-6");

        const a1 = document.createElement("a");
        a1.setAttribute("href", "");
        a1.classList.add("text-info");

        const i1 = document.createElement("i");
        i1.classList.add("fas", "fa-plane");
        a1.appendChild(i1);

        a1.appendChild(document.createTextNode(`${noticia.category}`));
        div5.appendChild(a1);
        div4.appendChild(div5);

        const div6 = document.createElement("div");
        div6.classList.add("col-6", "text-end");

        const u1 = document.createElement("u");
        u1.appendChild(document.createTextNode(`${noticia.date}`));

        div6.appendChild(u1);
        div4.appendChild(div6);

        div2.appendChild(div4);

        const a2 = document.createElement("a");
        a2.setAttribute("href", "");
        a2.classList.add("text-dark");

        const h5 = document.createElement("h5");
        h5.appendChild(document.createTextNode(`${noticia.title}`));

        const p = document.createElement("p");
        p.appendChild(
        document.createTextNode(`${noticia.text}`));

        a2.appendChild(h5);
        a2.appendChild(p);
        div2.appendChild(a2);
        div1.appendChild(div2);
        news.appendChild(div1);
    });
}
function pages(nPage,actual2=""){
    var active = document.getElementById(`${actual}`);
    active.classList.remove("active");
    if (nPage==1||actual2==1){
        start=0
        end=3
    }
    if (nPage==2||actual2==2){
        start=3
        end=6
    }
    if (nPage==3||actual2==3){
        start=6
        end=9  
    }
    if (actual2==""){
        actual=nPage
    }else{
        actual=actual2
    }
    
    
    var active = document.getElementById(`${actual}`);
    active.classList.add("active");
    mostrarDatos(); 
}

function previus_next(x){
    if (x=="p"){
        actual2=actual-1
    }else{
        actual2=actual+1
    }
    if (actual2<1){
        actual2=actual2+1
    }
    if (actual2>3){
        actual2=actual2-1
    }
    pages(0,actual2)
}

mostrarDatos()