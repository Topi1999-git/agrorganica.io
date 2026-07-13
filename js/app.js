const video = document.getElementById("videoHero");
const boton = document.getElementById("btnSonido");

boton.addEventListener("click", () => {

    video.muted = !video.muted;

    if(video.muted){
        boton.innerHTML = "🔇";
    }else{
        boton.innerHTML = "🔊";
        video.volume = 1;
    }

});


//SECCION SOSTENIBILIDAD
const slides = [

{
    titulo:"Libre de pesticidas",
    descripcion:`No utilizamos pesticidas sintéticos. Muchos de estos tienen efectos adversos para el medio ambiente y la salud humana. 
                Buscamos prevenir brotes de enfermedades monitoreando la nutrición de las plantas, la ecología del suelo y demás parámetros.`,
    sos_img1:"images/pesticidas1.png",
    sos_img2:"images/pesticidas2.png"
},

{
    titulo:"Compostaje",
    descripcion:"El compostaje nos permite utilizar menos inputs externos y más de nuestra propia materia orgánica para generar un suelo rico y productivo.",
    sos_img1:"images/galeria5.jpg",
    sos_img2:"images/galeria9.jpg"
},

{
    titulo:"Iniciativas para el Bienestar",
    descripcion:"Siempre buscamos la manera de mejorar la salud y el bienestar de nuestros empleados. Ya sea mediante la construcción de áreas recreativas o un chequeo médico anual, tratamos de brindarles el mayor apoyo.",
    sos_img1:"images/iniciativas1.png",
    sos_img2:"images/iniciativas2.png"
},

{
    titulo:"Participación Comunitaria",
    descripcion:"Nos encanta poder apoyar a nuestra comunidad. Es muy gratificante para nosotros contribuir al desarrollo de las nuevas generaciones.",
    sos_img1:"images/participacioncomunitaria1.png",
    sos_img2:"images/participacioncomunitaria2.png"
},

{
    titulo:"No OGM (Organismos genéticamente modificados)",
    descripcion:"Todos nuestros cultivos e insumos no están modificados genéticamente.",
    sos_img1:"images/noOGM1.png",
    sos_img2:"images/noOGM2.png"
}

];

let actual = 0;

const dots = document.querySelectorAll(".dot");

function mostrarSlide(){

    document.getElementById("titulo").innerText =
        slides[actual].titulo;

    document.getElementById("descripcion").innerText =
        slides[actual].descripcion;

    document.getElementById("sos_img1").src =
        slides[actual].sos_img1;

    document.getElementById("sos_img2").src =
        slides[actual].sos_img2;

    actualizarDots();
}

function actualizarDots(){

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[actual].classList.add("active");
}

document.getElementById("next").onclick = () => {
    actual++;
    if(actual >= slides.length){
        actual = 0;
    }
    mostrarSlide();
};

document.getElementById("prev").onclick = () => {
    actual--;
    if(actual < 0){
        actual = slides.length - 1;
    }
    mostrarSlide();
};

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        actual = index;

        mostrarSlide();

    });

});

mostrarSlide();


setInterval(() => {

    actual++;

    if(actual >= slides.length){
        actual = 0;
    }

    mostrarSlide();

}, 6000);

// SECCION DE CERTIFICACIONES

const track = document.getElementById("cert-track");

const certDots = document.querySelectorAll(".cert-dot");
let certActual = 0;

function actualizarCertDots(){

    certDots.forEach(dot=>{
        dot.classList.remove("active");
    });

    certDots[certActual].classList.add("active");
}

document.getElementById("cert-next").onclick = () =>{

    track.appendChild(track.firstElementChild);

    certActual++;

    if(certActual >= certDots.length){
        certActual = 0;
    }

    actualizarCertDots();
};

document.getElementById("cert-prev").onclick = () =>{

    track.prepend(track.lastElementChild);

    certActual--;

    if(certActual < 0){
        certActual = certDots.length - 1;
    }

    actualizarCertDots();
};

setInterval(() => {

    track.appendChild(track.firstElementChild);

    certActual++;

    if(certActual >= certDots.length){
        certActual = 0;
    }

    actualizarCertDots();

}, 3000);

certDots.forEach((dot, index)=>{

    dot.addEventListener("click", ()=>{

        while(certActual !== index){

            track.appendChild(track.firstElementChild);

            certActual++;

            if(certActual >= certDots.length){
                certActual = 0;
            }
        }

        actualizarCertDots();
    });

});

// SECCION GALERIA

const imagenes = [

    "images/galeria1.jpg",
    "images/galeria2.jpg",
    "images/galeria3.jpg",
    "images/galeria4.jpg",
    "images/galeria5.jpg",
    "images/galeria6.jpg",
    "images/galeria7.jpg",
    "images/galeria8.jpg",
    "images/galeria9.jpg",
    "images/galeria10.jpg",
    "images/galeria11.jpg",
    "images/galeria12.jpg",
    "images/galeria13.jpg",
    "images/galeria14.jpg",
    "images/galeria15.png",
    "images/galeria16.jpg",
    "images/galeria17.jpg",
    "images/galeria18.jpg",
    "images/galeria19.jpg",
    "images/galeria20.jpg",
    "images/galeria21.jpg",
    "images/galeria22.jpg",
    "images/galeria23.jpg",
    "images/galeria24.jpg",
    "images/galeria25.jpg",
    "images/galeria26.jpg",
    "images/galeria27.jpg",
    "images/galeria28.jpg",
    "images/galeria29.jpg"
];

let inicio = 0;

function mostrarGaleria(){

    for(let i = 0; i < 6; i++){

        const img =
            document.getElementById(`gal_img${i+1}`);

        img.src =
            imagenes[(inicio + i) % imagenes.length];
    }
}

document.getElementById("gal-next").onclick = ()=>{

    inicio += 6;

    if(inicio >= imagenes.length){
        inicio = 0;
    }

    mostrarGaleria();
};

document.getElementById("gal-prev").onclick = ()=>{

    inicio -= 6;

    if(inicio < 0){

        inicio =
            imagenes.length - 6;

        if(inicio < 0){
            inicio = 0;
        }
    }

    mostrarGaleria();
};

mostrarGaleria();

setInterval(()=>{

    inicio += 6;

    if(inicio >= imagenes.length){
        inicio = 0;
    }

    mostrarGaleria();

},3000);


// BOTON DE SUBIDA

const btnWhatsapp = document.querySelector(".btn-whatsapp-float");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        btnTop.classList.add("mostrar");
        btnWhatsapp.classList.add("mostrar");

    }else{

        btnTop.classList.remove("mostrar");
        btnWhatsapp.classList.remove("mostrar");

    }

});

const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        btnTop.classList.add("mostrar");
    }else{
        btnTop.classList.remove("mostrar");
    }

});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// MENU TOGGLE

const botonMenu =
document.getElementById("menu-toggle");

const mobileMenu =
document.getElementById("mobile-menu");

botonMenu.addEventListener("click", ()=>{

    mobileMenu.classList.toggle("active");

    if(mobileMenu.classList.contains("active")){
        botonMenu.innerHTML = "✕";
    }else{
        botonMenu.innerHTML = "☰";
    }

});

const enlacesMenu =
document.querySelectorAll(".mobile-menu a");

enlacesMenu.forEach(link=>{

    link.addEventListener("click", ()=>{

        mobileMenu.classList.remove("active");

        botonMenu.innerHTML = "☰";

    });

});

// FORMULARIO

const formulario =
document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const datos = {
        nombre: formulario.nombre.value,
        correo: formulario.correo.value,
        asunto: formulario.asunto.value,
        mensaje: formulario.mensaje.value
    };

    console.log(datos);

    alert("Formulario enviado correctamente (modo prueba).");

    formulario.reset();

});



