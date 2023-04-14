document.querySelector("#dwa").addEventListener("click", function () {
    document.getElementById("zarowkazdj").src="zarowka1.jpg";
    document.getElementById("radiodwa").checked= "false";

});
document.querySelector("#jeden").addEventListener("click", function () {
    document.getElementById("zarowkazdj").src="zarowka2.jpg";
    document.getElementById("radiojeden").checked= "true";

});
document.querySelector('#checkboxjeden').addEventListener('click', function (){
    document.getElementById('zarowkazdj').src="zarowka2.jpg"
});
document.querySelector("#radiojeden").addEventListener("click", function () {
    document.getElementById("zarowkazdj").src = "zarowka2.jpg";
});
document.querySelector("#radiodwa").addEventListener("click", function () {
    document.getElementById("zarowkazdj").src = "zarowka1.jpg";
});

document.getElementById('checkboxdwa').innerText = "Wyłączona";
document.getElementById('checkboxjeden').checked = false;

document.getElementById('checkboxjeden').addEventListener("change",function () {
    document.getElementById('checkboxjeden').toggleAttribute('checked');
    if (document.getElementById('checkboxjeden').checked) {
        zarowkazdj.src = 'zarowka2.jpg';
        document.getElementById('checkboxdwa').innerText = 'Włączone'
        console.log('Żarówka została włączona checkboxkem');
        document.getElementById('radiojeden').checked = true;
    } else {
        zarowkazdj.src = 'zarowka1.jpg';
        document.getElementById('checkboxdwa').innerText = 'Wyłączona';
        console.log('Żarówka zostałą wyłączona checkboxem');
        document.getElementById('radiodwa').checked = true;
    }
});