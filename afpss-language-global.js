(function () {
  "use strict";

  const LANGUAGE_KEY = "afpssLanguage";

  // --------------------------------------------------
  // 1. भाषा ठरवणे
  // --------------------------------------------------
  function getLanguage() {
    const params = new URLSearchParams(window.location.search);
    const urlLanguage = params.get("lang");

    // URL मध्ये भाषा असेल तर ती save करा
    if (urlLanguage === "mr" || urlLanguage === "en") {
      localStorage.setItem(LANGUAGE_KEY, urlLanguage);
      return urlLanguage;
    }

    // आधी निवडलेली भाषा वापरा
    return localStorage.getItem(LANGUAGE_KEY) || "mr";
  }


  // --------------------------------------------------
  // 2. पूर्ण Page वर भाषा लागू करणे
  // --------------------------------------------------
  function applyLanguage(language) {

    language = language === "en" ? "en" : "mr";

    // भाषा कायमची save
    localStorage.setItem(LANGUAGE_KEY, language);

    // HTML language
    document.documentElement.lang = language;


    // ------------------------------------------------
    // Marathi content
    // ------------------------------------------------
    document.querySelectorAll(".lang-mr").forEach(function (element) {

      element.style.display =
        language === "mr" ? "" : "none";

    });


    // ------------------------------------------------
    // English content
    // ------------------------------------------------
    document.querySelectorAll(".lang-en").forEach(function (element) {

      element.style.display =
        language === "en" ? "" : "none";

    });


    // ------------------------------------------------
    // Home Page language button
    // ------------------------------------------------
    const languageButton =
      document.getElementById("languageButton");

    if (languageButton) {

      languageButton.textContent =
        language === "en" ? "मराठी" : "English";

      languageButton.setAttribute(
        "aria-label",
        language === "en"
          ? "Switch to Marathi"
          : "Switch to English"
      );

    }


    // ------------------------------------------------
    // जर page वर दोन buttons असतील
    // ------------------------------------------------
    const mrButton =
      document.getElementById("mrBtn");

    const enButton =
      document.getElementById("enBtn");


    if (mrButton) {

      mrButton.classList.toggle(
        "active",
        language === "mr"
      );

    }


    if (enButton) {

      enButton.classList.toggle(
        "active",
        language === "en"
      );

    }


    // ------------------------------------------------
    // 3. पुढील सर्व HTML pages मध्ये भाषा घेऊन जा
    // ------------------------------------------------
    document.querySelectorAll("a[href]").forEach(function (link) {

      const href = link.getAttribute("href");

      if (!href) return;

      // External links बदलू नका
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        href.startsWith("#")
      ) {
        return;
      }


      try {

        const url =
          new URL(href, window.location.href);


        // फक्त आपल्या website च्या HTML pages साठी
        if (url.origin !== window.location.origin) {
          return;
        }


        if (!/\.html$/i.test(url.pathname)) {
          return;
        }


        // भाषा पुढच्या page ला पाठवा
        url.searchParams.set(
          "lang",
          language
        );


        link.setAttribute(
          "href",
          url.pathname +
          url.search +
          url.hash
        );

      } catch (error) {

        console.warn(
          "AFPSS language link error:",
          error
        );

      }

    });

  }


  // --------------------------------------------------
  // 4. Page सुरू झाल्यावर भाषा लागू करा
  // --------------------------------------------------
  function initializeLanguage() {

    const language =
      getLanguage();

    applyLanguage(language);


    // ------------------------------------------------
    // Home Page single language button
    // ------------------------------------------------
    const languageButton =
      document.getElementById("languageButton");


    if (languageButton) {

      languageButton.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          const currentLanguage =
            getLanguage();

          const newLanguage =
            currentLanguage === "en"
              ? "mr"
              : "en";

          applyLanguage(newLanguage);

        }
      );

    }


    // ------------------------------------------------
    // Marathi button
    // ------------------------------------------------
    const mrButton =
      document.getElementById("mrBtn");


    if (mrButton) {

      mrButton.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          applyLanguage("mr");

        }
      );

    }


    // ------------------------------------------------
    // English button
    // ------------------------------------------------
    const enButton =
      document.getElementById("enBtn");


    if (enButton) {

      enButton.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          applyLanguage("en");

        }
      );

    }

  }


  // --------------------------------------------------
  // 5. DOM तयार झाल्यावर सुरू करा
  // --------------------------------------------------
  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initializeLanguage
    );

  } else {

    initializeLanguage();

  }

})();
