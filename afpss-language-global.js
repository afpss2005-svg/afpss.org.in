(function () {
  "use strict";

  const LANGUAGE_KEY = "afpssLanguage";
  const SUPPORTED_LANGUAGES = ["mr", "en"];

  // --------------------------------------------------
  // 1. भाषा शोधणे
  // --------------------------------------------------
  function getLanguage() {

    const params = new URLSearchParams(window.location.search);
    const urlLanguage = params.get("lang");

    if (SUPPORTED_LANGUAGES.includes(urlLanguage)) {
      localStorage.setItem(LANGUAGE_KEY, urlLanguage);
      return urlLanguage;
    }

    const savedLanguage =
      localStorage.getItem(LANGUAGE_KEY);

    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage;
    }

    return "mr";
  }


  // --------------------------------------------------
  // 2. Language लागू करणे
  // --------------------------------------------------
  function applyLanguage(language) {

    language =
      SUPPORTED_LANGUAGES.includes(language)
        ? language
        : "mr";

    localStorage.setItem(
      LANGUAGE_KEY,
      language
    );

    document.documentElement.lang =
      language;


    // ------------------------------------------------
    // Marathi content
    // ------------------------------------------------
    document.querySelectorAll(
      ".lang-mr"
    ).forEach(function (element) {

      element.style.display =
        language === "mr"
          ? ""
          : "none";

    });


    // ------------------------------------------------
    // English content
    // ------------------------------------------------
    document.querySelectorAll(
      ".lang-en"
    ).forEach(function (element) {

      element.style.display =
        language === "en"
          ? ""
          : "none";

    });


    // ------------------------------------------------
    // Single language switch button
    // ------------------------------------------------
    const languageButton =
      document.getElementById(
        "languageButton"
      );

    if (languageButton) {

      languageButton.textContent =
        language === "en"
          ? "मराठी"
          : "English";

      languageButton.setAttribute(
        "aria-label",
        language === "en"
          ? "Switch to Marathi"
          : "Switch to English"
      );

      languageButton.setAttribute(
        "title",
        language === "en"
          ? "मराठी निवडा"
          : "Select English"
      );
    }


    // ------------------------------------------------
    // Marathi button
    // ------------------------------------------------
    const mrButton =
      document.getElementById("mrBtn");

    if (mrButton) {

      mrButton.classList.toggle(
        "active",
        language === "mr"
      );

      mrButton.setAttribute(
        "aria-pressed",
        language === "mr"
          ? "true"
          : "false"
      );
    }


    // ------------------------------------------------
    // English button
    // ------------------------------------------------
    const enButton =
      document.getElementById("enBtn");

    if (enButton) {

      enButton.classList.toggle(
        "active",
        language === "en"
      );

      enButton.setAttribute(
        "aria-pressed",
        language === "en"
          ? "true"
          : "false"
      );
    }


    // ------------------------------------------------
    // 3. पुढील website pages मध्ये language कायम ठेवा
    // ------------------------------------------------
    document.querySelectorAll(
      "a[href]"
    ).forEach(function (link) {

      const href =
        link.getAttribute("href");

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
          new URL(
            href,
            window.location.href
          );

        // फक्त आपल्या website चे pages
        if (
          url.origin !==
          window.location.origin
        ) {
          return;
        }

        // HTML pages साठी
        if (
          !/\.html$/i.test(
            url.pathname
          )
        ) {
          return;
        }

        // पुढच्या page ला language द्या
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
  // 4. Language buttons
  // --------------------------------------------------
  function setupLanguageButtons() {

    const languageButton =
      document.getElementById(
        "languageButton"
      );

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

          applyLanguage(
            newLanguage
          );

        }
      );
    }


    const mrButton =
      document.getElementById(
        "mrBtn"
      );

    if (mrButton) {

      mrButton.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          applyLanguage("mr");

        }
      );
    }


    const enButton =
      document.getElementById(
        "enBtn"
      );

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
  // 5. Page सुरू करणे
  // --------------------------------------------------
  function initializeLanguage() {

    const language =
      getLanguage();

    applyLanguage(language);

    setupLanguageButtons();

  }


  // --------------------------------------------------
  // 6. DOM Ready
  // --------------------------------------------------
  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initializeLanguage
    );

  } else {

    initializeLanguage();

  }

})();
