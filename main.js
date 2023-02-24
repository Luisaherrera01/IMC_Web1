const btnCalcular = document.querySelector("#btnCalcular");

const calcularImc = () => {
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const resultado = document.querySelector("#resultado");
  const imagen = document.querySelector("#imagen");
  const imc =
    parseFloat(peso.value) /
    (parseFloat(altura.value) * parseFloat(altura.value));
  if (imc.toFixed(2) < 18.5) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/BajoPeso.png";
  } else if (imc.toFixed(2) < 24.9) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/Normal.png";
  } else if(imc.toFixed(2) < 34.9) {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/SobrePeso.png";
  } else {
    resultado.textContent = imc.toFixed(2);
    imagen.src = "./img/Obeso.png";
  }
}; 

btnCalcular.addEventListener("click", calcularImc);


// se crea una constante para seleccionar el nodo id btnborrar
const btnBorrar = document.querySelector("#btnBorrar");
// se crea la funcion borrarImc para que ejecute lo que esta adentro de la funcion
const borrarImc = () =>{
  const peso = document.querySelector("#peso");
  peso.value= "";
  const altura = document.querySelector("#altura");
  altura.value = "";
  const resultado = document.querySelector("#resultado");
  resultado.textContent = "";
  const imagen = document.querySelector("#imagen");
  imagen.src = "";
}
// ejecuta la funcion donde se llama a la constante y se le dice al programa que va a ejecutar un evento que se llama click y que se ejecute la funcion que se programo
btnBorrar.addEventListener("click", borrarImc);




