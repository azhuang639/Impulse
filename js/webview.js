let listElement;

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

                for (i = 0; i < pricesArray.length; i++) {
                    listElement = "Product Name: " + productsArray[i] + ", Date: " + datesArray[i] + ", Price: $" + Number.parseFloat(pricesArray[i]).toFixed(2) + ", Did Purchase?: " + isImpulsesArray[i];
                    liMaker(listElement);
                }
            });
        });
    });
});

function liMaker(element) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(element);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
