chrome.storage.local.get(['prices'], function(result) {
    chrome.storage.local.get(['isImpulses'], function(impulseResult) {
        chrome.storage.local.get(['dates'], function(dateResult) {
            chrome.storage.local.get(['products'], function(productResult) {
                productsArray = productResult.products ? productResult.products : [];
                pricesArray = result.prices ? result.prices : [];
                isImpulsesArray = impulseResult.isImpulses ? impulseResult.isImpulses : [];
                datesArray = dateResult.dates ? dateResult.dates : [];
                console.log("prices array is " + pricesArray);
                console.log("dates array is " + datesArray);
                console.log("isImpulses array is " + isImpulsesArray);
                console.log("products array is " + productsArray);

            });
        });
    });
});