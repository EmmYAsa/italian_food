function isElementInViewport(element, offset) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= offset
    );
}

var animationOffset = 80;

function handleScrollForElement(selector) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
        if (isElementInViewport(element, animationOffset)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', function() {
    handleScrollForElement("#popular-animation");
    handleScrollForElement("#discounts-left")
    handleScrollForElement("#discounts-right")
    handleScrollForElement("#pizza-animation")
});

handleScrollForElement("#popular-animation");
handleScrollForElement("#discounts-left")
handleScrollForElement("#discounts-right")
handleScrollForElement("#pizza-animation")

let searchInput = document.querySelector("#search-input-id");
let buttonSearch = document.querySelector("#search-img");

buttonSearch.addEventListener('click', () => {
    if (!searchInput.classList.contains("animation-search")) {
        searchInput.style.width = "0";
        searchInput.classList.add("animation-search");
    } else {
        searchInput.style.width = "145px";
        searchInput.classList.remove("animation-search");
    }
});

let suscribeInput = document.querySelector("#input-suscribe-animation");
let suscribeButton = document.querySelector("#button-suscribe-animation");
let blockSuscribe = document.querySelector("#block-suscribe");

suscribeButton.addEventListener('click', () => {
    if (!suscribeInput.classList.contains("suscribe-animation")) {
        suscribeInput.style.width = "0";
        suscribeInput.style.backgroundColor = "transparent";
        blockSuscribe.style.backgroundColor = "transparent";
        suscribeInput.classList.add("suscribe-animation");
    } else {
        suscribeInput.style.width = "400px";
        suscribeInput.style.backgroundColor = "#fff";
        blockSuscribe.style.backgroundColor = "#fff"; // Вернуть цвет фона
        suscribeInput.classList.remove("suscribe-animation");
    }
});
