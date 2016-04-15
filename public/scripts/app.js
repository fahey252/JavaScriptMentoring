(function ($) {
    var appContainer = window.document.getElementsByTagName("body")[0],
        aliasTextBox = window.document.createElement("input"),
        userName = 'parker';

    aliasTextBox.type = 'text';
    aliasTextBox.placeholder = 'Alias Name Here';

    if (userName) {
    	var message = "hi";

    	window.console.log(message);
    }

    appContainer.appendChild(aliasTextBox);
}(window.jQuery));