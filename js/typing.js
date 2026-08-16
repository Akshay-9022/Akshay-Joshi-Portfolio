
/* =========================================================
   AKSHAY JOSHI PORTFOLIO
   TYPING EFFECT
========================================================= */

(function () {

    "use strict";


    document.addEventListener(
        "DOMContentLoaded",
        function () {

            startTypingEffect();

        }
    );


    function startTypingEffect() {

        var element =
            document.querySelector(
                ".hero-copy h2"
            );


        if (!element) {

            return;

        }


        /*
         * Keep this simple and smooth.
         */

        var fullText =
            "Frontend Developer";


        var index =
            0;


        var deleting =
            false;


        var pauseCounter =
            0;


        function typeText() {

            /*
             * Stop typing when reduced motion
             * is requested by the browser.
             */

            if (
                window.matchMedia &&
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
            ) {

                element.textContent =
                    fullText;

                return;

            }


            /*
             * Pause after completing the text.
             */

            if (
                pauseCounter >
                0
            ) {

                pauseCounter--;

                setTimeout(
                    typeText,
                    90
                );

                return;

            }


            if (!deleting) {

                index++;


                element.textContent =
                    fullText.substring(
                        0,
                        index
                    );


                if (
                    index >=
                    fullText.length
                ) {

                    pauseCounter =
                        16;

                    deleting =
                        true;

                }

            } else {

                index--;


                element.textContent =
                    fullText.substring(
                        0,
                        index
                    );


                if (
                    index <=
                    0
                ) {

                    deleting =
                        false;

                    pauseCounter =
                        5;

                }

            }


            var speed =
                deleting
                    ? 48
                    : 78;


            setTimeout(
                typeText,
                speed
            );

        }


        element.textContent =
            "";


        typeText();

    }


})();

