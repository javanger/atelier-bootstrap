document.querySelector('#creerCollaboratuer').addEventListener('click', function(evt){
  if(document.querySelector('#inputNom').value == "" || document.querySelector('#inputPrenom').value == "" || 
        document.querySelector('#inputDateNaissance').value == ""|| document.querySelector('#TextareaAdresse').value == "" || 
        document.querySelector('#inputNumeroSecuSocial').value == ""){
    url = location.search + '?errors'
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
  }
});

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