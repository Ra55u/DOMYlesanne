const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
];

function LisaIsik() {
    const isikukood = document.getElementById("isikukood").value;
    const nimi = LeiaNimi(isikukood);
    if (nimi) {
        LisaIsikuAndmed(nimi);
    } else {
        alert("Isikukoodi ei leitud!");
    }
}

function LeiaNimi(isikukood) {
    const leitudIsik = inimesteAndmed.find(function(isik) {
        return isik.isikukood === isikukood;
    });
    return leitudIsik ? leitudIsik.nimi : null;
}

function LisaIsikuAndmed(nimi) {
    const isikudListElement = document.getElementById("isikud-list");
    const listItem = document.createElement("li");
    listItem.textContent = nimi;
    isikudListElement.appendChild(listItem);
}
