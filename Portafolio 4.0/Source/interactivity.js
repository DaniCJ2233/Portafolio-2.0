
//Funcionalidades del panel de input de correo.//////////////////////////////////
function changeColor() {
    var inputField = document.getElementById("input");
<<<<<<< HEAD


    // Cambia el color del borde del input a azul de manera gradual
    setTimeout(function () {
        inputField.style.borderColor = "lightblue";
        inputField.style.borderWidth = ".2px";
        inputField.style.boxShadow = " inset 0px 0px 0px 1.5px blue"
        inputField.placeholder = ""
    }, 10);
=======
    var placeholder = document.getElementById("placeholder");
    
    document.addEventListener("click", function (event) {

        
        if (event.target == placeholder || event.target == inputField) {
            setTimeout(function () {
                placeholder.style.color = "blue";
                placeholder.style.fontSize = "75%";
                placeholder.style.backgroundColor = "white";
                placeholder.style.transform = "translateY(-25px) translateX(-2px)";
            }, 50);

            // Cambia el color del borde del input a azul de manera gradual
            setTimeout(function () {
                inputField.style.borderColor = "lightblue";
                inputField.style.borderWidth = ".2px";
                inputField.style.boxShadow = " inset 0px 0px 0px 1.5px blue"
                inputField.placeholder = ""
                crearCuenta.style.background = "lightblue"

            }, 10);

        } else {
            placeholder.style.color = "rgb(61, 60, 60)";
            placeholder.style.fontSize = "93%";
            placeholder.style.transform = "translateY(0px) translateX(0px)";
            placeholder.style.backgroundColor = "transparent";
        }
    });



    var inputField = document.getElementById("input");




>>>>>>> 83abd81 (Google registro 4.0)
}

document.addEventListener("click", function (event) {
    var inputField = document.getElementById("input");

    // Verifica si el clic no se produjo en el input
<<<<<<< HEAD
    if (event.target !== inputField) {
=======
    if (event.target !== inputField || !event.target == placeholder) {
>>>>>>> 83abd81 (Google registro 4.0)

        // Restablece el color del borde del input a negro de manera gradual
        setTimeout(function () {
            inputField.style.borderColor = "grey";
            inputField.style.borderWidth = "0.2px";
            inputField.style.boxShadow = "none"
<<<<<<< HEAD
            inputField.placeholder = "Correo electronico o teléfono"

        }, 10);
=======
            inputField.placeholder = ""

        }, 1);
>>>>>>> 83abd81 (Google registro 4.0)
    }
});
/////////////////////////////////////////////////////////////////////////////////






//Funcionalidades del panel de opciones para paises./////////////////////////////
function toggleOptions() {
<<<<<<< HEAD

=======
>>>>>>> 83abd81 (Google registro 4.0)
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
<<<<<<< HEAD
        }, 450); // 300 milisegundos, ajusta según la duración de la transición
    }
    
    
=======
        }, 100); // 300 milisegundos, ajusta según la duración de la transición
    }


>>>>>>> 83abd81 (Google registro 4.0)
}

function selectOption(option) {
    var selectTrigger = document.querySelector(".select-trigger");
    selectTrigger.textContent = option;
    toggleOptions();
}


// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function (event) {
    var customSelect = document.getElementById("customSelect");
<<<<<<< HEAD
    var toggleOptions = document.getElementById("toggleOptions")
    if (!customSelect.contains(event.target)) {
        document.getElementById("optionsContainer").style.opacity = "0";
        toggleOptions.style.backgroundColor = "white";
=======
    
    if (!customSelect.contains(event.target)) {
        document.getElementById("optionsContainer").style.opacity = "0";
        
>>>>>>> 83abd81 (Google registro 4.0)

        // Agregamos un retraso para ocultar el panel después de la transición
        setTimeout(function () {
            document.getElementById("optionsContainer").style.visibility = "hidden";

        }, 5000); // 300 milisegundos, ajusta según la duración de la transición
    } else {
        // Se hizo clic dentro del custom-select

    }
});
/////////////////////////////////////////////////////////////////////////////////

<<<<<<< HEAD



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
=======
// Funcionalidades del panel de opciones para cuentas.
function cambiarOpcion() {
    var opcionesContenedor = document.getElementById("opciones-contenedor");
    var desencadenante = document.getElementById("desencadenante");

    // Si el panel está cerrado o en proceso de cerrarse
    if (opcionesContenedor.style.opacity === "0" || opcionesContenedor.style.opacity === "") {
        opcionesContenedor.style.opacity = "1";
        opcionesContenedor.style.visibility = "visible";
        desencadenante.style.backgroundColor = "rgba(133, 198, 255, 0.205)";
    } else {
        opcionesContenedor.style.opacity = "0";
>>>>>>> 83abd81 (Google registro 4.0)
        desencadenante.style.backgroundColor = "white";

        // Agregamos un retraso para ocultar el panel después de la transición
        setTimeout(function () {
<<<<<<< HEAD
            opciones.style.visibility = "hidden";
            desencadenante.style.backgroundColor = "white";
        }, 450); // 300 milisegundos, ajusta según la duración de la transición
    }

}

function selectOptions(option) {
    var desencadenante = document.querySelector(".crear-cuenta");
    desencadenante.textContent = option;
    cambiarOpcion();
=======
            opcionesContenedor.style.visibility = "hidden";
            desencadenante.style.backgroundColor = "white";
        }, 450); // 450 milisegundos, ajusta según la duración de la transición
    }
>>>>>>> 83abd81 (Google registro 4.0)
}

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function (event) {
<<<<<<< HEAD

    var select = document.getElementById("contenedor-select");
    var desencadenante = document.getElementById("desencadenante")
    if (!select.contains(event.target)) {
=======
    var contenedorSelect = document.getElementById("contenedorSelect");
    var desencadenante = document.getElementById("desencadenante");

    if (!contenedorSelect.contains(event.target)) {
>>>>>>> 83abd81 (Google registro 4.0)
        document.getElementById("opciones-contenedor").style.opacity = "0";
        desencadenante.style.backgroundColor = "white";

        // Agregamos un retraso para ocultar el panel después de la transición
        setTimeout(function () {
            document.getElementById("opciones-contenedor").style.visibility = "hidden";
<<<<<<< HEAD

        }, 5000); // 300 milisegundos, ajusta según la duración de la transición
    } else {
        // Se hizo clic dentro del custom-select

    }
});

////////////////////////////////////////////////////////////////////////////////

  
=======
        }, 450); // 450 milisegundos, ajusta según la duración de la transición
    } else {
        // Se hizo clic dentro del contenedor-select
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////





>>>>>>> 83abd81 (Google registro 4.0)
