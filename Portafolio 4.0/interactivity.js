
//Funcionalidades del panel de input de correo.//////////////////////////////////
function changeColor() {
    var inputField = document.getElementById("input");


    // Cambia el color del borde del input a azul de manera gradual
    setTimeout(function () {
        inputField.style.borderColor = "lightblue";
        inputField.style.borderWidth = ".2px";
        inputField.style.boxShadow = " inset 0px 0px 0px 1.5px blue"
        inputField.placeholder = ""
    }, 10);
}

document.addEventListener("click", function (event) {
    var inputField = document.getElementById("input");

    // Verifica si el clic no se produjo en el input
    if (event.target !== inputField) {

        // Restablece el color del borde del input a negro de manera gradual
        setTimeout(function () {
            inputField.style.borderColor = "grey";
            inputField.style.borderWidth = "0.2px";
            inputField.style.boxShadow = "none"
            inputField.placeholder = "Correo electronico o teléfono"

        }, 10);
    }
});
/////////////////////////////////////////////////////////////////////////////////






//Funcionalidades del panel de opciones para paises./////////////////////////////
function toggleOptions() {

    var optionsContainer = document.getElementById("optionsContainer");
    var toggleOptions = document.getElementById("toggleOptions")
    // Si el panel está cerrado o en proceso de cerrarse
    if (optionsContainer.style.opacity === "0" || optionsContainer.style.opacity === "") {
        optionsContainer.style.opacity = "1";
        optionsContainer.style.visibility = "visible";
        toggleOptions.style.backgroundColor = "rgb(226, 225, 225)";
    } else {
        optionsContainer.style.opacity = "0";
        toggleOptions.style.backgroundColor = "white";

        // Agregamos un retraso para ocultar el panel después de la transición
        setTimeout(function () {
            optionsContainer.style.visibility = "hidden";
            toggleOptions.style.backgroundColor = "white";
        }, 450); // 300 milisegundos, ajusta según la duración de la transición
    }
    
    
}

function selectOption(option) {
    var selectTrigger = document.querySelector(".select-trigger");
    selectTrigger.textContent = option;
    toggleOptions();
}


// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function (event) {
    var customSelect = document.getElementById("customSelect");
    var toggleOptions = document.getElementById("toggleOptions")
    if (!customSelect.contains(event.target)) {
        document.getElementById("optionsContainer").style.opacity = "0";
        toggleOptions.style.backgroundColor = "white";

        // Agregamos un retraso para ocultar el panel después de la transición
        setTimeout(function () {
            document.getElementById("optionsContainer").style.visibility = "hidden";

        }, 5000); // 300 milisegundos, ajusta según la duración de la transición
    } else {
        // Se hizo clic dentro del custom-select

    }
});
/////////////////////////////////////////////////////////////////////////////////




// Funcionalidades del panel de cambio de cuentas///////////////////////////////
function cambiarOpcion() {

    var opciones = document.getElementById("opciones-contenedor");
    var desencadenante = document.getElementById("desencadenante")
    // Si el panel está cerrado o en proceso de cerrarse
    if (opciones.style.opacity === "0" || opciones.style.opacity === "") {
        opciones.style.opacity = "1";
        opciones.style.visibility = "visible";
        desencadenante.style.backgroundColor = " rgba(175, 216, 247, 0.105)";
    } else {
        opciones.style.opacity = "0";
        desencadenante.style.backgroundColor = "white";

        // Agregamos un retraso para ocultar el panel después de la transición
        setTimeout(function () {
            opciones.style.visibility = "hidden";
            desencadenante.style.backgroundColor = "white";
        }, 450); // 300 milisegundos, ajusta según la duración de la transición
    }



function selectOptions(option) {
    var desencadenante = document.querySelector(".crear-cuenta");
    desencadenante.textContent = option;
    toggleOptions();
}

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function (event) {

    var select = document.getElementById("contenedor-select");
    var desencadenante = document.getElementById("desencadenante")
    if (!select.contains(event.target)) {
        document.getElementById("opciones-contenedor").style.opacity = "0";
        desencadenante.style.backgroundColor = "white";

        // Agregamos un retraso para ocultar el panel después de la transición
        setTimeout(function () {
            document.getElementById("opciones-contenedor").style.visibility = "hidden";

        }, 5000); // 300 milisegundos, ajusta según la duración de la transición
    } else {
        // Se hizo clic dentro del custom-select

    }
});
}
////////////////////////////////////////////////////////////////////////////////


function cambiarIdioma(nuevoIdioma) {
    document.documentElement.lang = nuevoIdioma;
  }
  