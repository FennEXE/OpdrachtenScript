//&#9898; white circle
//&#9899; black filled circle
//&#128993; yellow circle
//&#128994; green circle
//&#128309; blue circle
//&#128308; red circle
//&#128995; purple circle
//&#128992; orange circle
//
let gameCleared = 0;
let gameFailed = 0;
let colorButton
let rate_RValue;
let RValue = 0;
checkerleft1 = ["11", "12", "13", "14"];
checkerright1 = ["31", "32", "33", "34"];
testCircle1 = ["21", "22", "23", "24"];
crackedCode = ["Blocked", "Blocked", "Blocked", "Blocked"];

followupArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
let followupArrayNumber = 0;

//yellow, green, blue, red, purple, orange.
colorArray = ["&#128993;", "&#128994;", "&#128309;", "&#128308;", "&#128995;", "&#128992;"];

//Submitarray
submitArray = [];
codeArray = [];

//0 is red, 1 is white, 2 is black
let check;
checkerArray = ["&#128308;", "&#9898;", "&#9899;"];


let colorrandomtest;
function randomColor(){
    colorrandomtest = Math.floor(Math.random() * 6);
}

function submit(colorButton) 
{
    RValue;
    check1 = 1;
    document.getElementById(followupArray[followupArrayNumber] + testCircle1[RValue]).innerHTML = colorArray[colorButton];        
    document.getElementById(followupArray[followupArrayNumber] + checkerleft1[RValue]).innerHTML = colorArray[1];
    submitArray[RValue] = colorArray[colorButton];
    
    RValue++;
    if(RValue > 3)
    {            
        RValue = 0;
    }
    console.log(colorButton);    
}

//Checkerright loop
function checkerrightLoop() 
{
    for (i = 0; i < 4; i++)
    {
        if(submitArray[i] === codeArray[i])
        {
            document.getElementById(followupArray[followupArrayNumber] + checkerright1[i]).innerHTML = checkerArray[0];
            crackedCode[i] = "Cracked";
        }
        else if(submitArray[i] === codeArray[i+1] || submitArray[i] === codeArray[i-1] || submitArray[i] === codeArray[i+2] || submitArray[i] === codeArray[i-2] || submitArray[i] === codeArray[i+3] || submitArray[i] === codeArray[i-3] && submitArray[i] !== codeArray[i] )
        {
            document.getElementById(followupArray[followupArrayNumber] + checkerright1[i]).innerHTML = checkerArray[1];
        }
        else if(submitArray[i] !== codeArray[i])
        {
            crackedCode[i] = "Blocked";
        }
        else 
        {
            document.getElementById(followupArray[followupArrayNumber] + checkerright1[i]).innerHTML = checkerArray[2];
        }
    }
    if(crackedCode[0] === "Cracked" && crackedCode[1] === "Cracked" && crackedCode[2] === "Cracked" && crackedCode[3] === "Cracked" )
    {
        document.getElementById("locktext").innerHTML = "Unlocked";
        document.getElementById("locktext").style.color = "green";
        document.getElementById("Submit").innerHTML = "Restart";
        gameCleared = 1;
    }
}


//Secret Code
function newCode() {
    let color1;
    let color2;
    let color3;
    let color4;
    
    randomColor();
    color1 = colorArray[colorrandomtest];
    randomColor();
    color2 = colorArray[colorrandomtest];
    randomColor();
    color3 = colorArray[colorrandomtest];
    randomColor();
    color4 = colorArray[colorrandomtest];
    codeArray = [color1, color2, color3, color4];
    console.log(codeArray);
    console.log(`${codeArray[0]} ${codeArray[1]} ${codeArray[2]} ${codeArray[3]}`);
}

function submitCode()
{
    if(gameCleared === 1 || gameFailed === 1)
    {
        newCode();
        for (i = 0; i < 12; i++)
        {
            document.getElementById(followupArray[i] + testCircle1[0]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + testCircle1[1]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + testCircle1[2]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + testCircle1[3]).innerHTML = checkerArray[2];        
            document.getElementById(followupArray[i] + checkerleft1[0]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + checkerleft1[1]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + checkerleft1[2]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + checkerleft1[3]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + checkerright1[0]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + checkerright1[1]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + checkerright1[2]).innerHTML = checkerArray[2];
            document.getElementById(followupArray[i] + checkerright1[3]).innerHTML = checkerArray[2];
        }
        gameCleared = 0;
        gameFailed = 0;
        RValue = 0;
        followupArrayNumber=0;
        document.getElementById("locktext").innerHTML = "Locked";
        document.getElementById("locktext").style.color = "red";
        document.getElementById("Submit").innerHTML = "Submit";
    }
    else
    {
    checkerrightLoop();
    followupArrayNumber++;
    }
    if(followupArrayNumber>11)
    {
        followupArrayNumber=0;
        RValue = 0;
        gameFail();
    }
    if(RValue >! 3)
    {
        RValue = 0;
    }
}

function gameFail()
{
    if(crackedCode[0] === "Cracked" && crackedCode[1] === "Cracked" && crackedCode[2] === "Cracked" && crackedCode[3] === "Cracked" )
    {
        document.getElementById("locktext").innerHTML = "Unlocked";
        document.getElementById("locktext").style.color = "green";
        document.getElementById("Submit").innerHTML = "Restart";
        gameCleared = 1;
    }
    else if(crackedCode[0] === "Blocked" && crackedCode[1] === "Blocked" && crackedCode[2] === "Blocked" && crackedCode[3] === "Blocked")
    {
        document.getElementById("locktext").innerHTML = "Locked";
        document.getElementById("Submit").innerHTML = "Restart";
        gameFailed = 1;
    }
}

newCode();
document.getElementById("locktext").style.color = "red";