document.addEventListener("DOMContentLoaded", function () {
    try {
        var img;
        img = document.querySelector(".lazy-load0");
        var preloader;
        preloader = document.querySelector(".preloader0");

        function loadImage() {
            var src;
            src = img.getAttribute("data-src");
            if (!src) return;
            const tempImg = new Image();
            tempImg.src = src;
            tempImg.onload = function () {
                img.src = src;
                preloader.classList.add("hidden"); // Hide preloader
            };
        }

        if ("IntersectionObserver" in window) {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadImage();
                        observer.unobserve(img);
                    }
                });
            }, {rootMargin: "0px", threshold: 0.1});

            observer.observe(img);
        } else {
            loadImage();
        }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load1");
    var preloader;
    preloader = document.querySelector(".preloader1");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load2");
    var preloader;
    preloader = document.querySelector(".preloader2");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
}catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load3");
    var preloader;
    preloader = document.querySelector(".preloader3");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load4");
    var preloader;
    preloader = document.querySelector(".preloader4");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {

    try {
    var img;
    img = document.querySelector(".lazy-load5");
    var preloader;
    preloader = document.querySelector(".preloader5");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load6");
    var preloader;
    preloader = document.querySelector(".preloader6");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load7");
    var preloader;
    preloader = document.querySelector(".preloader7");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load8");
    var preloader;
    preloader = document.querySelector(".preloader8");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load9");
    var preloader;
    preloader = document.querySelector(".preloader9");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load10");
    var preloader;
    preloader = document.querySelector(".preloader10");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load11");
    var preloader;
    preloader = document.querySelector(".preloader11");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load12");
    var preloader;
    preloader = document.querySelector(".preloader12");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load13");
    var preloader;
    preloader = document.querySelector(".preloader13");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
    var img;
    img = document.querySelector(".lazy-load14");
    var preloader;
    preloader = document.querySelector(".preloader14");
    function loadImage() {
        var src;
        src = img.getAttribute("data-src");
        if (!src) return;
        const tempImg = new Image();
        tempImg.src = src;
        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
    }

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px", threshold: 0.1});

        observer.observe(img);
    } else {
        loadImage();
    }
    }catch (e) {

    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
        var img;
        img = document.querySelector(".lazy-load15");
        var preloader;
        preloader = document.querySelector(".preloader15");

        function loadImage() {
            var src;
            src = img.getAttribute("data-src");
            if (!src) return;
            const tempImg = new Image();
            tempImg.src = src;
            tempImg.onload = function () {
                img.src = src;
                preloader.classList.add("hidden"); // Hide preloader
            };
        }

        if ("IntersectionObserver" in window) {
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadImage();
                        observer.unobserve(img);
                    }
                });
            }, {rootMargin: "0px", threshold: 0.1});

            observer.observe(img);
        } else {
            loadImage();
        }
    }catch (e) {

    }
});
