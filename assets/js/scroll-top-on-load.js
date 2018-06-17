(function onLoadScrollTop() {
    document.addEventListener('DOMContentLoaded', function(event) {
        var IFRAMES = ['codepen-iframe'];

        IFRAMES.forEach(function(id) {
            document.getElementById(id).onload = function () {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        });
    });
})();