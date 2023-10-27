let tooted = [];
let ostukorviSumma = 0;

function LisaToode() {
    const tooteNimi = document.getElementById("toote-nimi").value;
    tooted.push(tooteNimi);
    ostukorviSumma += 1; // Võite muuta toote hinna vastavalt vajadusele
    KuvaTooted();
    KuvaOstukorviSumma();
}

function KuvaTooted() {
    const tootedList = document.getElementById("tooted-list");
    tootedList.innerHTML = "";
    tooted.forEach(function(toode) {
        const listItem = document.createElement("li");
        listItem.textContent = toode;
        tootedList.appendChild(listItem);
    });
}

function KuvaOstukorviSumma() {
    document.getElementById("ostukorvi-summa").textContent = ostukorviSumma;
}
