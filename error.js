var url = location.search;
if (url == '?errors') {
  var lesErrors = document.querySelectorAll('input');
  lesErrors.forEach(param => {param.classList.add('is-invalid')});
}
