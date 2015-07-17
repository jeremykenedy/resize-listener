//FUNCTION TO LISTEN FOR BROWSER RESIZE AND EXECUTE THE NEEDED SCRIPTS ACCORDING TO PAGE WIDTH
window.onload = function() {
	//SHARED VARIABLES
	var theWidthToListenFor = "(max-width: 921px)";
	var isMobile = window.matchMedia(theWidthToListenFor);

	// CHECK ON PAGE LOAD
    if (isMobile.matches) {
    	console.log('is mobile on page load');
    	// DO STUFF HERE
    } else {
    	console.log('is NOT mobile on page load');
    	// DO STUFF HERE
    }
    // CHECK ON PAGE RESIZE
	window.onresize = function(event) {
	    if (isMobile.matches) {
	    	console.log('is mobile on page resize');
	    	// DO STUFF HERE
	    } else {
	  	console.log('is NOT mobile on page resize');
	  	// DO STUFF HERE
	    }
	};
};
