// podowanie liczby
const usernumber = prompt('Podaj jakąś liczbę, ładnie proszę');
const spannumber = document.getElementsByClassName('liczba');
document.getElementById('poczatek').innerText = 'Podana liczba to:' + usernumber;
// wpisywanie do nawiasów
for (const num of spannumber)
{
num.innerText=usernumber;
}
// liczenie
let funkcja1 = Math.abs(usernumber);
let funkcja2 = Math.ceil(usernumber);
let funkcja3 = Math.floor(usernumber);
let funkcja4 = Math.max(usernumber);
let funkcja5 = Math.min(usernumber);
let funkcja6 = Math.pow(usernumber,2);
let funkcja7 = Math.round(usernumber);
let funkcja8 = Math.sqrt(usernumber);
// wpisywanie do linijek wyników
document.getElementById('jeden').innerText = funkcja1;
document.getElementById('dwa').innerText = funkcja2;
document.getElementById('trzy').innerText = funkcja3;
document.getElementById('cztery').innerText = funkcja4;
document.getElementById('piec').innerText = funkcja5;
document.getElementById('szesc').innerText = funkcja6;
document.getElementById('siedem').innerText = funkcja7;
document.getElementById('osiem').innerText = funkcja8;

