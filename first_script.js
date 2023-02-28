// alert("Se cargo el Script!!!");

//DOM --> Document Object Model

document.addEventListener("DOMContentLoaded", function(event) {
  var identificadorNode = document.getElementById("identificador");
  identificadorNode.addEventListener("click", function(event) {
    var h1Node = identificadorNode.getElementsByTagName("h1")[0];
    h1Node.innerHTML = "Título (" + new Date().toTimeString() + ")";
    //alert("Se hizo click en el elemento con id: identificador");
  });
});
