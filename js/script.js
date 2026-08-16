
/* =========================================================
   AKSHAY JOSHI PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

(function () {

    "use strict";


    document.addEventListener(
        "DOMContentLoaded",
        function () {

            initializePortfolio();

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function initializePortfolio() {

        setupMobileMenu();

        setupSmoothLinks();

        setupRevealAnimation();

        setupBackToTop();

        setupContactForm();

        setFooterYear();

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function setupMobileMenu() {

        var menuButton =
            document.getElementById(
                "mobileMenuBtn"
            );


        var navigation =
            document.getElementById(
                "navLinks"
            );


        if (
            !menuButton ||
            !navigation
        ) {

            return;

        }


        menuButton.addEventListener(
            "click",
            function () {

                var isOpen =
                    navigation.classList.toggle(
                        "open"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );


                menuButton.innerHTML =
                    isOpen

                        ? '<i class="fa-solid fa-xmark"></i>'

                        : '<i class="fa-solid fa-bars"></i>';

            }
        );


        var links =
            navigation.querySelectorAll(
                "a"
            );


        var i;


        for (
            i = 0;
            i < links.length;
            i++
        ) {

            links[i].addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        }


        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth >
                    850
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    function closeMobileMenu() {

        var menuButton =
            document.getElementById(
                "mobileMenuBtn"
            );


        var navigation =
            document.getElementById(
                "navLinks"
            );


        if (!navigation) {

            return;

        }


        navigation.classList.remove(
            "open"
        );


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            menuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    }


    /* =====================================================
       SMOOTH ANCHOR LINKS
    ===================================================== */

    function setupSmoothLinks() {

        var links =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        var i;


        for (
            i = 0;
            i < links.length;
            i++
        ) {

            links[i].addEventListener(
                "click",
                function (
                    event
                ) {

                    var targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    var target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    var header =
                        document.querySelector(
                            ".site-header"
                        );


                    var headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    var targetPosition =
                        target.getBoundingClientRect().top +
                        window.pageYOffset -
                        headerHeight -
                        12;


                    window.scrollTo({

                        top:
                            Math.max(
                                0,
                                targetPosition
                            ),

                        behavior:
                            "smooth"

                    });

                }
            );

        }

    }


    /* =====================================================
       REVEAL ON SCROLL
    ===================================================== */

    function setupRevealAnimation() {

        var elements =
            document.querySelectorAll(
                ".reveal"
            );


        if (!elements.length) {

            return;

        }


        /*
         * Fallback for older browsers.
         */

        if (
            !(
                "IntersectionObserver"
                in window
            )
        ) {

            revealAll(
                elements
            );


            return;

        }


        var observer =
            new IntersectionObserver(
                function (
                    entries,
                    observerInstance
                ) {

                    var i;


                    for (
                        i = 0;
                        i < entries.length;
                        i++
                    ) {

                        var entry =
                            entries[i];


                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    }

                },
                {
                    threshold:
                        0.12,

                    rootMargin:
                        "0px 0px -40px 0px"

                }
            );


        var i;


        for (
            i = 0;
            i < elements.length;
            i++
        ) {

            observer.observe(
                elements[i]
            );

        }

    }


    function revealAll(
        elements
    ) {

        var i;


        for (
            i = 0;
            i < elements.length;
            i++
        ) {

            elements[i].classList.add(
                "visible"
            );

        }

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    function setupBackToTop() {

        var button =
            document.getElementById(
                "backToTop"
            );


        if (!button) {

            return;

        }


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.pageYOffset >
                    450
                ) {

                    button.classList.add(
                        "show"
                    );

                } else {

                    button.classList.remove(
                        "show"
                    );

                }

            },
            {
                passive:
                    true
            }
        );


        button.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top:
                        0,

                    behavior:
                        "smooth"

                });

            }
        );

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    function setupContactForm() {

        var form =
            document.getElementById(
                "contactForm"
            );


        if (!form) {

            return;

        }


        form.addEventListener(
            "submit",
            function (
                event
            ) {

                event.preventDefault();


                handleContactSubmit(
                    form
                );

            }
        );

    }


    function handleContactSubmit(
        form
    ) {

        var nameInput =
            document.getElementById(
                "contactName"
            );


        var emailInput =
            document.getElementById(
                "contactEmail"
            );


        var messageInput =
            document.getElementById(
                "contactMessage"
            );


        var status =
            document.getElementById(
                "formStatus"
            );


        if (
            !nameInput ||
            !emailInput ||
            !messageInput
        ) {

            return;

        }


        var name =
            nameInput.value.trim();


        var email =
            emailInput.value.trim();


        var message =
            messageInput.value.trim();


        if (
            name.length <
            2
        ) {

            setFormMessage(
                status,
                "Please enter your name.",
                "error"
            );


            nameInput.focus();


            return;

        }


        if (
            !isValidEmail(
                email
            )
        ) {

            setFormMessage(
                status,
                "Please enter a valid email address.",
                "error"
            );


            emailInput.focus();


            return;

        }


        if (
            message.length <
            10
        ) {

            setFormMessage(
                status,
                "Please write at least 10 characters in your message.",
                "error"
            );


            messageInput.focus();


            return;

        }


        setFormMessage(
            status,
            "Thanks! Your message has been noted successfully.",
            "success"
        );


        form.reset();

    }


    function isValidEmail(
        email
    ) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(
                email
            );

    }


    function setFormMessage(
        element,
        message,
        type
    ) {

        if (!element) {

            return;

        }


        element.textContent =
            message;


        if (
            type ===
            "error"
        ) {

            element.style.color =
                "#ff9b9b";

        } else {

            element.style.color =
                "#8fe0af";

        }

    }


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    function setFooterYear() {

        var element =
            document.getElementById(
                "footerYear"
            );


        if (
            element
        ) {

            element.textContent =
                new Date()
                    .getFullYear();

        }

    }


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.AkshayPortfolio = {

        closeMenu:
            closeMobileMenu,

        showMessage:
            setFormMessage

    };


})();

