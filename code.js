/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  const nombreUsuario = prompt(" Coloca tu nombre, por favor ");
  const edadUsuario = parseInt(prompt(" Coloca tu año de nacimiento, por favor "));
  const ciudadUsuario = prompt(" Coloca tu Ciudad de Domicilio, por favor ");
  const interesPorJsUsuario = confirm(" ¿Te interesa JavaScript? ");
  
  const anioActual = new Date().getFullYear();

  datosPersona.nombre = nombreUsuario;
  datosPersona.edad = anioActual - edadUsuario;
  datosPersona.ciudad = ciudadUsuario;
  datosPersona.interesPorJs = interesPorJsUsuario;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
document.querySelector("#nombre").innerText = datosPersona.nombre;
document.querySelector("#edad").innerText = datosPersona.edad;
document.querySelector("#ciudad").innerText = datosPersona.ciudad;
document.querySelector("#javascript").innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
const contenedor = document.querySelector ("#fila");
contenedor.innerHTML = "";

listado.forEach((materias) => {
const crearTarjeta = document.createElement("class");
crearTarjeta.classList.add("caja");
crearTarjeta.innerHTML += `
<img src = "${materias.imgUrl}" alt = "${materias.bimestre}">
<p>${materias.lenguajes}</p>
<p>${materias.bimestre}</p>
`;
contenedor.appendChild(crearTarjeta);
});
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */ 
  const sitio = document.querySelector("#sitio")
   sitio.classList.toggle("dark")

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.querySelector("#sobre-mi");
const presionarF = document.querySelector("#card").querySelector("small");
window.addEventListener("keypress", function(e) {
  if (e.key == "F" || e.key == "f") {
    sobreMi.classList.remove("oculto");
    presionarF.classList.add("oculto");
  }
}); 