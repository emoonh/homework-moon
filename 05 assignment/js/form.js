document.getElementById("submit").onclick = function() {
	var fn = document.getElementsByName("fn")[0];
	if (fn.value.length <= 2){
		fn.classList.add("error");
	}
	var ln = document.getElementsByName("ln")[0];
	if (ln.value.length <= 2){
		ln.classList.add("error");
	}
	/*
	var ea = document.getElementsByName("ea")[0];
	if (ea.value.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		ea.classList.add("error");
	}
	*/
	var un = document.getElementsByName("un")[0];
	if (un.value.length <= 7){
		un.classList.add("error");
	}		
	var pw = document.getElementsByName("pw")[0];
	if (pw.value.length <= 8 || !pw.value.match(/\d+/)){
		pw.classList.add("error");
	}		
	return false;
};


document.getElementById("reset").onclick = function() {
	var response = confirm("Are you sure you want to clear the form? All data will be lost.");
	if (response == true) {
		var list = document.getElementsByClassName("field");
		for (var listIndex = 0; listIndex < list.length; listIndex++) {
			list[listIndex].value = "";
		}
	}
	
	return false;
};
