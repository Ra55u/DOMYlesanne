function Toode(nimetus, hind, kogus) {
    this.nimetus = nimetus;
    this.hind = hind;
    this.kogus = kogus;
}

const ostukorv = {
    tooted: [],

    LisaToode: function() {
        const nimetus = document.getElementById("toote-nimetus").value;
        const hind = parseFloat(document.getElementById("toote-hind").value);
        const kogus = parseInt(document.getElementById("toote-kogus").value);
        if (nimetus && hind && kogus) {
            const uusToode = new Toode(nimetus, hind, kogus);
            this.tooted.push(uusToode);
            this.KuvaTooted();
            this.KuvaOstukorviSumma();
            this.TuhjendaSisendValjad();
        } else {
            alert("Palun täitke kõik väljad enne toote lisamist!");
        }
    },

    ArvutaOstukorviSumma: function() {
        let summa = 0;
        this.tooted.forEach(function(toode) {
            summa += toode.hind * toode.kogus;
        });
        return summa.toFixed(2);
    },

    KuvaTooted: function() {
        const tootedList = document.getElementById("tooted-list");
        tootedList.innerHTML = "";
        this.tooted.forEach(function(toode) {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.textContent = `Nimetus: ${toode.nimetus}, Hind: ${toode.hind}€, Kogus: ${toode.kogus}`;
            tootedList.appendChild(listItem);
        });
    },

    KuvaOstukorviSumma: function() {
        document.getElementById("ostukorvi-summa").textContent = this.ArvutaOstukorviSumma() + "€";
    },

    TuhjendaSisendValjad: function() {
        document.getElementById("toote-nimetus").value = "";
        document.getElementById("toote-hind").value = "";
        document.getElementById("toote-kogus").value = "";
    }
};
