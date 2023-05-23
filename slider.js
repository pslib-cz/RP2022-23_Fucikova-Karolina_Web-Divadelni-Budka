let slideOverlay
let sliderItems

document.addEventListener("DOMContentLoaded", () => {
    sliderItems = document.querySelectorAll(".slider__item")
    slideOverlay = document.querySelector(".slider-view__back")

    for (const item of sliderItems) {
        //item.addEventListener("mousemove", mouseMoved)
    }
    sliderItems[0].style.display = "block"
});

/* Posun overlay při pohybu myši */
function mouseMoved(e) {
    const positionX = e.offsetX / e.currentTarget.clientWidth * 100;
    slideOverlay = e.currentTarget.querySelector(".slider-view__back")
    slideOverlay.style.clipPath = `polygon(0 0, ${positionX}% 0, ${positionX}% 100%, 0 100%)`;
}

