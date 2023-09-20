let miesiac = Math.floor(Math.random() * 15) + 1;
console.log(miesiac)
let miesiacTekst = "";
switch (miesiac){
    case 1:
    case 2:
    case 3:
        miesiacTekst = "I kwartał";
        break;
    case 4:
    case 5:
    case 6:
        miesiacTekst = "II kwartał";
        break;
    case 7:
    case 8:
    case 9:
        miesiacTekst = "III kwartał";
        break;
    case 10:
    case 11:
    case 12:
        miesiacTekst = "IV kwartał";
        break;
    default:
        miesiacTekst = "Błędny numer miesiąca";
}
document.getElementById('miesiac').innerHTML = miesiacTekst;
document.getElementById('numer').innerHTML = miesiac;