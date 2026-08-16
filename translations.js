/* =========================================================
   AFPSs.org.in
   PREMIUM MARATHI / ENGLISH LANGUAGE SYSTEM
   ========================================================= */

(function () {
    "use strict";

    /* ---------------------------------------------------------
       LANGUAGE SETTINGS
       --------------------------------------------------------- */

    const DEFAULT_LANGUAGE = "mr";
    const STORAGE_KEY = "afpss-language";

    let currentLanguage =
        localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;


    /* ---------------------------------------------------------
       TRANSLATION DICTIONARY
       --------------------------------------------------------- */

    const translations = {

        mr: {

            siteTitle:
                "आदिवासी फासेपारधी सुधार समिती",

            siteSubtitle:
                "वंचित मुलांच्या शिक्षणासाठी एक समर्पित प्रयत्न",

            home:
                "मुख्यपृष्ठ",

            about:
                "आमच्याबद्दल",

            schoolActivities:
                "शाळेतील उपक्रम",

            ourStory:
                "आमचा प्रवास",

            founder:
                "संस्थापक",

            awards:
                "पुरस्कार",

            gallery:
                "गॅलरी",

            media:
                "मीडिया",

            documents:
                "दस्तऐवज",

            contact:
                "संपर्क",

            donate:
                "देणगी द्या",

            readMore:
                "संपूर्ण कथा वाचा",

            viewMore:
                "अधिक पहा",

            learnMore:
                "अधिक जाणून घ्या",

            watchVideo:
                "व्हिडिओ पहा",

            facebook:
                "Facebook प्रोफाइल",

            youtube:
                "YouTube व्हिडिओ",

            founderTitle:
                "मतीन शंकराव भोसले सर",

            founderShort:
                "संघर्षातून शिक्षणक्रांतीकडे...",

            founderJourney:
                "मतीन शंकराव भोसले सरांचा जीवनप्रवास",

            founderMission:
                "वंचित मुलांच्या आयुष्यात शिक्षणाची ज्योत पेटवण्याचा हा प्रवास आहे.",

            founderStory:
                "अमरावती जिल्ह्यातील मंगरूळ चव्हाळा येथून सुरू झालेला मतीन शंकराव भोसले सरांचा प्रवास हा केवळ एका व्यक्तीच्या संघर्षाची कथा नाही. हा प्रवास आहे गरिबीशी लढण्याचा, सामाजिक उपेक्षेला उत्तर देण्याचा आणि शिक्षणाच्या माध्यमातून परिवर्तन घडवण्याचा.",

            schoolTitle:
                "प्रश्नचिन्ह आदिवासी आश्रमशाळा",

            schoolPlace:
                "मंगरूळ चव्हाळा, ता. नांदगाव खंडेश्वर, जि. अमरावती",

            schoolStory:
                "फासेपारधी समाजातील वंचित, गरजू आणि अत्यंत प्रतिकूल परिस्थितीत वाढणाऱ्या मुलांना शिक्षण, सुरक्षित निवारा, अन्न आणि उज्ज्वल भविष्य मिळावे या उद्देशाने प्रश्नचिन्ह आदिवासी आश्रमशाळेची वाटचाल सुरू झाली.",

            journeyTitle:
                "प्रश्नचिन्हचा प्रवास",

            journeyText:
                "१८८ मुलांपासून सुरू झालेला हा प्रवास आज हजारो विद्यार्थ्यांच्या आयुष्यात शिक्षणाची दिशा निर्माण करणारा ठरला आहे.",

            education:
                "शिक्षण",

            studentCare:
                "विद्यार्थी कल्याण",

            hostel:
                "निवास व वसतिगृह",

            nutrition:
                "अन्न व पोषण",

            sports:
                "क्रीडा",

            library:
                "ग्रंथालय",

            mediaTitle:
                "मीडिया",

            mediaSubtitle:
                "प्रश्नचिन्ह आणि मतीन शंकराव भोसले सरांच्या कार्याची माध्यमांमधील दखल",

            news:
                "बातम्या",

            videos:
                "व्हिडिओ",

            photos:
                "फोटो",

            press:
                "माध्यमांतील प्रसिद्धी",

            awardsTitle:
                "पुरस्कार व सन्मान",

            awardsSubtitle:
                "समाजकार्याची विविध संस्थांकडून झालेली दखल",

            galleryTitle:
                "फोटो गॅलरी",

            gallerySubtitle:
                "प्रश्नचिन्हच्या प्रवासातील काही आठवणी",

            contactTitle:
                "आमच्याशी संपर्क साधा",

            together:
                "एकत्र येऊया आणि उज्ज्वल भविष्य घडवूया.",

            help:
                "आपला एक हात मदतीचा... वंचितांच्या शिक्षणाला.",

            support:
                "आपल्या मदतीमुळे एका मुलाचे भविष्य बदलू शकते.",

            readStory:
                "पूर्ण जीवनप्रवास वाचा",

            founderVideos:
                "मतीन शंकराव भोसले सरांचे व्हिडिओ",

            founderFacebook:
                "मतीन शंकराव भोसले सरांचे Facebook",

            founderYoutube:
                "मतीन शंकराव भोसले सरांचे YouTube",

            backHome:
                "मुख्यपृष्ठावर परत जा",

            previous:
                "मागील",

            next:
                "पुढील",

            close:
                "बंद करा",

            menu:
                "मेन्यू",

            english:
                "English",

            marathi:
                "मराठी"

        },


        en: {

            siteTitle:
                "Adivasi Fase Pardhi Sudhar Samiti",

            siteSubtitle:
                "A dedicated effort for the education of deprived children",

            home:
                "Home",

            about:
                "About",

            schoolActivities:
                "School Activities",

            ourStory:
                "Our Story",

            founder:
                "Founder",

            awards:
                "Awards",

            gallery:
                "Gallery",

            media:
                "Media",

            documents:
                "Documents",

            contact:
                "Contact",

            donate:
                "Donate Now",

            readMore:
                "Read Full Story",

            viewMore:
                "View More",

            learnMore:
                "Learn More",

            watchVideo:
                "Watch Video",

            facebook:
                "Facebook Profile",

            youtube:
                "YouTube Videos",

            founderTitle:
                "Matin Shankarrao Bhosale Sir",

            founderShort:
                "From Struggle to an Educational Revolution...",

            founderJourney:
                "The Life Journey of Matin Shankarrao Bhosale Sir",

            founderMission:
                "A journey dedicated to bringing the light of education into the lives of deprived children.",

            founderStory:
                "The journey of Matin Shankarrao Bhosale Sir, which began in Mangrul Chavala in Amravati district, is not merely the story of one person's struggle. It is a journey of fighting poverty, challenging social exclusion and creating transformation through education.",

            schoolTitle:
                "Prashnachinh Adivasi Ashram School",

            schoolPlace:
                "Mangrul Chavala, Taluka Nandgaon Khandeshwar, District Amravati",

            schoolStory:
                "Prashnachinh Adivasi Ashram School began with the vision of providing education, safe shelter, food and a brighter future to deprived children from the Phanse Pardhi community who grow up in extremely difficult circumstances.",

            journeyTitle:
                "The Journey of Prashnachinh",

            journeyText:
                "A journey that began with 188 children has grown into an educational movement that has helped bring direction and hope to the lives of thousands of students.",

            education:
                "Education",

            studentCare:
                "Student Welfare",

            hostel:
                "Hostel & Residential Care",

            nutrition:
                "Food & Nutrition",

            sports:
                "Sports",

            library:
                "Library",

            mediaTitle:
                "Media",

            mediaSubtitle:
                "Media coverage of Prashnachinh and the work of Matin Shankarrao Bhosale Sir",

            news:
                "News",

            videos:
                "Videos",

            photos:
                "Photos",

            press:
                "Press Coverage",

            awardsTitle:
                "Awards & Honours",

            awardsSubtitle:
                "Recognition of social work by various organisations",

            galleryTitle:
                "Photo Gallery",

            gallerySubtitle:
                "Some memories from the journey of Prashnachinh",

            contactTitle:
                "Contact Us",

            together:
                "Together, let us build a brighter future.",

            help:
                "A helping hand... for the education of deprived children.",

            support:
                "Your support can change the future of a child.",

            readStory:
                "Read Full Life Journey",

            founderVideos:
                "Videos of Matin Shankarrao Bhosale Sir",

            founderFacebook:
                "Matin Shankarrao Bhosale Sir on Facebook",

            founderYoutube:
                "Matin Shankarrao Bhosale Sir on YouTube",

            backHome:
                "Back to Home",

            previous:
                "Previous",

            next:
                "Next",

            close:
                "Close",

            menu:
                "Menu",

            english:
                "English",

            marathi:
                "Marathi"

        }

    };


    /* ---------------------------------------------------------
       GET TRANSLATION
       --------------------------------------------------------- */

    function t(key) {

        if (
            translations[currentLanguage] &&
            translations[currentLanguage][key]
        ) {
            return translations[currentLanguage][key];
        }

        if (
            translations[DEFAULT_LANGUAGE] &&
            translations[DEFAULT_LANGUAGE][key]
        ) {
            return translations[DEFAULT_LANGUAGE][key];
        }

        return key;
    }


    /* ---------------------------------------------------------
       TRANSLATE ELEMENTS USING data-mr / data-en
       --------------------------------------------------------- */

    function translateDataAttributes() {

        const elements = document.querySelectorAll(
            "[data-mr], [data-en]"
        );

        elements.forEach(function (element) {

            const value =
                element.getAttribute(
                    "data-" + currentLanguage
                );

            if (value === null) {
                return;
            }

            /*
             * Keep HTML inside the translation if supplied.
             */
            if (
                value.indexOf("<") !== -1 &&
                value.indexOf(">") !== -1
            ) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }

        });

    }


    /* ---------------------------------------------------------
       TRANSLATE ELEMENTS USING data-i18n
       Example:
       <span data-i18n="home"></span>
       --------------------------------------------------------- */

    function translateKeys() {

        const elements =
            document.querySelectorAll("[data-i18n]");

        elements.forEach(function (element) {

            const key =
                element.getAttribute("data-i18n");

            if (!key) {
                return;
            }

            element.textContent = t(key);

        });


        /*
         * Placeholder translation
         */
        const placeholders =
            document.querySelectorAll(
                "[data-i18n-placeholder]"
            );

        placeholders.forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (key) {
                element.placeholder = t(key);
            }

        });


        /*
         * Title / tooltip translation
         */
        const titles =
            document.querySelectorAll(
                "[data-i18n-title]"
            );

        titles.forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-title"
                );

            if (key) {
                element.title = t(key);
            }

        });

    }


    /* ---------------------------------------------------------
       LANGUAGE BUTTONS
       --------------------------------------------------------- */

    function updateLanguageButtons() {

        const buttons =
            document.querySelectorAll(
                "[data-language], [data-lang]"
            );

        buttons.forEach(function (button) {

            const language =
                button.getAttribute("data-language") ||
                button.getAttribute("data-lang");

            if (!language) {
                return;
            }

            if (
                language.toLowerCase() ===
                currentLanguage.toLowerCase()
            ) {
                button.classList.add("active");
                button.setAttribute(
                    "aria-current",
                    "true"
                );
            } else {
                button.classList.remove("active");
                button.removeAttribute(
                    "aria-current"
                );
            }

        });

    }


    /* ---------------------------------------------------------
       CHANGE LANGUAGE
       --------------------------------------------------------- */

    function setLanguage(language) {

        language =
            String(language || "")
                .toLowerCase()
                .trim();

        if (
            language !== "mr" &&
            language !== "en"
        ) {
            language = DEFAULT_LANGUAGE;
        }

        currentLanguage = language;

        localStorage.setItem(
            STORAGE_KEY,
            currentLanguage
        );

        document.documentElement.lang =
            currentLanguage === "mr"
                ? "mr"
                : "en";

        document.body.setAttribute(
            "data-language",
            currentLanguage
        );

        translateDataAttributes();

        translateKeys();

        updateLanguageButtons();

        /*
         * Update browser title if available.
         */
        const title =
            document.querySelector("title");

        if (title) {

            title.textContent =
                currentLanguage === "mr"
                    ? "AFPSs | आदिवासी फासेपारधी सुधार समिती"
                    : "AFPSS | Adivasi Fase Pardhi Sudhar Samiti";

        }

        /*
         * Dispatch custom event.
         * Other website scripts can listen to this.
         */
        document.dispatchEvent(
            new CustomEvent(
                "languageChanged",
                {
                    detail: {
                        language: currentLanguage
                    }
                }
            )
        );

    }


    /* ---------------------------------------------------------
       LANGUAGE BUTTON CLICK
       --------------------------------------------------------- */

    function attachLanguageButtons() {

        const buttons =
            document.querySelectorAll(
                "[data-language], [data-lang]"
            );

        buttons.forEach(function (button) {

            /*
             * Prevent duplicate listeners.
             */
            if (
                button.dataset.languageReady === "true"
            ) {
                return;
            }

            button.dataset.languageReady = "true";

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const language =
                        button.getAttribute(
                            "data-language"
                        ) ||
                        button.getAttribute(
                            "data-lang"
                        );

                    setLanguage(language);

                }
            );

        });

    }


    /* ---------------------------------------------------------
       SUPPORT EXISTING BUTTONS
       --------------------------------------------------------- */

    function attachTextLanguageButtons() {

        const allElements =
            document.querySelectorAll(
                "button, a, span, div"
            );

        allElements.forEach(function (element) {

            const text =
                element.textContent
                    .trim()
                    .replace(/\s+/g, " ");

            if (
                text === "मराठी" &&
                !element.hasAttribute("data-language")
            ) {

                element.setAttribute(
                    "data-language",
                    "mr"
                );

            }

            if (
                text === "English" &&
                !element.hasAttribute("data-language")
            ) {

                element.setAttribute(
                    "data-language",
                    "en"
                );

            }

        });

        attachLanguageButtons();

    }


    /* ---------------------------------------------------------
       INITIALISE
       --------------------------------------------------------- */

    function initialiseLanguageSystem() {

        /*
         * Wait until page content is available.
         */
        attachTextLanguageButtons();

        setLanguage(currentLanguage);

    }


    /* ---------------------------------------------------------
       PUBLIC API
       --------------------------------------------------------- */

    window.AFPSLanguage = {

        setLanguage: setLanguage,

        getLanguage: function () {
            return currentLanguage;
        },

        translate: t,

        translations: translations

    };


    /* ---------------------------------------------------------
       START
       --------------------------------------------------------- */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialiseLanguageSystem
        );

    } else {

        initialiseLanguageSystem();

    }


})();
/* =====================================================
   AFPS | MARATHI / ENGLISH LANGUAGE SWITCHER
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const marathiBtn = document.getElementById("marathiBtn");
    const englishBtn = document.getElementById("englishBtn");

    const marathiContent = document.querySelectorAll(".lang-mr");
    const englishContent = document.querySelectorAll(".lang-en");

    function setLanguage(lang) {

        if (lang === "en") {

            marathiContent.forEach(function (el) {
                el.style.display = "none";
            });

            englishContent.forEach(function (el) {
                el.style.display = "";
            });

            if (marathiBtn) {
                marathiBtn.classList.remove("active");
            }

            if (englishBtn) {
                englishBtn.classList.add("active");
            }

            document.documentElement.lang = "en";
            localStorage.setItem("afpss-language", "en");

        } else {

            marathiContent.forEach(function (el) {
                el.style.display = "";
            });

            englishContent.forEach(function (el) {
                el.style.display = "none";
            });

            if (englishBtn) {
                englishBtn.classList.remove("active");
            }

            if (marathiBtn) {
                marathiBtn.classList.add("active");
            }

            document.documentElement.lang = "mr";
            localStorage.setItem("afpss-language", "mr");
        }
    }

    if (marathiBtn) {
        marathiBtn.addEventListener("click", function () {
            setLanguage("mr");
        });
    }

    if (englishBtn) {
        englishBtn.addEventListener("click", function () {
            setLanguage("en");
        });
    }

    const savedLanguage =
        localStorage.getItem("afpss-language") || "mr";

    setLanguage(savedLanguage);

});
