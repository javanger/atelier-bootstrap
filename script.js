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
