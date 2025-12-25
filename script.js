let menulist = document.getElementById("menulist");
let carousel = document.getElementById("mainCarousel");

function toggleMenu() {
    if (menulist.style.maxHeight === "0px" || menulist.style.maxHeight === "") {

        menulist.style.maxHeight = "250px";

        // 👇 SHIFT CAROUSEL DOWN
        carousel.classList.add("shifted");

    } else {
        menulist.style.maxHeight = "0px";

        // 👇 RETURN CAROUSEL TO ORIGINAL POSITION
        carousel.classList.remove("shifted");
    }
}






