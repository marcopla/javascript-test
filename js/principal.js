/* var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
var titulo = document.querySelector(".titulo");
titulo.textContent = "Banana"; */


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso"); // coleta o elemento
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;  //campo texto do elemento

var imc = (peso)/(altura * altura);

var tdImc = paciente.querySelector(".info-imc");

tdImc.textContent = imc;


