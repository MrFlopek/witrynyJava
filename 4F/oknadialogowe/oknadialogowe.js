//1

function oknoAlert() {
    alert('Możesz być z siebie dumny');
}

const guzik = document.querySelector("#przycisk");
guzik.addEventListener('click', () => {
    oknoAlert();
});
console.log(guzik)

//2

function oknoConfirm() {
    if (confirm ('Czy jesteś pewien, że chcesz kontynuować')) {
        alert ('No to kontynuuj')
    } else
    {
        alert ('Przykro mi, że nie chesz kontynuować')
    }
}

const button = document.querySelector("#klik")
button.addEventListener('click', () => {
    oknoConfirm();
});
console.log(button);

//3

function oknoPrompt() {
    let przyklad = prompt("Podaj swoje imię:");

    if (przyklad) {
        alert("Witaj " + przyklad);
    }
    else
    {
        alert("Anulowałeś akcję, a okienko zwróciło " + przyklad);
    }
}

const pro = document.querySelector("#qsd")
pro.addEventListener('click', () => {
    oknoPrompt()
})
console.log(pro)