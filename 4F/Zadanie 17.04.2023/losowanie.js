const generator = document.getElementById('generaotr');
const wyniki = document.getElementById('wynik');
generator.addEventListener("click", function (){
    const min = 1;
    const max = 30;
    const losowanie = Math.floor(Math.random() * (max - min +1)) + min;
    wyniki.textContent = losowanie;

    const rand = losowanie;
    if (losowanie >= 20) {
        console.log('Licza jest większa lub równa 20')
    }
    const x = losowanie;
    const isEven = (x % 2 === 0) ? "parzysta" : "nieparzysta";
    console.log(isEven);
    const dziesiec = losowanie;
    console.log(losowanie);
});