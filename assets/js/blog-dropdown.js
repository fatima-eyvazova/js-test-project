const blog = document.querySelector('.blog');
const dropdown2 = document.querySelector('.dropdawn');

blog.addEventListener('mouseenter', () => {
    dropdown2.classList.add('show');
    dropdown2.classList.remove('hide');
});

blog.addEventListener('mouseleave', () => {
    dropdown2.classList.remove('show');
    dropdown2.classList.add('hide');
});