/* ==========================================
   AFPSS INTERNATIONAL PREMIUM WEBSITE
   script.js
   Part 01
========================================== */

/* ===============================
   MOBILE MENU
=============================== */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}

/* ===============================
   SMOOTH SCROLL
=============================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ===============================
   STICKY HEADER
=============================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 80){

        header.style.background="rgba(255,255,255,.97)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.10)";

    }else{

        header.style.background="rgba(255,255,255,.92)";
        header.style.boxShadow="0 4px 20px rgba(0,0,0,.08)";

    }

});

/* ===============================
   SCROLL FADE ANIMATION
=============================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

/* ===============================
   END PART 01
=============================== */

/* ==========================================
   PART 02
   Animated Counter + Donate Effects
========================================== */

/* ===============================
   ANIMATED COUNTERS
=============================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* ===============================
   DONATE BUTTON PULSE
=============================== */

const donateButtons = document.querySelectorAll(".hero-btn, .btn-primary");

donateButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


/* ===============================
   RUPEE ICON ANIMATION
=============================== */

setInterval(() => {

    const rupees = document.querySelectorAll(".rupee");

    rupees.forEach(icon => {

        icon.classList.add("animate");

        setTimeout(() => {

            icon.classList.remove("animate");

        }, 700);

    });

}, 2500);


/* ===============================
   HERO BUTTON FLOAT EFFECT
=============================== */

const heroButton = document.querySelector(".hero-btn");

if (heroButton) {

    setInterval(() => {

        heroButton.classList.toggle("floating");

    }, 1500);

}

/* ===============================
   END PART 02
=============================== */

/* ==========================================
   AFPSS PREMIUM WEBSITE
   SCRIPT.JS - PART 03
========================================== */

/* ===============================
   GALLERY LIGHTBOX
=============================== */

const galleryImages = document.querySelectorAll(".gallery-card img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "lightbox";

        overlay.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img src="${img.src}" class="lightbox-image">
        `;

        document.body.appendChild(overlay);

        overlay.onclick = () => {
            overlay.remove();
        };

    });

});


/* ===============================
   SCROLL REVEAL
=============================== */

const revealItems = document.querySelectorAll(
".card, .impact-card, .award-card, .success-card, .news-card, .gallery-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

revealItems.forEach(item => {
    revealObserver.observe(item);
});


/* ===============================
   BACK TO TOP BUTTON
=============================== */

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (!topButton) return;

    if (window.scrollY > 400) {

        topButton.style.display = "flex";

    } else {

        topButton.style.display = "none";

    }

});

if (topButton) {

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ===============================
   END PART 03
=============================== */

/* ==========================================
   AFPSS PREMIUM WEBSITE
   SCRIPT.JS - PART 04 (FINAL)
========================================== */

/* ===============================
   LANGUAGE SWITCHER
=============================== */

function changeLanguage(lang){

    localStorage.setItem("language", lang);

    location.reload();

}

/* ===============================
   PAGE LOADER
=============================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});

/* ===============================
   ACTIVE MENU
=============================== */

const menuLinks = document.querySelectorAll("nav ul li a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

/* ===============================
   HEADER SHADOW
=============================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 30){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

/* ===============================
   BUTTON RIPPLE EFFECT
=============================== */

const buttons = document.querySelectorAll(".hero-btn,.btn-primary,.btn-secondary");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.classList.add("ripple");

const rect=this.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ===============================
   CURRENT YEAR
=============================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/* ===============================
   END OF SCRIPT
=============================== */

console.log("AFPSS Premium Website Loaded Successfully.");
