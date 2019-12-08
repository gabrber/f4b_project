// hamburger menu
const menuButton = document.querySelector('.page-navigation__hamburger-button');
const navigationItems = document.querySelector('.page-navigation__items');

menuButton.addEventListener('click', (e) => {
    navigationItems.classList.toggle('page-navigation__items-display');
});