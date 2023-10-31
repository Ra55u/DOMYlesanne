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
    const leitudIsik = LeiaNimiJaVanus(isikukood);
    if (leitudIsik) {
        LisaIsikuAndmed(leitudIsik.nimi, leitudIsik.vanus, leitudIsik.sunniaeg);
    } else {
        alert("Isikukoodi ei leitud!");
    }
}

function LeiaNimiJaVanus(isikukood) {
    const leitudIsik = inimesteAndmed.find(function(isik) {
        return isik.isikukood === isikukood;
    });
    
    if (leitudIsik) {
        const synniaasta = "19" + isikukood.substring(1, 3);
        const synnikuu = parseInt(isikukood.substring(3, 5)) - 1; // JavaScripti kuud on 0-indeksiga (jaanuar = 0)
        const synnipaev = isikukood.substring(5, 7);
        const synniaeg = new Date(synniaasta, synnikuu, synnipaev);
        const vanus = Math.floor((new Date() - synniaeg) / (365.25 * 24 * 60 * 60 * 1000));
        return { nimi: leitudIsik.nimi, vanus: vanus, sunniaeg: synniaeg.toLocaleDateString() };
    } else {
        return null;
    }
}

function LisaIsikuAndmed(nimi, vanus, sunniaeg) {
    const isikudListElement = document.getElementById("isikud-list");
    const listItem = document.createElement("li");
    listItem.textContent = `Nimi: ${nimi}, Vanus: ${vanus} aastat, Sünniaeg: ${sunniaeg}`;
    isikudListElement.appendChild(listItem);
}
