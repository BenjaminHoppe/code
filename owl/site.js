document.addEventListener
  ("keydown", function(event) {
    if (event.key === "1") {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    if (event.key === "2") {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
});
