chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type == "closeTab") {
            chrome.tabs.remove(sender.tab.id);
        }
    }
);