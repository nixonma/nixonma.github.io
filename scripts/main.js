var rhit = rhit || {};


rhit.functionName = function () {
	/** function body */
};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	document.querySelector(".navbar-brand").onclick = (event) => {
		window.location.href = "/"
	}
	document.querySelector("#resumeButton").onclick = (event) => {
		window.location.href = "/resume.html"
	}
};

rhit.main();
