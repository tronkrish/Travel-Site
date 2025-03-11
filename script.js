const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 200, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -200, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".left");
    const nextBtn = document.querySelector(".right");

    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -300, behavior: "smooth" });
    });
});
