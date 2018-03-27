var url = location.search;
if (url === '?errors') {
  var errors = document.querySelectorAll('input, textarea');
  errors.forEach(param => {param.classList.add('is-invalid')});
}