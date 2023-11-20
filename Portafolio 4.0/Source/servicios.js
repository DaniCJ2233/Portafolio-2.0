function traducirTexto(textoOriginal, targetLanguage) {
  const apiKey = 'AIzaSyBNtJopeAI5hapAOkY7hLvfYESA72DVdk0'; // Reemplaza con tu propia clave de API

  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const requestBody = {
    q: textoOriginal,
    target: targetLanguage,
  };

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(response => response.json())
    .then(data => {
      return data.data.translations[0].translatedText;
    })
    .catch(error => {
      console.error('Error en la traducción:', error);
      return textoOriginal; // En caso de error, devolver el texto original
    });
}

function traducirPagina(targetLanguage) {
  const elementosDeTexto = document.querySelectorAll('*:not(script):not(style)'); // Excluye scripts y estilos

  elementosDeTexto.forEach(elemento => {
    if (elemento.childNodes.length === 1 && elemento.firstChild.nodeType === 3) {
      // Solo aplica traducción a nodos de texto directos
      const textoOriginal = elemento.firstChild.nodeValue.trim();
      traducirTexto(textoOriginal, targetLanguage)
        .then(textoTraducido => {
          elemento.firstChild.nodeValue = textoTraducido;
        })
        .catch(error => {
          console.error('Error de traducción:', error);
        });
    }
  });
}

document.addEventListener("click", function (event) {
  const idiomaSeleccionado = event.target.dataset.idioma; // Suponiendo que tienes un atributo 'data-idioma' en tus elementos del panel
  if (idiomaSeleccionado) {
    traducirPagina(idiomaSeleccionado);
  }
});
