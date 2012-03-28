$('html').removeClass('no-js').addClass('js');

// Add the Object.create method to global namespace. Credit: Doug Crockford.
if (typeof Object.create !== 'function'){
	Object.create = function (o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	}
}

// Dynamically load script or styles
function includeNewFile(fileName, elementType){

	var fileElement = document.createElement(elementType);
	
	if(elementType == 'script'){
		fileElement.src = fileName;
		fileElement.type ='text/javascript';
		
	}else if(elementType == 'link'){//cross browser (...IE) friendly way of doing it:	
		fileElement = '<link rel="stylesheet" type="text/css" href="' + fileName + '" />';
	}
	$('head').append(fileElement);
	
}