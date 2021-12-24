const darkButton = document.getElementById('dark');
const body = document.body;
console.log(darkButton)
darkButton.onclick = () => {
  console.log('clicked')
  body.classList.add('dark');
};