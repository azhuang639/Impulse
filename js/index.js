insertWindow();

function insertWindow() {
  fetch(chrome.extension.getURL('html/window.html'))
    .then(response => response.text())
    .then(data => {
      const body = document.getElementsByTagName('body')[0];
      const window = document.createElement('div');
      window.innerHTML = data;
      body.append(window);

    }).catch(err => {
    console.log('Error loading Impulse window:' + err)
  });
}
