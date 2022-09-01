const toTop = document.querySelector(".to-top");
const navbar = document.querySelector(".nav-sticky");
const dropdown = document.querySelector('.dropdawn');

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        toTop.classList.add("active");
        navbar.classList.add('sticky');
        dropdown.classList.add('dropdown-with-scroll');
    } else {
        toTop.classList.remove("active");
        navbar.classList.remove('sticky');
        dropdown.classList.remove('dropdown-with-scroll');
    }
})