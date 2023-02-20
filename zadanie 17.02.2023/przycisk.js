// 1
const jeden = document.querySelector("#jedyneczka")
jeden.addEventListener('click', function () {
    document.querySelector("#szesc").innerHTML = "<i>Świetnie!</i>"
});
console.log(jeden)

// 2
const dwa = document.querySelector("#dwojka")
dwa.addEventListener('click', function () {
    document.querySelector("#piec").innerText = "<i>Świetnie!</i>"
});
console.log(dwa)

// 3
const trzy = document.querySelector("#trojeczka")
trzy.addEventListener('click', function () {
    const trzy_kontener = document.querySelector("#z3 strong");
    trzy_kontener.style.border = '2px dotted red'
    console.log(trzy_kontener)
})

// 4
const cztery = document.querySelector('#czworeczka')
cztery.addEventListener('click', function () {
    const cztery_jeden = document.querySelector('#z4');
    alert(cztery_jeden.title)
    console.log(cztery_jeden)
})

// 5
const piec = document.querySelector('#piateczka')
piec.addEventListener('click', function () {
    const piec_jeden = document.querySelector('#z5');
    piec_jeden.setAttribute('dir', 'rtl');
    console.log(piec_jeden)
})

// 6
const szesc = document.querySelector('#szosteczka')
szesc.addEventListener('click', function () {
    const szesc_jeden = document.querySelector('#z6');
    if (szesc_jeden.hasAttribute('disabled')) {
        document.getElementById('z6').disabled = false
        szesc_jeden.innerHTML = 'Można edytować';
    }
        else
            {
                document.getElementById('z6').disabled = true
                szesc_jeden.innerHTML = 'Nie mozna edytować'
            }


        console.log(szesc_jeden)
    }
);
