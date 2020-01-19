//accedemos al boton

  var boton = document.getElementById('bu');
//la funcion que ejecuta el boton
boton.onclick = function () {

  var nombre = document.getElementById('nom').value;
  console.log(nombre.innerHTML);
alert("respuesta: "+nombre.innerHTML);
}
