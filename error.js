var url = location.search;
if (url == '?errors') {
  if (window.location.href.includes('creer')) {
    var lesErrors = document.querySelectorAll('input');
    lesErrors.forEach(param => {param.classList.add('is-invalid')});
    var lesErrors = document.querySelectorAll('select');
    lesErrors.forEach(param => {param.classList.add('is-invalid')});
  }
  var lesErrors = document.querySelectorAll('#accordion input');
  lesErrors.forEach(param => {param.classList.add('is-invalid')});
  var lesErrors = document.querySelectorAll('select');
  lesErrors.forEach(param => {param.classList.add('is-invalid')});
}
else {
  var lesErrors = document.querySelectorAll('#accordion input');
  lesErrors.forEach(param => {param.classList.add()});
}
