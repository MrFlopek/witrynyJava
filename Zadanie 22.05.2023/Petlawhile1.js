//let i=2;
//while(i<=10){
//    console.log('i='+ i);
//    i++;
//}

const jeden = document.getElementById('guziczek');
jeden.addEventListener("click", function (){
    jeden.innerHTML='';
    const kolumnyinput = document.getElementById('kolumny');
        const kolumny = parseInt(kolumnyinput.value);
        console.log('Liczba Kolumn: ' + kolumny)
})
const dwa = document.getElementById('guziczek');
dwa.addEventListener("click", function (){
    dwa.innerHTML='';
    const wierszeinput = document.getElementById('wiersze');
    const wiersze = parseInt(wierszeinput.value);
    console.log('Liczba Wierszy: ' + wiersze)
})
