const myname = "Luuk Nagtegaal";
const mycolors = ["Red", "Green", "Blue", "Yellow", "Orange"];
let mymessage = "Hi " + myname + "!";

function myfunction() {
    document.getElementById("greeting").innerHTML = mymessage;
    document.getElementById("greeting").style.color = mycolors[Math.floor(Math.random() * Math.floor(5))];
}