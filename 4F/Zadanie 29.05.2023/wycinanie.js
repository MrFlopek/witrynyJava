// slice
var tekst = document.getElementsByClassName('wycinek')[0].innerText;
var plus = document.getElementById('jeden');
plus.addEventListener('click',function (){
    alert(tekst.slice(26,36));
});
var minus = document.getElementById('dwa');
minus.addEventListener('click', function (){
    alert(tekst.slice(-12, -5));
});

// substring
var tekscik = document.getElementsByClassName('wyciac')[0].innerText;
var dodatnie = document.getElementById('pierwszy');
dodatnie.addEventListener('click',function (){
    alert(tekscik.substring(9, 19));
});
var koniec = document.getElementById('drugi');
koniec.addEventListener('click', function (){
    alert(tekscik.substring(27));
});

// substr
var tekstjeden = document.getElementsByClassName('wycineczek')[0].innerText;
var pierwsze = document.getElementById('guzik');
pierwsze.addEventListener('click',function (){
    alert(tekstjeden.substr(27, 9));
});
var drugie = document.getElementById('guziczek');
drugie.addEventListener('click', function (){
    alert(tekstjeden.substr(37, ));
});

// replace
var tekstdwa = document.getElementsByClassName('wycinanie')[0].innerText;
var zastapienie = document.getElementById('przyciskpierw');
zastapienie.addEventListener('click',function (){
    var wynik = tekstdwa.replace("Microsoft", "Januszex")
    document.getElementsByClassName("wycinanie")[0].innerHTML=wynik;
});
var slowo = document.getElementById('przyciskdwa');
slowo.addEventListener('click', function () {
   var wynik =  tekstdwa.replace('Edge','Janusz Explorer')
    document.getElementsByClassName("wycinanie")[0].innerHTML=wynik;
});

// replaceall
var teksttrzy = document.getElementsByClassName('zamienienie')[0].innerText;
var zastapywanie = document.getElementById('przycisk');
zastapywanie.addEventListener('click',function (){
    var wynik = teksttrzy.replaceAll("Microsoft", "JanuszPol")
    document.getElementsByClassName("zamienienie")[0].innerHTML=wynik;
});

// toUpperCase / toLowerCase
var tekstcztery = document.getElementsByClassName('zmiana')[0].innerText;
var wielkosc = document.getElementById('przycisktrzy');
wielkosc.addEventListener('click',function (){
    var wyniczek = tekstcztery.toUpperCase()
    document.getElementsByClassName("zmiana")[0].innerHTML=wyniczek;
});
var male = document.getElementById('przyciskcztery');
male.addEventListener('click', function () {
    var wyniczek =  tekstcztery.toLowerCase()
    document.getElementsByClassName("zmiana")[0].innerHTML=wyniczek;
});
var podstawa = document.getElementById('przyciskpiec');
podstawa.addEventListener('click', function () {
    tekstcztery.fontsize()
    document.getElementsByClassName("zmiana")[0].innerHTML=tekstcztery;
});