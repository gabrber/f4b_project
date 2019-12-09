// hamburger menu
const menuButton = document.querySelector('.page-navigation__hamburger-button');
const navigationItems = document.querySelector('.page-navigation__items');

menuButton.addEventListener('click', (e) => {
    navigationItems.classList.toggle('page-navigation__items-display');
});

// contact form
const contactForm = document.querySelector('.form')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let contactFormData = new FormData(contactForm);
    const formObj = Object.fromEntries(contactFormData);
    console.log(formObj);
});

// concert button
const concertButtons = document.querySelectorAll('.concerts__button');

for (var i = 0; i < concertButtons.length; i++) {
    concertButtons[i].addEventListener('click', function(e) {
        var content = document.createElement("p");
        content.textContent = "Have fun!";
        content.classList.add("concerts__button-clicked");
        e.target.replaceWith(content);
  });
}