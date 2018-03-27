/// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

var url = location.search;
if (url === "?errors") {
  var errors = document.querySelectorAll("input, textarea");
  errors.forEach(param => {
    param.classList.add("is-invalid");
  });
}

$(document).ready(function() {
  $("#actionmodal").click(function() {
    $("#exampleModalCenter").modal();
  });
});


function store() {
  var nom = document.getElementById("name").value;
  var prenom = document.getElementById("lastname").value;
  console.log(nom)
  var numeroSecu = document.getElementById("secu").value;
  var birthday = document.getElementById("birthday").value;
  var adresse = document.getElementById("adresse").value;
 

  var value = JSON.stringify({ name: nom, lastname: prenom, anniversary : birthday, location : adresse  });

  

  localStorage.setItem(numeroSecu,value);
}
