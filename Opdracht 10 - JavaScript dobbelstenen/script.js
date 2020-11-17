var numberToWord = ["Een", "Twee", "Drie", "Vier", "Vijf", "Zes"];
var counts = [0, 0, 0, 0, 0, 0];
var numArray = [0, 0, 0, 0, 0, 0, 0, 0];
numArray = numArray.sort();

function gooi(max) {
    let diceRoll = Math.floor(Math.random() * Math.floor(max)) + 1;
    document.getElementById("rollresult").innerHTML = diceRoll;
    console.log("Er is gegooid");
    console.log(diceRoll);
    document.getElementById("rollresultword").innerHTML = numberToWord[diceRoll - 1];
    counts[diceRoll - 1]++;
    document.getElementById("roll" + diceRoll).innerHTML = counts[diceRoll - 1];
}

function gooi8(max) {
    function theRoll(max, list) {
        let diceRoll = Math.floor(Math.random() * Math.floor(max)) + 1;
        counts[diceRoll - 1]++;
        document.getElementById("rolle" + diceRoll).innerHTML = counts[diceRoll - 1];
        numArray[list - 1] = " " + diceRoll;
    }
    theRoll(max, 1);
    theRoll(max, 2);
    theRoll(max, 3);
    theRoll(max, 4);
    theRoll(max, 5);
    theRoll(max, 6);
    theRoll(max, 7);
    theRoll(max, 8);
    numArray = numArray.sort();
    document.getElementById("rolleresultword").innerHTML = numArray;
    console.log("Er is gegooid");
    console.log(numArray);
}

function mySecondfunction(max) {
    let diceRoll = Math.floor(Math.random() * Math.floor(max)) + 1;
    document.getElementById("rollresult2").innerHTML = diceRoll;
    console.log("Er is gegooid");
    console.log(diceRoll);
}
