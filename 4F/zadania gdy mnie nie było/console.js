console.log("Witaj Świecie");
console.log(window);
console.log("Witaj", window, 100);
console.table([1, 2, 3, 4, 5]); //tabelka
console.group("elkomando"); // tworzenie grupy
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //konczenie grupy
console.groupCollapsed("elkomando"); //grupa domyslnie zwinieta
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //konczenie grupy
console.time("test 1"); //rozpoczyna test-zaczyna liczyć czas
for (let i = 0; i < 100000; i++) {
    ;
}
console.timeEnd( "test 1"); //konczy test
function test() {
    let i = 0;
   //debugger;
    //instrukcja debugger przerywam działanie skryptu w tym miejscu,
    // dzieki czemu moge spokojnie go badac w zakładce Source.
    // Dodatkowo w konsoli mam dostęp do zmiennych z danego scope
    // ta instrukcja przerywa natychmiast działanie kodu
}
//ZMIENNE
var text ="ala";
text = "Janek ma żyrafę"; //wszystko ok,  bo var to zmienna
console.log({text});

let a = 0;
a = 10; // wszystko ok, bo let
const b = 0;
//b = 10; // błąd - do stałej nie możemy przypisać nowej wartości

const name="Ala";
//name = "Monika"; błąd

const tab = [1,2,3]; //tablica to też obiekt
tab[3] = 4;
tab.push(5, 6);
console.log(tab); //[1, 2, 3, 4, 5, 6]
//tab = [1, 2, 3, 4, 5, 6]; //błąd - podstawiłem zupełnie nową tablicę
