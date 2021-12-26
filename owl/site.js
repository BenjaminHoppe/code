console.log(window)
console.log("document", document)
console.log("document.getElementById", document.getElementById)


const darkButton = document.getElementsByClassName("switch");
console.log("document.getElementById('dark')", document.getElementById('dark'))
console.log("document.getElementByClassName)", document.getElementsByClassName("switch"))

const body = console.log(document.getElementsByTagName("body"))
darkButton.onclick = () => {
  console.log('adding tag to body: ', body)
  body.classList.add('dark');
  console.log(body)
};


