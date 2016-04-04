function setMarginPercent(leftMarginInt, rightMarginInt) {
    document.body.style.marginLeft = leftMarginInt + "%";
    document.body.style.marginRight = rightMarginInt + "%";
}


// Icon click listener: adds 25% margins
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
        if (request.backgroundClick == true) {
            setMarginPercent(25, 25);
            sendResponse(
				{result: "content.js processed backgroundClick == true"}
			);
			// Send response asynchronously
			return true; 
        }
});



