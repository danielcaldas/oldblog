(function configureBackToTopButton() {
    var VANILLA_BACK_TO_TOP = "https://unpkg.com/vanilla-back-to-top@7.1.14/dist/vanilla-back-to-top.min.js";
    var BTN_STYLE = {
        diameter: 42,
        backgroundColor: "#000",
        textColor: "#fff"
    };

    function addButton(style) {
        addBackToTop(style);
    }

    var script = document.createElement("script");

    script.type = "text/javascript";
    script.src = VANILLA_BACK_TO_TOP;
    script.onload = addButton.bind(this, BTN_STYLE);

    var retry = 5;

    const interval = setInterval(function() {
        try {
            document.body.appendChild(script);
            window.clearInterval(interval);
        } catch (error) {
            if (retry === 0) {
                window.clearInterval(interval);
            }

            retry--;
        }
    }, 500);
})();