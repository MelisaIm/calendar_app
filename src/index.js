function component() {
	var element = document.createElement("div");

	element.innerHTML = "Welcome to Vue";

	return element;
}

document.body.appendChild(component());
