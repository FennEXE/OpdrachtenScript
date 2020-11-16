var numbertoword = ["Een", "Twee", "Drie", "Vier", "Vijf", "Zes"];
var counts = [0, 0, 0, 0, 0, 0];

function myfunction(max) {
    let diceroll = Math.floor(Math.random() * Math.floor(max)) + 1;
    document.getElementById("rollresult").innerHTML = diceroll;
    console.log("Er is gegooid");
    console.log(diceroll);
    document.getElementById("rollresultword").innerHTML = numbertoword[diceroll - 1];
    counts[diceroll - 1]++;
    document.getElementById("roll" + diceroll).innerHTML = counts[diceroll - 1];
}

function mySecondfunction(max) {
    let diceroll = Math.floor(Math.random() * Math.floor(max)) + 1;
    document.getElementById("rollresult2").innerHTML = diceroll;
    console.log("Er is gegooid");
    console.log(diceroll);
}