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
/* =====================================================
/* =====================================================
   AFPSS DIGITAL GALLERY 2.1
   Fullscreen + Previous/Next + Counter + Filters + Swipe
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const items = Array.from(
        document.querySelectorAll(".digital-gallery-item")
    );

    const filters = document.querySelectorAll(".gallery-filter");

    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImage = document.getElementById("gallery-lightbox-image");

    const title = document.getElementById("gallery-lightbox-title");
    const description = document.getElementById("gallery-lightbox-description");

    const closeBtn = document.getElementById("gallery-close");
    const prevBtn = document.getElementById("gallery-prev");
    const nextBtn = document.getElementById("gallery-next");

    const currentCounter = document.getElementById("gallery-current");
    const totalCounter = document.getElementById("gallery-total");
    const galleryCount = document.getElementById("gallery-count");

    let visibleItems = [...items];
    let currentIndex = 0;

    /* ================= COUNT ================= */

    function updateCount() {

        if (galleryCount) {
            galleryCount.textContent = visibleItems.length;
        }

        if (totalCounter) {
            totalCounter.textContent = visibleItems.length;
        }

    }


    /* ================= OPEN ================= */

    function openGallery(index) {

        if (!visibleItems.length) return;

        currentIndex = index;

        const item = visibleItems[currentIndex];

        const image = item.querySelector("img");

        const captionTitle =
            item.querySelector(".gallery-caption strong");

        const captionDescription =
            item.querySelector(".gallery-caption span");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        if (title) {
            title.textContent =
                captionTitle
                    ? captionTitle.textContent
                    : "AFPSS Gallery";
        }

        if (description) {
            description.textContent =
                captionDescription
                    ? captionDescription.textContent
                    : "";
        }

        if (currentCounter) {
            currentCounter.textContent =
                currentIndex + 1;
        }

        if (totalCounter) {
            totalCounter.textContent =
                visibleItems.length;
        }

        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    /* ================= CLOSE ================= */

    function closeGallery() {

        lightbox.classList.remove("active");

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    /* ================= NEXT ================= */

    function nextGallery() {

        if (!visibleItems.length) return;

        currentIndex =
            (currentIndex + 1) %
            visibleItems.length;

        openGallery(currentIndex);

    }


    /* ================= PREVIOUS ================= */

    function previousGallery() {

        if (!visibleItems.length) return;

        currentIndex =
            (currentIndex - 1 +
            visibleItems.length) %
            visibleItems.length;

        openGallery(currentIndex);

    }


    /* ================= PHOTO CLICK ================= */

    items.forEach(function (item) {

        item.addEventListener("click", function () {

            visibleItems = items.filter(function (photo) {

                return photo.style.display !== "none";

            });

            const index =
                visibleItems.indexOf(item);

            openGallery(index);

        });

    });


    /* ================= FILTERS ================= */

    filters.forEach(function (button) {

        button.addEventListener("click", function () {

            filters.forEach(function (filter) {

                filter.classList.remove("active");

            });

            button.classList.add("active");

            const selected =
                button.dataset.filter;

            items.forEach(function (item) {

                const category =
                    item.dataset.category;

                if (
                    selected === "all" ||
                    category === selected
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

            visibleItems = items.filter(function (item) {

                return item.style.display !== "none";

            });

            updateCount();

        });

    });


    /* ================= BUTTONS ================= */

    if (closeBtn) {
        closeBtn.addEventListener(
            "click",
            closeGallery
        );
    }

    if (nextBtn) {
        nextBtn.addEventListener(
            "click",
            nextGallery
        );
    }

    if (prevBtn) {
        prevBtn.addEventListener(
            "click",
            previousGallery
        );
    }


    /* ================= BACKGROUND CLICK ================= */

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            closeGallery();

        }

    });


    /* ================= KEYBOARD ================= */

    document.addEventListener("keydown", function (event) {

        if (
            !lightbox.classList.contains("active")
        ) {
            return;
        }

        if (event.key === "Escape") {

            closeGallery();

        }

        if (event.key === "ArrowRight") {

            nextGallery();

        }

        if (event.key === "ArrowLeft") {

            previousGallery();

        }

    });


    /* ================= MOBILE SWIPE ================= */

    let touchStartX = 0;

    let touchEndX = 0;


    lightbox.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    lightbox.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            const distance =
                touchStartX - touchEndX;

            if (Math.abs(distance) < 50) {
                return;
            }

            if (distance > 0) {

                nextGallery();

            } else {

                previousGallery();

            }

        },
        { passive: true }
    );


    /* ================= INITIAL ================= */

    updateCount();

});
/* ================= HERO IMAGE SLIDESHOW ================= */

document.addEventListener("DOMContentLoaded", function () {

    const heroBackground = document.querySelector(".hero-background");

    if (!heroBackground) return;

    const heroImages = [
        "hero1.jpg",
        "hero2.jpg",
        "hero3.jpg",
        "hero4.jpg"
    ];

    let currentHero = 0;

    heroBackground.style.backgroundImage =
        `url("${heroImages[currentHero]}")`;

    setInterval(function () {

        currentHero = (currentHero + 1) % heroImages.length;

        heroBackground.style.backgroundImage =
            `url("${heroImages[currentHero]}")`;

    }, 5000);

});
/* =========================================
   PREMIUM HERO — 4 PHOTO SLIDER
   Change photo every 3 seconds
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const heroSlides = document.querySelectorAll(".hero-slide");

    if (!heroSlides.length) return;

    let currentHeroSlide = 0;

    // First photo
    heroSlides.forEach((slide, index) => {
        slide.classList.toggle("active", index === 0);
    });

    // Change every 3 seconds
    setInterval(function () {

        heroSlides[currentHeroSlide].classList.remove("active");

        currentHeroSlide++;

        if (currentHeroSlide >= heroSlides.length) {
            currentHeroSlide = 0;
        }

        heroSlides[currentHeroSlide].classList.add("active");

    }, 3000);

});
