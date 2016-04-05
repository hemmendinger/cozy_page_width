// State of margins for toggling changes
var cozy_settings = {
	defaultMarginLeft: "",
	defaultMarginLeft: "",
	margin_state: 0,
};



function setMarginPercent(leftMarginInt, rightMarginInt) {
    document.body.style.marginLeft = leftMarginInt + "%";
    document.body.style.marginRight = rightMarginInt + "%";
}


// Icon click listener: adds 25% margins
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
        if (request.backgroundClick == true) {
			// margin option 0: default
			// margin option 1: 25%
			// margin option 2: 35%
			if (cozy_settings.margin_state == 0) {
				// If default, set left/right margins to 25%
				cozy_settings.defaultMarginLeft = (document.body.style !== null) ? document.body.style.marginLeft : "";
				cozy_settings.defaultMarginLeft = (document.body.style !== null) ? document.body.style.marginRight : "";
				setMarginPercent(25, 25);
				cozy_settings.margin_state = 1;
			} else if (cozy_settings.margin_state == 1) {
				// If default, set left/right margins to 35%
				setMarginPercent(35, 35);
				cozy_settings.margin_state = 2;
			} else {
				// Set margins to default
				document.body.style.marginLeft = cozy_settings.defaultMarginLeft;
				document.body.style.marginRight = cozy_settings.defaultMarginLeft;
				cozy_settings.margin_state = 0;
            }

            sendResponse(
				{result: "content.js processed backgroundClick == true"}
			);
			// Send response asynchronously
			return true; 
        }
});



