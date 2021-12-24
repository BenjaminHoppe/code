console.log(window)
console.log("document", document)


if (typeof window !== 'undefined'){
  const darkButton = document.getElementById('dark');
const body = document.body;

darkButton.onclick = () => {
  body.classList.add('dark');
};
}

if (typeof window === 'undefined'){
  console.log('bla')
  console.log(document)
  const darkButton = document.getElementById('dark');
const body = document.body;

darkButton.onclick = () => {
  body.classList.add('dark');
};
}