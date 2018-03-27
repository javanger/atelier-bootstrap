
function getDonnee(){
  var templates = [];
  var donnees = Object.keys(localStorage);
  donnees.forEach(param => {
    var unCollab = JSON.parse(localStorage.getItem(param));
    var template = `
    <div class="col-lg-4 col-sm-12 col-md-6">
      <h4><label>${unCollab.name}</label> <label>${unCollab.prenom}</label></h4>
      <div class="media">
        <img class="align-self-start mr-3" src="logo.jpg" alt="Generic placeholder image">
        <div class="media-body">
          <label>Fonction : </label><label>${unCollab.fonction}</label><br/>
          <label>Département : </label><label>${unCollab.departement}</label><br/>
          <label>Email : </label><label>${unCollab.email}</label><br/>
          <label>Téléphone : </label><label>${unCollab.telephone}</label><br/>
          <a href="editer-collab.html"><button type="button" class="btn btn-primary">Éditer</button></a>
        </div>
      </div>
    `;
    templates.push(template);
  })
  document.getElementById("index").innerHTML = templates;
}
function setDonnee(){
  document.querySelector('#validation').addEventListener('click', function(evt){
    evt.preventDefault();
    var nom = document.querySelector("#inputNom").value;
    var prenom = document.querySelector("#inputPrenom").value;
    var naissance = document.querySelector("#inputNaissance").value;
    var adresse = document.querySelector("#inputAddresse").value;
    var numSociale = document.querySelector("#inputNumSociale").value;
    if (nom == '') {
      var error = document.querySelector('#inputNom');
      error.classList.add('is-invalid');
    }
    if (prenom =='') {
      var error = document.querySelector('#inputPrenom');
      error.classList.add('is-invalid');
    }
    if (naissance == '') {
      var error = document.querySelector('#inputNaissance');
      error.classList.add('is-invalid');
    }
    if (adresse == '') {
      var error = document.querySelector('#inputAddresse');
      error.classList.add('is-invalid');
    }
    if (numSociale == 0) {
      var error = document.querySelector('#inputNumSociale');
      error.classList.add('is-invalid');
    }else {
      var value = JSON.stringify({name : nom, prenom : prenom, dateNaissance : naissance, adresse: adresse, numeroSociale : numSociale});
      localStorage.setItem(numSociale, value);
    }
  })
}
function editDonne(){

}
function getActivite(){

}
function getStatistique(){

}
function setModal(){
  document.querySelector('#creation').addEventListener('click', function(evt){
  document.getElementById('nom').innerText = document.querySelector("#inputNom").value;
  document.getElementById('prenom').innerText = document.querySelector("#inputPrenom").value;
  document.getElementById('date').innerText = document.querySelector("#inputNaissance").value;
  document.getElementById('adresse').innerText = document.querySelector("#inputAddresse").value;
  document.getElementById('numero').innerText = document.querySelector("#inputNumSociale").value;
  })
}
