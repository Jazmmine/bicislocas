function validateForm(){
	/* Escribe tú código aquí */
	/* Para los campos nombre y apellido sólo permiten caracteres de la A-Z*/
	var name = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var expreg = /^[a-z][a-z]*/;
    var email = document.getElementById("input-email").value;
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var contra = document.getElementById("input-password").value;

	if(expreg.test(name))
		alert("El campo son correctos");
	else
		alert("El campo nombre sólo permiten caracteres de la A-Z");  
	
	if(expreg.test(lastname))
		alert("El campo son correctos");
	else
		alert("El campo apellido sólo permiten caracteres de la A-Z"); 

	/* Para los campos nombre y apellido la primera letra debe ser mayúscula*/

	if (name.charAt(0) == name.charAt(0).toLowerCase())
        alert("La primera letra debe ser Mayuscula");
    else
        return true;

    if (lastname.charAt(0) == lastname.charAt(0).toLowerCase())
        alert("La primera letra debe ser Mayuscula");
    else
        return true;
    /* Validar que el campo email tenga un formato válido. Ej: name@domain.com*/
	if (expr.test(email))
   		email = document.getElementById("input-email").value = " ";
	else
	   alert("La dirección de email es incorrecta.");
	/*El campo password debe tener al menos 6 caracteres*/
	if (contra.length< 6 || (contra == "password") || (contra == "123456") || (contra=="098754")) 
	    alert("Input no valido");
	/*El valor seleccionado de bicis, debe ser una de las opciones presentadas*/
	if(document.querySelector("select").value == 0)
        alert("Ingresa una bicicleta");

}