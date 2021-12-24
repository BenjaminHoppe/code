if (typeof window !== 'undefined'){
  const darkButton = document.getElementById('dark');
const body = document.body;

darkButton.onclick = () => {
  body.classList.add('dark');
};
}