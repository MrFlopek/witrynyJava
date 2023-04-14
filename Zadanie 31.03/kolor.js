const checkbox = document.getElementById('piec');
const telefon = document.getElementById('dwa');
const telefonik = document.getElementById('trzy');
const telefonike = document.getElementById('cztery');
checkbox.addEventListener("change", function (){
    if(checkbox.checked) {
        telefon.classList.remove("hide_number");
        telefonike.classList.remove("hide_number");
        telefonik.classList.remove("hide_number");
    } else {
        telefon.classList.add("hide_number");
        telefonike.classList.add("hide_number");
        telefonik.classList.add("hide_number");
    }
    console.log('działa')
});