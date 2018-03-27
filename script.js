

$('#numero').change(function(){
  $('#numModal').html($(this).val());
})
$('#nom').change(function(){
  $('#nomModal').html($(this).val());
})
$('#date').change(function(){
  $('#dateModal').html($(this).val());
})
$('#prenom').change(function(){
  $('#prenomModal').html($(this).val());
})
$('#adresse').change(function(){
  $('#adresseModal').html($(this).val());
})

var url = location.search;
if (url == '?errors') {
var lesErrors = document.querySelectorAll('input');
lesErrors.forEach(param => {param.classList.add('is-invalid')});
}

function inserer(){
var numero=document.getElementById("numero").value;
var nom=document.getElementById("nom").value;
var prenom=document.getElementById("prenom").value;
var date=document.getElementById("date").value;
var adresse=document.getElementById("adresse").value;
var value = JSON.stringify({nom: nom, numero: numero, prenom: prenom, date: date, adresse: adresse});
localStorage.setItem("collaborateur", value);

var valeur = localStorage.getItem("collaborateur");
var collaborateur = JSON.parse(valeur);



document.querySelector("#buttoncreer").addEventListener('click', function(){
  $('#myModal').modal();
});

}
