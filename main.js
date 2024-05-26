const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});