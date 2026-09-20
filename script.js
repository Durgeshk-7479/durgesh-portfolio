const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});

/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll(
    ".about, .skills, .projects, .experience, .contact"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    observer.observe(element);
});