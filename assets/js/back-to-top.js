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

    document.body.appendChild(script);
})();