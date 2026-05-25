/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(5,5,10,0.95)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,0.08)";

    }
    else{

        navbar.style.background = "rgba(10,10,15,0.7)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,0.08)";

    }

});



/* ========================= */
/* SMOOTH REVEAL ANIMATION */
/* ========================= */

const revealElements = document.querySelectorAll(
    ".project-card, .internship-card, .skill-box, .leadership-card, .goal-content, .contact-content, .project-content-section"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

    if(entry.isIntersecting){

        entry.target.classList.add("active-reveal");

    }
    else{

        entry.target.classList.remove("active-reveal");

    }

});

}, {
    threshold: 0.15
});


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



/* ========================= */
/* PROJECT CARD CLICK EFFECT */
/* ========================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.add("project-active");

        setTimeout(() => {

            card.classList.remove("project-active");

        }, 500);

    });

});



/* ========================= */
/* BUTTON RIPPLE EFFECT */
/* ========================= */

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .view-project-btn"
);

buttons.forEach((button) => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;

        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});



/* ========================= */
/* ACTIVE NAV LINK */
/* ========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active-link");

        }

    });

});



/* ========================= */
/* PARALLAX HERO EFFECT */
/* ========================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let offset = window.scrollY;

    hero.style.backgroundPositionY = offset * 0.4 + "px";

});



/* ========================= */
/* OPTIONAL PROJECT OPEN */
/* FUTURE EXPANSION LOGIC */
/* ========================= */

function openProject(projectName){

    console.log(`Opening project: ${projectName}`);

    /*
        FUTURE PLAN:

        1. Open cinematic modal
        2. Load project data dynamically
        3. Blur background
        4. Expand project card
        5. Show detailed project page

    */

}



/* ========================= */
/* LOADING ANIMATION */
/* ========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



/* ========================= */
/* CONSOLE MESSAGE */
/* ========================= */

console.log(
`
========================================
 Embedded Systems Portfolio Initialized
========================================
`
);