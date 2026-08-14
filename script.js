// AFPSS Premium Website 2.0

// Sticky Header Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// Donate Button
const donateBtn = document.querySelector(".donate-btn");

if (donateBtn) {
    donateBtn.addEventListener("click", () => {
        alert("🙏 Thank you for supporting AFPSS!");
    });
}
const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

},4000);/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");

        if (menuToggle.innerHTML.trim() === "☰") {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuToggle.innerHTML = "☰";
        });
    });

}

en:{

home:"Home",
about:"About",
gallery:"Gallery",
documents:"Documents",
donate:"Donate",
contact:"Contact",

hero_title:"A Helping Hand...",
hero_subtitle:"For Education, Dignity and a Better Future for Pardhi Tribal Children.",

donate_now:"Donate Now",
learn_more:"Learn More"

}

};
function changeLanguage(lang){

document.querySelectorAll("[data-key]").forEach(el=>{

const key=el.getAttribute("data-key");

if(translations[lang][key]){

el.innerHTML=translations[lang][key];

}

});

localStorage.setItem("language",lang);

}

window.onload=function(){

const lang=localStorage.getItem("language") || "mr";

changeLanguage(lang);

}
function changeLanguage(lang){

document.querySelectorAll("[data-key]").forEach(el=>{

const key=el.getAttribute("data-key");

if(translations[lang] && translations[lang][key]){
el.innerHTML = translations[lang][key];
}

});

localStorage.setItem("language", lang);

}

window.addEventListener("load", function(){

const lang = localStorage.getItem("language") || "mr";
changeLanguage(lang);

});
