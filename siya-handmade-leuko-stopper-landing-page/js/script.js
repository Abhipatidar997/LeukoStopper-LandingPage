document.addEventListener("DOMContentLoaded", function () {
    // Swiper Slider Initialization
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

// FAQ Accordion Effect
document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
        item.querySelector(".faq-answer").classList.toggle("hidden");
    });
});


    // Swiper.js for Testimonials
var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

        // GSAP Parallax Effect for Benefits Section
        gsap.to("#benefit1", { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" });
        gsap.to("#benefit2", { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power2.out" });
        gsap.to("#benefit3", { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power2.out" });

        // GSAP Animations for How It Works Section
        gsap.to("#step1", { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: "back.out(1.7)" });
        gsap.to("#step2", { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" });
        gsap.to("#step3", { opacity: 1, scale: 1, duration: 1, delay: 0.8, ease: "back.out(1.7)" });

    // GSAP Animation for Problem-Solution Section
    gsap.from(".problem-solution div", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3
    });

    // GSAP Animation for Hero Section (Optional)
    gsap.from(".hero-section h1, .hero-section p, .hero-section button", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    });

    // GSAP Animation for Features Section
    gsap.from(".features div", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3

    
        
    });
});
