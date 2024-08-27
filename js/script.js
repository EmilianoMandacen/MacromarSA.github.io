
document.querySelector("#selctProductos").addEventListener("change", ocultaGrupos); 

function ocultaGrupos() {

    let valor = document.querySelector("#selctProductos").value;

    const grupos = {
        "producto1": ".grupo1",
        "producto2": ".grupo2",
        "producto3": ".grupo3",
        "producto4": ".grupo4",
        "producto5": ".grupo5",
        "producto6": ".grupo6"
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

