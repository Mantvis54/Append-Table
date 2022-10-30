let vardas = document.getElementById("vardas");
let pavarde = document.getElementById("pavarde");
let amzius = document.getElementById("amzius");

let tBody = document.getElementById("tbody");

let prideti = document.getElementById('prideti');
let pirma = document.getElementById('pirma');
let paskutini = document.getElementById('paskutini');

prideti.addEventListener('click', () => {
    
    if( (vardas.value.trim() || pavarde.value.trim() || amzius.value.trim()) && amzius.value >= 0 ) {

        let tr = document.createElement("tr")
        tr.innerHTML =
        `
        <td>${vardas.value}</td>
        <td>${pavarde.value}</td>
        <td>${amzius.value}</td>
        `
         tBody.append(tr)
    
        vardas.value = ""
        pavarde.value = ""
        amzius.value = ""

    } else {
        vardas.value = ""
        pavarde.value = ""
        amzius.value = ""
        alert("Nurodykite bent vieną iš laukelių")
    }

});

pirma.addEventListener('click', () => {
    tBody.firstChild.remove();
});

paskutini.addEventListener('click', () => {
    tBody.lastChild.remove();
});