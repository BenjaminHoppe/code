console.log(window)
console.log(document)
import React from 'react';
console.log(React)
if (typeof window !== 'undefined'){
  const darkButton = document.getElementById('dark');
const body = document.body;

darkButton.onclick = () => {
  body.classList.add('dark');
};
}