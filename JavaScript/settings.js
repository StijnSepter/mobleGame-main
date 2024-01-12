gearJS = document.getElementById("gear");
gearJS.addEventListener("click", gearSettings);
const canvas = document.getElementById("canvas");
const settings = document.getElementById("settings");

function gearSettings() {
    console.log("gearSettings");
    canvas.style.display = "none";
    settings.style.display = "block";
    element.classList.toggle("mystyle");
}
