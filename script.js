const options = document.getElementById("options");
const navLinks = document.getElementById("navLinks");

options.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});