const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

function teeNimedKorda() {
    return nimed.map(nimi => {
        const [eesnimi, perenimi] = nimi.split(" ").map(sõna => sõna.charAt(0).toUpperCase() + sõna.slice(1).toLowerCase());
        const email = `${perenimi.toLowerCase()}@tthk.ee`;
        return { eesnimi, perenimi, email };
    });
}

function OtsiNimi() {
    const sisestatudNimi = document.getElementById("otsi-nime-sisestus").value.toLowerCase();
    const leitudNimed = teeNimedKorda().filter(({ eesnimi, perenimi }) =>
        eesnimi.toLowerCase().includes(sisestatudNimi) || perenimi.toLowerCase().includes(sisestatudNimi)
    );
    KuvaTaisnimed(leitudNimed);
}

function KuvaTaisnimed(nimedList) {
    const nimedeList = document.getElementById("nimede-list");
    nimedeList.innerHTML = "";
    nimedList.forEach(({ eesnimi, perenimi, email }) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Eesnimi: ${eesnimi}, Perenimi: ${perenimi}, Email: ${email}`;
        nimedeList.appendChild(listItem);
    });
}