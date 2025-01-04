// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('#home h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('#home h2', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.from('#home p', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: 'power3.out'
});

// Scroll Down Animation
gsap.to('.scroll-down', {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: 'power1.inOut'
});

// Projects Section Animation
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top center'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// About Section Animation
gsap.from('#about p', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top center'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.from('.skill-bar .skill-level', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top center'
    },
    width: 0,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.2
});

// Contact Section Animation
gsap.from('#contact form', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top center'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
});

// Social Icons Animation
gsap.from('.social-links a', {
    scrollTrigger: {
        trigger: 'footer',
        start: 'top bottom'
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power3.out'
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
});

