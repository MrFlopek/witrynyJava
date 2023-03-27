document.querySelector("#dwa").addEventListener("click", function () {
    document.getElementById("zarowkazdj").src="zarowka1.jpg";
    document.getElementById("radiodwa").checked="false";
    document.getElementById("checkboxjeden").checked="false";
});
document.querySelector("#jeden").addEventListener("click", function () {
    document.getElementById("zarowkazdj").src="zarowka2.jpg";
    document.getElementById("radiojeden").checked="true";
    document.getElementById("checkboxjeden").checked="true";
});
document.querySelector('#checkboxjeden').addEventListener('click', function (){
    document.getElementById('zarowkazdj').src="zarowka2.jpg"
})
document.querySelector("#radiojeden").addEventListener("click", function () {
    document.getElementById("zarowkazdj").src = "zarowka2.jpg";
});
document.querySelector("#radiodwa").addEventListener("click", function () {
    document.getElementById("zarowkazdj").src = "zarowka1.jpg";
});