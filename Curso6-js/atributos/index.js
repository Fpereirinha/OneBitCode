function verifyEnablement() {
	let opc = document.querySelector("select option:checked").value;
	let campo = document.querySelector("input[name='some-text']");
	let message = document.getElementById("message");
	if (opc == "disabled") {
		campo.disabled = true;
		message.innerText = "Desabilitado.";
		message.style.backgroundColor = "red";
	} else {
		campo.disabled = false;
		message.innerText = "";
	}
}
