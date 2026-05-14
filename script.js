// JAVASCRIPT

// Open / close mobile menu

function toggleMenu () {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");

}

// Close mobile menu when clicking any menu link or inside area of menu box

const navItems = document.querySelectorAll(".nav-links a");
const navLinks = document.getElementById("navLinks");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Close mobile menu when clicking outside of the website

const menuBtn = document.querySelector(".menu-btn");

document.addEventListener("click", function (event) {
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});

// Highlight active menu item while scrolling

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(function (item) {
        item.classList.remove("active");

        if(item.getAttribute("href") === "#" + currentSection) {
            item.classList.add("active");
        }
    });
});

// What will happen
// Section starts hidden
// When you scroll near it
// JavaScript adds active
// CSS changes opacity to 1 and moves it up smoothly

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll () {
    revealElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if 
        (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);