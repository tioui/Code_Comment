
function mode_selector(){
	this.loaded_modes = {};

	this.load_mode = function (a_mode, a_callback) {
		if (this.loaded_modes[a_mode]) {
			a_callback(a_mode);
		} else {
			var scriptTag = document.createElement('script');
			scriptTag.src = "CodeMirror/mode/" + a_mode + "/" + a_mode + ".js";
			scriptTag.onload = (function(a_loaded_modes, a_mode, a_callback) { 
									return function() {
										a_loaded_modes[a_mode] = true;
										a_callback(a_mode);
									};
								})(this.loaded_modes, a_mode, a_callback);

			scriptTag.onreadystatechange = scriptTag.onload;
			document.head.appendChild(scriptTag);
		}
	}
}
