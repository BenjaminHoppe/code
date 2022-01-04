let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById('switch');

(function(){
    if (localStorage.getItem('data-theme') === 'dark'){
      changeThemeToDark();
      checkbox.checked = true;
    } else if (localStorage.getItem('data-theme') === 'light') {
      changeThemeToLight();
      checkbox.checked = false;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      changeThemeToDark();
      checkbox.checked = true;
    } else {
      changeThemeToLight();
      checkbox.checked = false;
    }   
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

function changeThemeToDark () {
  document.documentElement.setAttribute('data-theme', 'dark')
  localStorage.setItem('data-theme', 'dark')
}

function changeThemeToLight () {
  document.documentElement.setAttribute('data-theme', 'light')
  localStorage.setItem('data-theme', 'light')
}


checkbox.addEventListener('change', (event) => {
  (event.target.checked) ? changeThemeToDark() : changeThemeToLight();
});
