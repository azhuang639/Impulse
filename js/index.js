// const imported = document.createElement('script');
// imported.src = 'window.js';
// document.head.appendChild(imported);

trackImpulse();

function trackImpulse() {
  let targetButton;
  var price;
  var price_val;

  const url = location.href;
  if (!url) {
    return;
  }

  if (url.includes('amazon.com')) {
    targetButton = document.getElementById('add-to-cart-button');

    if (targetButton){
        price = document.getElementById('priceblock_ourprice');
        if (!price) price = document.getElementById('priceblock_dealprice');
        console.log(price);
        if (price) {
            price_val = price.innerHTML;
            console.log(price_val);
            let length = price_val.length;
            price_val = price_val.substring(1,length);
            console.log(price_val);

        }
    }


  } else if (url.includes('ebay.com')) {
    targetButton = null; // replace with the id of the button we want to track
  }

  if (targetButton) {
    targetButton.addEventListener('click', (e) => {
      // If impulse window has not already been shown
      if (!document.getElementById('impulse-checked')) {
        e.preventDefault();
        insertWindow();
      }
    });
  }
}

function insertWindow() {
  fetch(chrome.extension.getURL('html/window.html'))
    .then(response => response.text())
    .then(data => {
      const body = document.getElementsByTagName('body')[0];
      const window = document.createElement('div');
      window.className = 'impulse-window';
      window.id = 'impulse-window';
      window.innerHTML = data;
      body.append(window);

      const overlay = document.createElement('div');
      overlay.className = 'impulse-overlay';
      overlay.id = 'impulse-overlay';
      body.append(overlay);

      startup();

    }).catch(err => {
    console.log('Error loading Impulse window:' + err)
  });
}
