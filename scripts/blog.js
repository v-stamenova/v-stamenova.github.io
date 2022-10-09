
window.onresize = windowResize;

const banner = document.getElementById("headline-banner");
const headline = document.getElementById("headline");
windowResize();

function windowResize() {
    if ($(document).width() < 600) {
        banner.classList.remove("sticky-top");
        headline.classList.remove("display-4");
        headline.classList.add("small-heading");
    }
    else {
        banner.classList.add("sticky-top");
        headline.classList.add("display-4");
        headline.classList.remove("small-heading");
    }
}