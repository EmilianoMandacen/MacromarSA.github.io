//Slider Sobre nosotros
let fotos = document.querySelectorAll('.slide');
let fotoActual = 0;
fotos[fotoActual].style.opacity = 1;

let prev = document.querySelector('#btn-prev').addEventListener('click', prevSlide);
function prevSlide() {
    fotos[fotoActual].style.opacity = 0;
    fotoActual = (fotoActual - 1 + fotos.length) % fotos.length;
    fotos[fotoActual].style.opacity = 1;
}

let next = document.querySelector('#btn-next').addEventListener('click', nextSlide);
function nextSlide() {
    fotos[fotoActual].style.opacity = 0;
    fotoActual = (fotoActual + 1) % fotos.length;
    fotos[fotoActual].style.opacity = 1;
}


setInterval(nextSlide, 5000);

let startX = 0;
let endX = 0;

document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', e => {
    endX = e.touches[0].clientX;
});

document.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX + 50 < endX) {
        prevSlide();
    }
});


document.querySelector("#selctProductos").addEventListener("change", ocultaGrupos); 

function ocultaGrupos() {

    let valor = document.querySelector("#selctProductos").value;

    const grupos = {
        "producto1": ".grupo1",
        "producto2": ".grupo2",
        "producto3": ".grupo3",
        "producto4": ".grupo4",
        "producto5": ".grupo5",
        "producto6": ".grupo6",
        "producto7": ".grupo7",
        "producto8": ".grupo8"
    };

    // Ocultar todos los grupos
    if (grupos != grupos[valor]) {
        for (let grupo in grupos) {
            document.querySelector(grupos[grupo]).style.display = "none";
        }
    }

    // Mostrar el grupo
    if (grupos[valor]) {
        document.querySelector(grupos[valor]).style.display = "flex";
    }
}



document.querySelector("#slider").addEventListener("click", nosotros);

function nosotros() {
        //que segun la url actual te lleve a nosotros o osotrosEn
        let url = window.location.href;
        if (url.includes("index_en.html")) {
            window.location.href = "../english/nosotrosEn.html";
        } else if (!url.includes("index_en.html")) {
            window.location.href = "../nosotros.html";
        }
    }
