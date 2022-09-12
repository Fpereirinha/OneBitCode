function addNew() {
	const phones = document.querySelector("form#phones");
	const new_phone = phones.children[0].cloneNode(true);
	const position = phones.children.length + 1;
	new_phone.querySelector("label").innerText = `Telefone ${position}: `;
	phones.appendChild(new_phone);
}
function printPhones() {
	let message = "";
	const phones = document.querySelectorAll("input[name='phone']");
	phones.forEach((element, index) => {
		message += `Telefone ${index + 1}: ${element.value}\n`;
	});
	alert(message);
}
