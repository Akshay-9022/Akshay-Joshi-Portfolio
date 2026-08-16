/* =========================================================
   AKSHAY JOSHI PORTFOLIO
   THEME CONTROLLER
========================================================= */

(function () {

    "use strict";


    /*
     * Theme controller is intentionally lightweight.
     * The portfolio currently uses a fixed premium dark theme.
     * This file is kept ready for future light/dark switching.
     */


    document.addEventListener(
        "DOMContentLoaded",
        function () {

            initializeTheme();

        }
    );


    function initializeTheme() {

        var savedTheme =
            localStorage.getItem(
                "akshay_portfolio_theme"
            );


        /*
         * Default theme.
         */

        if (
            !savedTheme
        ) {

            savedTheme =
                "dark";

        }


        applyTheme(
            savedTheme
        );

    }


    function applyTheme(
        theme
    ) {

        var body =
            document.body;


        if (!body) {

            return;

        }


        /*
         * Only dark theme is currently enabled.
         */

        body.setAttribute(
            "data-theme",
            "dark"
        );


        /*
         * Keep the preferred value stored
         * for future theme functionality.
         */

        try {

            localStorage.setItem(
                "akshay_portfolio_theme",
                "dark"
            );

        } catch (error) {

            console.log(
                "Theme storage unavailable."
            );

        }

    }


    /*
     * Public API
     */

    window.AkshayTheme = {

        getTheme:
            function () {

                return "dark";

            },

        setTheme:
            function () {

                applyTheme(
                    "dark"
                );

            }

    };


})();
