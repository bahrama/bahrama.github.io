document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".lazy-load0");
    const img2 = document.querySelector(".lazy-load1");
    const img3 = document.querySelector(".lazy-load2");
    const img4 = document.querySelector(".lazy-load3");
    const img5 = document.querySelector(".lazy-load4");
    const preloader = document.querySelector(".preloader0");
    const preloader2 = document.querySelector(".preloader1");
    const preloader3 = document.querySelector(".preloader2");
    const preloader4 = document.querySelector(".preloader3");
    const preloader5 = document.querySelector(".preloader4");

    function loadImage() {
        const src = img.getAttribute("data-src");
        const src2 = img2.getAttribute("data-src");
        const src3 = img3.getAttribute("data-src");
        const src4 = img4.getAttribute("data-src");
        const src5 = img5.getAttribute("data-src");
        if (!src) return;
        if (!src2) return;
        if (!src3) return;
        if (!src4) return;
        if (!src5) return;

        // Create new Image object
        const tempImg = new Image();
        tempImg.src = src;
        const tempImg2 = new Image();
        tempImg2.src = src2;
        const tempImg3 = new Image();
        tempImg3.src = src3;
        const tempImg4 = new Image();
        tempImg4.src = src4;
        const tempImg5 = new Image();
        tempImg5.src = src5;

        tempImg.onload = function () {
            img.src = src;
            preloader.classList.add("hidden"); // Hide preloader
        };
        tempImg2.onload = function () {
            img2.src = src2;
            preloader2.classList.add("hidden"); // Hide preloader
        };
        tempImg3.onload = function () {
            img3.src = src3;
            preloader3.classList.add("hidden"); // Hide preloader
        };
        tempImg4.onload = function () {
            img4.src = src4;
            preloader4.classList.add("hidden"); // Hide preloader
        };
        tempImg5.onload = function () {
            img5.src = src5;
            preloader5.classList.add("hidden"); // Hide preloader
        };
    }

    // Lazy Load Using Intersection Observer
    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(img);
                    observer.unobserve(img2);
                    observer.unobserve(img3);
                    observer.unobserve(img4);
                    observer.unobserve(img5);
                }
            });
        }, { rootMargin: "0px", threshold: 0.1 });

        observer.observe(img);
        observer.observe(img2);
        observer.observe(img3);
        observer.observe(img4);
        observer.observe(img5);
    } else {
        // Fallback for older browsers
        loadImage();
    }
});
