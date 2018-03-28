var url = location.search;
if (url == '?errors') {
      var lesErrors = document.querySelectorAll("input[type='text']");
      lesErrors.forEach(param => {param.classList.add('is-invalid')});
      lesErrors = document.querySelectorAll("input[type='date']");
      lesErrors.forEach(param => {param.classList.add('is-invalid')});
      lesErrors = document.querySelectorAll("input[type='tel']");
      lesErrors.forEach(param => {param.classList.add('is-invalid')});
      lesErrors = document.querySelectorAll('textarea');
      lesErrors.forEach(param => {param.classList.add('is-invalid')});
      lesErrors = document.querySelectorAll('select');
      lesErrors.forEach(param => {param.classList.add('is-invalid')});
}

if(document.querySelector('#creerCollaboratuer') != null){
  document.querySelector('#creerCollaboratuer').addEventListener('click', function(evt){
    if(document.querySelector('#inputNom').value == "" || document.querySelector('#inputPrenom').value == "" || 
          document.querySelector('#inputDateNaissance').value == ""|| document.querySelector('#TextareaAdresse').value == "" || 
          document.querySelector('#inputNumeroSecuSocial').value == ""){

        var lesErrors = document.querySelectorAll("input[type='text']");
        lesErrors.forEach(param => {param.classList.add('is-invalid')});
        lesErrors = document.querySelectorAll("input[type='date']");
        lesErrors.forEach(param => {param.classList.add('is-invalid')});
        lesErrors = document.querySelectorAll("input[type='tel']");
        lesErrors.forEach(param => {param.classList.add('is-invalid')});
        lesErrors = document.querySelectorAll('textarea');
        lesErrors.forEach(param => {param.classList.add('is-invalid')});
        lesErrors = document.querySelectorAll('select');
        lesErrors.forEach(param => {param.classList.add('is-invalid')});

    }else{

      var nom = document.querySelector("#inputNom").value;
      var prenom = document.querySelector("#inputPrenom").value;
      var dateNaissance = document.querySelector("#inputDateNaissance").value;
      var adresse = document.querySelector("#TextareaAdresse").value;
      var numeroSecuSocial = document.querySelector("#inputNumeroSecuSocial").value;
  
      document.querySelector("#spanNom").innerText = nom;
      document.querySelector("#spanPrenom").innerText = prenom;
      document.querySelector("#spanDateNaissance").innerText = dateNaissance;
      document.querySelector("#spanAdresse").innerText = adresse;
      document.querySelector("#spanNumSecuSocial").innerText = numeroSecuSocial;
  
      $("#myModal").modal();
    }
  });
};

if(document.querySelector('#modalValider') != null){
  document.querySelector('#modalValider').addEventListener('click', function(evt){
    var nom = document.querySelector("#inputNom").value;
    var prenom = document.querySelector("#inputPrenom").value;
    var dateNaissance = document.querySelector("#inputDateNaissance").value;
    var adresse = document.querySelector("#TextareaAdresse").value;
    var numeroSecuSocial = document.querySelector("#inputNumeroSecuSocial").value;

    var value = JSON.stringify({nom : nom, prenom : prenom, 
      dateNaissance : dateNaissance, adresse : adresse, 
      numeroSecuSocial : numeroSecuSocial});
      
    localStorage.setItem(numeroSecuSocial, value);
  });
}

function getDonnee(){
  var templates = "";
  var virgule = ",";
  var listKey = Object.keys(localStorage);
  listKey.forEach(param => {
    var collaborateur = JSON.parse(localStorage.getItem(param));
    var template = `
          <div class="col-xl-3 col-lg-6 offset-xl-1 col-md-6 col-12 offset-1 pt-5">
            <div class="card" style="width: 18rem;">
                  <div class="card-header">
                      <h5 class="card-title">${collaborateur.nom} ${collaborateur.prenom}</h5>
                  </div>                            
                  <img class="card-img-top" src="Pictures/Photo.jpg" alt="Card image cap">
                  <div class="card-body">
                      <p><label>Fonction</label>  ${collaborateur.fonction}</p>
                      <p><label>Département</label>   ${collaborateur.departement}</p>
                      <p><label>Email</label>   ${collaborateur.email}</p>
                      <p><label>Téléphone</label>   ${collaborateur.tel}</p>
                      <div class="text-right"><a href="editer-collab.html" class="btn btn-primary">Editer</a></div>
                  </div>
              </div>
          </div>`;
    templates += template;
  });
  document.getElementById("index").innerHTML = templates;
}

if(window.location.href.includes('index')){
  document.addEventListener("DOMContentLoaded", function(event) {
    getDonnee();
  });
}