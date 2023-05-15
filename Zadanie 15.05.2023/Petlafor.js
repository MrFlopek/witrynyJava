const form = document.getElementById('formularz');
for (let i = 0; i < 100; i++){
    let input = document.createElement('input');
    input.setAttribute('id','input' + i);
    input.setAttribute('name','input' + i);
    input.setAttribute('style','margin: 10px; box-shadow: 5px 5px lightblue;');
    input.setAttribute('placeholder', 'Element numer ' + (i + 1));

    const kolumnaindex = Math.floor(i / 20);
    const kolumnaid = 'column' + kolumnaindex;
    const column = document.getElementById('kolumnId');

    if (!column){
        colum = document.createElement('div')
        colum.setAttribute('class', 'column')
        colum.setAttribute('id', kolumnaid)
        form.appendChild(colum);
    }
    colum.appendChild(input)
}