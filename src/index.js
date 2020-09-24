import css from "./css/style.css";
import menu from "./menu.json";
import template from "./template.hbs";
const body = document.querySelector('body');
const productCard = template(menu);

const menuUl = document.querySelector('.js-menu');

menuUl.insertAdjacentHTML('afterbegin', productCard);

const checkBox = document.getElementById('theme-switch-toggle');

const Theme = {
     LIGHT: 'light-theme',
     DARK: 'dark-theme',
};
// localStorage.setItem('theme', '')
if (localStorage.getItem('theme')) {
     body.classList.add(Theme.DARK)
     checkBox.checked = true;
};
checkBox.addEventListener('change', () => {
     if (checkBox.checked) {
     body.classList.add(Theme.DARK);
     body.classList.remove(Theme.LIGHT);
     localStorage.setItem('theme', ' ');
     }else{
     body.classList.remove(Theme.DARK);
     body.classList.add(Theme.LIGHT);
     localStorage.removeItem('theme');
     }
});

