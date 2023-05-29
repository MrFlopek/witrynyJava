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

//