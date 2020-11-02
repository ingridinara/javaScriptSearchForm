

const form = document.getElementById('formId');
// se trae a JS  almacenando en una variable el ID del formulario html


function formValidation(){
  var sumErrors = 0;
  // variable que acumula errores
  // si hay errores no se valida y no se envia al 
  // back-end/servidor

  form.classList.remove('is-invalid');
  // por defecto se quita la clase is-invalid

  // // form.classList.remove('was-validated');
  // por defecto se quita la clase was-validated

  var searcher = document.forms["formName"]["inputSearcherId"];
  //var searcher = getElementById("inputSearcherId");
  // es otra forma de hacer:
  // let searcher = getElementById('searcherId);
  //acordar que:
  //let searcher =document.forms["form"]["searcherID"];
  // --> el primero es el [name] del form y el segundo 
  // es la [ID] del input

 

  if ( searcher.value == "" ){
    // si el campo es vacio, va hacer 3 cosas:
    searcher.classList.add("is-invalid");
    //1. si es vacio, le anado la clase is-invalid
    document.getElementById("searcherErrorId").textContent="La busqueda no se realizara si no escribes nada";
    //2. vamos anadir el siguiente mensaje de error en el elemento
//html que tenga la id "searchErrorId"
    sumErrors++ ;
    //3. acumula un error
  } else if ( searcher.value.length < 3) {
// si la longitud es menor que 3 va hacer 3 cosas:
searcher.classList.add("is-invalid");
//1.  le anado la clase is-invalid
document.getElementById("searcherErrorId").textContent="La busqueda no se realizara si no escribes una palabra con al menos 3 letras";
//2.vamos anadir el siguiente mensaje de error en el elemento
//html que tenga la id "searchErrorId"
sumErrors++;
//3.acumula un error

  } else {
  searcher.classList.add("is-valid");
}

  // Sólo con propósito de testing, retorna false para visualizar los cambios en clases css
  return false;

}

//console.log(formValidation());
// nota: me ha ayudado a depurar arcaicamente y 
// encontrar erroes de escritura

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
// te da o no el color rojo o verde de la validacion 
// si tienes mas de un formulario 
