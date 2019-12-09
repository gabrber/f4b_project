// hamburger menu
const menuButton = document.querySelector('.page-navigation__hamburger-button');

menuButton.addEventListener('click', (e) => {
    const navigationItems = document.querySelector('.page-navigation__items');
    navigationItems.classList.toggle('page-navigation__items-display');
});

// contact form
const contactForm = document.querySelector('.form')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const contactFormData = new FormData(contactForm);
    const formObj = Object.fromEntries(contactFormData);
    console.log(formObj);
});

// concert button
const concertButtons = document.querySelectorAll('.concerts__button');

for (let i = 0; i < concertButtons.length; i++) {
    concertButtons[i].addEventListener('click', function(e) {
        let content = document.createElement("p");
        content.textContent = "Have fun!";
        content.classList.add("concerts__button-clicked");
        e.target.replaceWith(content);
  });
}