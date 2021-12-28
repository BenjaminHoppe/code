(function(){
    document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'));    
})();

document.addEventListener
  ("keydown", function(event) {
    if (event.key === "1") {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
    }
    if (event.key === "2") {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
    }
});

let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById('switch');
const changeThemeToDark = () =>{
  document.documentElement.setAttribute('data-theme', 'dark')
  localStorage.setItem('data-theme', 'dark')
}

const changeThemeToLight = () =>{
  document.documentElement.setAttribute('data-theme', 'light')
  localStorage.setItem('data-theme', 'light')
}


checkbox.addEventListener('change', () => {
  let theme = localStorage.getItem('data-theme');
  if (theme === 'dark') {
    changeThemeToLight()
  } else {
      changeThemeToDark()
    }
});