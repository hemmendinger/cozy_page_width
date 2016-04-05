// Set Icon: manifest.json bug prevents using svg
// Overrides default in manifest.json
chrome.browserAction.setIcon({path: 'icon.svg'});

// Send message to content.js that toolbar icon has been clicked
chrome.browserAction.onClicked.addListener(function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Add badge to icon for tab
        chrome.browserAction.setBadgeText({text: "><", tabId: tabs[0].id}); // We have 10+ unread items.
        chrome.tabs.sendMessage(tabs[0].id, {backgroundClick: true}, function(response) {
        console.log(response);
        });
    });
});

