// Set Icon: manifest.json bug prevents using svg
// Overrides default in manifest.json
chrome.browserAction.setIcon({path: 'icon.svg'});

// Send message to content.js that toolbar icon has been clicked
chrome.browserAction.onClicked.addListener(function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {backgroundClick: true}, function(response) {
            console.log(response.result);
        });
    });
});

