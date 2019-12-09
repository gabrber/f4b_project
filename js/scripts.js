// hamburger menu
const menuButton = document.querySelector('.page-navigation__hamburger-button');
const navigationItems = document.querySelector('.page-navigation__items');

menuButton.addEventListener('click', (e) => {
    navigationItems.classList.toggle('page-navigation__items-display');
});

// form
const contactForm = document.querySelector('.form')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let contactFormData = new FormData(contactForm);
    const formObj = Object.fromEntries(contactFormData);
    console.log(formObj);
});