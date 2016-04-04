// State of margins for toggling changes
var cozy_settings = {
	origMarginLeft: "",
	origMarginRight: "",
	margins_changed: false,
};



function setMarginPercent(leftMarginInt, rightMarginInt) {
    document.body.style.marginLeft = leftMarginInt + "%";
    document.body.style.marginRight = rightMarginInt + "%";
}


// Icon click listener: adds 25% margins
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
        if (request.backgroundClick == true) {
			
			if (cozy_settings.margins_changed == false) {
				// If not changed, then set left and rightmargins to 25%
				cozy_settings.origMarginLeft = (document.body.style !== null) ? document.body.style.marginLeft : "";
				cozy_settings.origMarginRight = (document.body.style !== null) ? document.body.style.marginRight : "";
				setMarginPercent(25, 25);
				cozy_settings.margins_changed = true;
			} else {
				// If changed, then set the margins back to their original settings
				document.body.style.marginLeft = cozy_settings.origMarginLeft;
				document.body.style.marginRight = cozy_settings.origMarginRight;
				cozy_settings.margins_changed = false;
			}

            sendResponse(
				{result: "content.js processed backgroundClick == true"}
			);
			// Send response asynchronously
			return true; 
        }
});



