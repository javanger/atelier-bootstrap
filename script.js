var url = location.search;
if (url == '?errors') {
var lesErrors = document.querySelectorAll('input');
lesErrors.forEach(param => {param.classList.add('is-invalid')});
}
form.addEventListener('submit', function (event) {
  if (form.checkValidity() === false) {
        event.preventDefault();
            event.stopPropagation();
       }
        form.classList.add('was-validated');
  }, false);



  var Nom {
    localStorage.setItem("Nom");
    document.getElementById('Nom').value = Nom;
  }

  function save{
sessionStorage.setItem('NOM', 'value')
localStorage.setItem('Nom', JSON.stringify(Nom));
}










function save() {
localStorage.setItem("Nom", "Nom");
localStorage.setItem("Prénom", "Prénom");
localStorage.setItem("Adresse", "Adresse");
localStorage.setItem("Date", "Date");
localStorage.setItem("numéro", "numéro");


alert( "Nom = " + localStorage.getItem("Nom"));
}
