const images = document.querySelectorAll("img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.5)";
        img.style.transition = "transform 0.25s ease";
    });
});