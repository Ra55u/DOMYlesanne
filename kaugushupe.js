const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] }
];

function LisaTulemus() {
    const opilaseNimi = document.getElementById("opilase-nimi").value;
    const tulemus = parseFloat(document.getElementById("tulemus").value);
    const opilane = LeiaOpilane(opilaseNimi);
    if (opilane) {
        opilane.tulemused.push(tulemus);
        KuvaOpilasteTulemused(opilane);
    } else {
        alert("Õpilast ei leitud!");
    }
}

function LeiaOpilane(nimi) {
    return opilased.find(function(opilane) {
        return opilane.nimi.toLowerCase() === nimi.toLowerCase();
    });
}

function KuvaOpilasteTulemused(opilane) {
    const opilasteTulemusedListElement = document.getElementById("opilaste-tulemused-list");
    opilasteTulemusedListElement.innerHTML = "";

    if (opilane) {
        const tulemused = opilane.tulemused.join(", ");
        const parimTulemus = Math.max(...opilane.tulemused);
        const keskmineTulemus = (opilane.tulemused.reduce((a, b) => a + b, 0) / opilane.tulemused.length).toFixed(2);

        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${opilane.nimi} - Tulemused: ${tulemused}, Parim: ${parimTulemus}, Keskmine: ${keskmineTulemus}`;
        opilasteTulemusedListElement.appendChild(listItem);
    } else {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = "Õpilast ei leitud!";
        opilasteTulemusedListElement.appendChild(listItem);
    }
}