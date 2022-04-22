const burgerElem = document.querySelector('.nav__burger');
const burgerActice = "nav__burger-active";

burgerElem.addEventListener('click', () => {
    burgerElem.classList.toggle(burgerActice);
    document.querySelector('body').classList.toggle("burger-block");
})