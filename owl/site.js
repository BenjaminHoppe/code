console.log(window)
console.log("document", document)
console.log("document.getElementById", document.getElementById)


const darkButton = document.getElementById('dark');
console.log("document.getElementById('dark')", document.getElementById('dark'))
console.log("document.getElementByClassName)", document.getElementsByClassName("switch"))
// const body = document.body;
// console.log(document.body)
console.log(document.getElementsByTagName("body"))
darkButton.onclick = () => {
  body.classList.add('dark');
};


