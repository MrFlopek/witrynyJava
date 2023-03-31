const checkbox = document.getElementById(dwa);
const trzy = document.getElementById(jeden);
checkbox.addEventListener("change", function (){
    if(this.checked) {
        trzy.classList.remove('hide_number')
    } else {
        trzy.classList.add('hide_number')
    }
});