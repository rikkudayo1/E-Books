const navButton = document.getElementById("nav-button");
const navToggle = document.getElementById("nav-toggle");

navButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (navToggle.style.top === "-300px") {
        navToggle.style.top = "78px";
    } else {
        navToggle.style.top = "-300px";
    }
});