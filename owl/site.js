const darkButton = document.getElementById('dark');
const body = document.getElementByTagName('body');

darkButton.onclick = function() {
  body.classList.add('dark');
};
