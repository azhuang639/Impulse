trackImpulse();

function trackImpulse() {
  let targetButton;
  const url = location.href;
  if (!url) {
    return;
  }

  if (url.includes('amazon.com')) {
    targetButton = document.getElementById('add-to-cart-button');
  } else if (url.includes('ebay.com')) {
    targetButton = null; // replace with the id of the button we want to track
  }

  if (targetButton) {
    targetButton.addEventListener('click', (e) => {
      e.preventDefault();
      insertWindow();
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
      window.innerHTML = data;
      body.append(window);

      const overlay = document.createElement('div');
      overlay.className = 'impulse-overlay';
      body.append(overlay);

    }).catch(err => {
    console.log('Error loading Impulse window:' + err)
  });
}
