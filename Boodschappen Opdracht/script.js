//Deze functie zorgt er voor dat alle nummers in financial() altijd twee decimalen hebben.
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

//Variabelen voor Brood
const broodPrijs = document.getElementById("prijsBrood");
broodPrijs.innerHTML = 1.00.toFixed(2);
const broodQuantity = document.getElementById("broodNummer");
broodQuantity.innerHTML = 0;
let broodKost = document.getElementById("broodCost");
//Variabelen voor Broccoli
const broccoliPrijs = document.getElementById("prijsBroccoli");
broccoliPrijs.innerHTML = 0.99;
const broccoliQuantity = document.getElementById("broccoliNummer");
broccoliQuantity.innerHTML = 0;
let broccoliKost = document.getElementById("broccoliCost");
//Variabelen voor Krentenbollen
const krentenbollenPrijs = document.getElementById("prijsKrentenbollen");
krentenbollenPrijs.innerHTML = 1.20.toFixed(2);
const krentenbollenQuantity = document.getElementById("krentenbollenNummer");
krentenbollenQuantity.innerHTML = 0;
let krentenbollenKost = document.getElementById("krentenbollenCost");
//Variabelen voor Noten
const notenPrijs = document.getElementById("prijsNoten");
notenPrijs.innerHTML = 1.20.toFixed(2);
const notenQuantity = document.getElementById("notenNummer");
notenQuantity.innerHTML = 0;
let notenKost = document.getElementById("notenCost");
//Totaalprijs Variabele
let broodTotaal = 0;
let broccoliTotaal = 0;
let krentenbollenTotaal = 0;
let notenTotaal = 0;
let totaalCost = document.getElementById("totaalCost");


//Deze functie beheerd de + knopjes
function addProduct(buttonType) {
    if (buttonType === brood) {
        broodQuantity.innerHTML++;
        broodKost.innerHTML = financial(broodQuantity.innerHTML * broodPrijs.innerHTML);
        broodTotaal = broodQuantity.innerHTML * broodPrijs.innerHTML;
    }
    if (buttonType === broccoli) {
        broccoliQuantity.innerHTML++;
        broccoliKost.innerHTML = financial(broccoliQuantity.innerHTML * broccoliPrijs.innerHTML);
        broccoliTotaal = broccoliKost.innerHTML;
    }
    if (buttonType === krentenbollen) {
        krentenbollenQuantity.innerHTML++;
        krentenbollenKost.innerHTML = financial(krentenbollenQuantity.innerHTML * krentenbollenPrijs.innerHTML);
        krentenbollenTotaal = krentenbollenKost.innerHTML;
    }
    if (buttonType === noten) {
        notenQuantity.innerHTML++;
        notenKost.innerHTML = financial(notenQuantity.innerHTML * notenPrijs.innerHTML);
        notenTotaal = notenKost.innerHTML;
    }
    totaalCost.innerHTML = (Number(broodTotaal) + Number(broccoliTotaal) + Number(krentenbollenTotaal) + Number(notenTotaal)).toFixed(2);
}

//Deze functie beheerd de - knopjes. Nested if functie voorkomt dat het aantal onder 0 komt. Kan worden verbeterd
function removeProduct(buttonType) {
    if (buttonType === brood) {
        if (broodQuantity.innerHTML > 0) {
            broodQuantity.innerHTML--;
            broodKost.innerHTML = financial(broodQuantity.innerHTML * broodPrijs.innerHTML);
            broodTotaal = broodQuantity.innerHTML * broodPrijs.innerHTML;
        } else null;
    }
    if (buttonType === broccoli) {
        if (broccoliQuantity.innerHTML > 0) {
            broccoliQuantity.innerHTML--;
            broccoliKost.innerHTML = financial(broccoliQuantity.innerHTML * broccoliPrijs.innerHTML);
            broccoliTotaal = broccoliKost.innerHTML;
        } else null;
    }
    if (buttonType === krentenbollen) {
        if (krentenbollenQuantity.innerHTML > 0) {
            krentenbollenQuantity.innerHTML--;
            krentenbollenKost.innerHTML = financial(krentenbollenQuantity.innerHTML * krentenbollenPrijs.innerHTML);
            krentenbollenTotaal = krentenbollenKost.innerHTML;
        } else null;
    }
    if (buttonType === noten) {
        if (notenQuantity.innerHTML > 0) {
            notenQuantity.innerHTML--;
            notenKost.innerHTML = financial(notenQuantity.innerHTML * notenPrijs.innerHTML);
            notenTotaal = notenKost.innerHTML;
        } else null;
    }
    totaalCost.innerHTML = (Number(broodTotaal) + Number(broccoliTotaal) + Number(krentenbollenTotaal) + Number(notenTotaal)).toFixed(2);
}