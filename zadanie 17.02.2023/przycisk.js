// 1
const jeden = document.querySelector("#jedyneczka")
jeden.addEventListener('click', function (){
    document.querySelector("#szesc").innerHTML = "<i>Świetnie!</i>"
});
console.log(jeden)

// 2
const dwa = document.querySelector("#dwojka")
dwa.addEventListener('click', function (){
    document.querySelector("#piec").innerText = "<i>Świetnie!</i>"
});
console.log(dwa)

// 3
const trzy = document.querySelector("#trojeczka")
trzy.addEventListener('click', function (){
  const trzy_elementy = document.querySelector("#z3");
  console.log(trzy_elementy)
})
