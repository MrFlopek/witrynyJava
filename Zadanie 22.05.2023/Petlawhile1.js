//let i=2;
//while(i<=10){
//    console.log('i='+ i);
//    i++;
//}

przycisk.addEventListener("click", function(){
    const tabela=document.querySelector("#tabela");
    tabela.innerHTML='';


    const kolumny=document.querySelector("#kolumny");
    kolumnos=parseInt(kolumny.value)
    let k=1;

    const wiersze=document.querySelector("#wiersze");
    wierszos=parseInt(wiersze.value);
    let w=1;

    console.log('liczba kolumn '+kolumnos+' liczba wierszy '+wierszos);
    while(w<=wierszos){
        const tworzone = document.createElement("tr")

        while(k<=kolumnos){
            const tworzoned = document.createElement("td")
            tworzoned.innerHTML=k+'|'+w;
            tabela.appendChild(tworzoned);
            k++;
        }
        k=1;
        w++;
        tabela.appendChild(tworzone);

    };
});

