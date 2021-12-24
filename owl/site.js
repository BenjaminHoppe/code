const darkbutton = document.getElementById('dark');
const body = document.body;

darkbutton.onclick = () => {
  body.classList.add('dark');
};