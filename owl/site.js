const darkButton = document.getElementsById('dark');
const body = document.getElementsByTagName('body');

darkButton.onclick = function() {
  body.classList.add('dark');
};
