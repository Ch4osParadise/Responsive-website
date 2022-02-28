// slider

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function setActive(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        if (slide === slides[index]) {
            slide.classList.add('active');
        }
    })

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot === dots[index]) {
            dot.classList.add('active');
        }

    })

}


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        setActive(index);
    })
})


function start() {
    setInterval(() => {
        currentIndex++;
        if (currentIndex > 2) {
            currentIndex = 0;
        }
        setActive(currentIndex);

    }, 4000)
}

start();

//////////////////////////////

// burger
const body = document.querySelector("body")
const burger = document.querySelector('.burger');
const burgerElements = document.querySelectorAll('.burger div')
const nav = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation li');

console.log(nav);

function navSlide(){
    burger.addEventListener('click', () => {
        body.classList.toggle('hide');
        nav.classList.toggle('nav-active');
        burgerElements.forEach(element => {
            element.classList.toggle('active');
        })
        navLinks.forEach((link, index) => {
            link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4}s`

        })
    })
}

navSlide();

