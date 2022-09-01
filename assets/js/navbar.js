const toTop = document.querySelector(".nav-sticky");

window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".nav-sticky");
    if (window.pageYOffset > 300) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
    }
})