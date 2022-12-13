let buttonTheme = document.getElementById('btn-theme-toggle');
let iconButtonTheme = buttonTheme.getElementsByTagName('i')[0];
let body = document.body;
let keyThemeDarkLocalStorage = localStorage.getItem('theme-dark');

const enableDarkMode = () => {
  iconButtonTheme.classList.replace('fa-sun', 'fa-moon')
  body.classList.add('active-dark');
  localStorage.setItem('theme-dark', 'enabled')
}

const disableDarkMode = () => {
  iconButtonTheme.classList.replace('fa-moon', 'fa-sun')
  body.classList.remove('active-dark');
  localStorage.setItem('theme-dark', 'disabled')
}


buttonTheme.addEventListener('click', () => {
  keyThemeDarkLocalStorage = localStorage.getItem('theme-dark');
  if (keyThemeDarkLocalStorage === 'disabled') {
    enableDarkMode();
    console.log(iconTheme[0]);
  } else {
    disableDarkMode();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if(keyThemeDarkLocalStorage === 'enabled') {
    enableDarkMode();
  }
});