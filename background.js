// Set Icon: manifest.json bug prevents using svg
// Overrides default in manifest.json
chrome.browserAction.setIcon({path: 'icon.svg'});


var badgeState = 0; // Matches margin_state in content.js

// Send message to content.js that toolbar icon has been clicked
chrome.browserAction.onClicked.addListener(function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Add badge to icon for tab
        if (badgeState == 0) {
            chrome.browserAction.setBadgeText({text: ">  <", tabId: tabs[0].id});
            badgeState = 1;
        } else if (badgeState == 1) {
            chrome.browserAction.setBadgeText({text: "><", tabId: tabs[0].id});
            badgeState = 2;
        } else {
            chrome.browserAction.setBadgeText({text: "", tabId: tabs[0].id});
            badgeState = 0;            
        }
        
        chrome.tabs.sendMessage(tabs[0].id, {backgroundClick: true}, function(response) {
        console.log(response);
        });
    });
});

