"use strict";
window.onload = function()
{
	let form = document.getElementById("email").value;
	let state=  document.getElementsByClassName("message").innerHTML
	let text; Text;
	
	if ((form.includes("@")) && (form.includes(".com"))){
		text = "Thank you! Your email address has been added to our mailing list";
	}else{
		text = "Please enter a valid email address";
	}
	state = text;
}