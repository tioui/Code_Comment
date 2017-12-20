
function file_commenter(a_container, a_text_area){

	this.container = null;

	this.code_mirrors = null;

	this.set_mode = function (a_mode) {
		for (var i = 0; i < this.code_mirrors.length; i = i + 1) {
			this.code_mirrors[i].setOption("mode", a_mode);
		}
	}

	this.__make = function (a_container, a_text_area){
		this.container = a_container;
		this.code_mirrors = new Array();
		this.code_mirrors[0] = CodeMirror.fromTextArea(a_text_area,
				{
					lineNumbers: true,
					viewportMargin: Infinity,
					readOnly:  true
				}
			);
	}

	this.__make(a_container, a_text_area);
}
