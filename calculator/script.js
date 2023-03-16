function addToScreen(value) {
	document.getElementById('result').value += value;
}

function clearScreen() {
	document.getElementById('result').value = '';
}

function backspace() {
	let result = document.getElementById('result').value;
	document.getElementById('result').value = result.substr(0, result.length - 1);
}

function calculate() {
	let result = document.getElementById('result').value;
	if (result) {
		document.getElementById('result').value = eval(result);
	}
}