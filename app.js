var nom = prompt("Entrez votre nom: ");
document.getElementById('bienvenue').innerHTML = ("Bienvenue " + nom);

var afficher = document.getElementById('affichage');
var form = document.getElementById('calcule');


function jaffiche(){
  if(form.display != "block"){
    form.style.display = "block";
  }else {
    form.style.display = "none";
  }
};
function jecache(){
  if(form.display != "none"){
    form.style.display = "none";
  }
}


var nombre1 = document.getElementById('nombre1');
var nombre2 = document.getElementById('nombre2');
var operateur = document.getElementById('operateur');


document.getElementById('calculer').onclick = function () {

  if (operateur.value == "+") {
    document.getElementById('resultat').value = (parseInt(nombre1.value)+parseInt(nombre2.value));

  } else if (operateur.value == "-") {
    
  document.getElementById('resultat').value = (parseInt(nombre1.value)-parseInt(nombre2.value));
  
  }else if (operateur.value == "*") {
    
    
  document.getElementById('resultat').value = (parseInt(nombre1.value)*parseInt(nombre2.value));

  }else if (operateur.value == "/") {
 
  document.getElementById('resultat').value = (parseInt(nombre1.value)/parseInt(nombre2.value));

  }else if (operateur.value == "%") {
    
  document.getElementById('resultat').value = (parseInt(nombre1.value)%parseInt(nombre2.value));

  }
}

var souris = document.querySelector('#nombre1');
var message = document.querySelector('#message');
var operateur = document.querySelector('#operateur')

document.querySelector('#message').style.display = "none";
document.querySelector('#selectioneur').style.display = "none";

function mouseOver() {
  document.getElementById("message").style.display ="block";
  document.getElementById("message").style.textAlign = "center";
  document.getElementById("message").style.border ="solid 1px";
  document.getElementById("message").style.width ="645px";
  document.getElementById("message").style.background='yellow';
}
function mouseOut() {
  document.getElementById("message").style.display ="none";
}

function operateurOver() {
  document.getElementById("selectioneur").style.display ="block";
  document.getElementById("selectioneur").style.textAlign = "center";
  document.getElementById("selectioneur").style.border ="solid 1px";
  document.getElementById("selectioneur").style.width ="645px";
  document.getElementById("selectioneur").style.background='yellow';
}
function operateurOut() {
  document.getElementById("selectioneur").style.display ="none";
}

var grande_image = document.getElementsById('grande_image').src;
var mignature = document.getElementsById('mignature').scr;
var chemin_image = 'photos/';

 function changeImage(imageaaffiche){
document.getElementById('grande_image').src= chemin_image + mignature;
}