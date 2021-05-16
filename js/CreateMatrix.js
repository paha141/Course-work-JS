var button = document.getElementById("addToField");
button.onclick = handleButtonClick;

function handleButtonClick(){
	var m = parseFloat(document.getElementById("m").value);
	var n = parseFloat(document.getElementById("n").value);
	var div = document.getElementById("table");
  	document.getElementById("result").value = "";
	removeField(div);
	if (m <= 0 || n <= 0 || !Number.isInteger(m) || !Number.isInteger(n)){
		alert("Вы ввели неположительное число и/или нецелое число");
		return;
	}
	for (var i = 0; i < m; i++) {
		var divDaughter = document.createElement("div");
		div.appendChild(divDaughter);
		for (var j = 0; j < n; j++) {
			var input = document.createElement("input");
			input.type = "text";
			input.id = 'tb' + i + j;
			input.maxLength = 1;
			input.size = 1;
			input.value = 0;
			divDaughter.appendChild(input);
		}
	}
}

function removeField(div){
	while (div.firstChild)
		div.removeChild(div.firstChild);
}