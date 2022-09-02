const toggleButton = document.querySelector('#toggle-btn');
const mobileNavBar = document.querySelector('#mobile-navbar');

toggleButton.addEventListener('click', () => {
    mobileNavBar.classList.toggle('show-mobile-nav');
})