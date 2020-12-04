//Dealer Hand Value and Table
let dealerHandValue = document.getElementById("dealerHandValue");
const dealerTable = document.getElementById("dealerTable");
const dealerRow = document.getElementById("dealerRows");
let dealerCellCount = 0;


//Player Hand Value and Table
let playerHandValue = document.getElementById("playerHandValue");
const playerTable = document.getElementById("playerTable");
const playerRow = document.getElementById("playerRows");
let playerCellCount = 0;
let playerWins = document.getElementById("wins");
let playerLosses = document.getElementById("losses");

//This will hold the card deck
cardArraySpades = ["&#127137;", "&#127138;", "&#127139;", "&#127140;", "&#127141;", "&#127142;", "&#127143;", "&#127144;", "&#127145;", "&#127146;", "&#127147;", "&#127149;", "&#127150;"];
cardArrayHearts = ["&#127153;", "&#127154;", "&#127155;", "&#127156;", "&#127157;", "&#127158;", "&#127159;", "&#127160;", "&#127161;", "&#127162;", "&#127163;", "&#127165;", "&#127166;"];
cardArrayDiamonds = ["&#127169;", "&#127170;", "&#127171;", "&#127172;", "&#127173;", "&#127174;", "&#127175;", "&#127176;", "&#127177;", "&#127178;", "&#127179;", "&#127181;", "&#127182;"];
cardArrayClubs = ["&#127185;", "&#127186;", "&#127187;", "&#127188;", "&#127189;", "&#127190;", "&#127191;", "&#127192;", "&#127193;", "&#127194;", "&#127195;", "&#127197;", "&#127198;"];
deckArray = [cardArraySpades, cardArrayHearts, cardArrayDiamonds, cardArrayClubs];

var cellArray = dealerRow.cells;
cellArray[0].innerHTML = "&#8199;";
cellArray[1].innerHTML = "&#8199;";
cellArray[2].innerHTML = "&#8199;";
cellArray[3].innerHTML = "&#8199;";
cellArray[4].innerHTML = "&#8199;";
cellArray[5].innerHTML = "&#8199;";
cellArray[6].innerHTML = "&#8199;";

var pCellArray = playerRow.cells;
pCellArray[0].innerHTML = "&#8199;";
pCellArray[1].innerHTML = "&#8199;";
pCellArray[2].innerHTML = "&#8199;";
pCellArray[3].innerHTML = "&#8199;";
pCellArray[4].innerHTML = "&#8199;";
pCellArray[5].innerHTML = "&#8199;";
pCellArray[6].innerHTML = "&#8199;";

function shuffle() {
    cellArray[1].innerHTML = "boi";
    cellArray[6].innerHTML = "boi";
}

//Sleep function to make dealer card drawing slower
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//Dealer hit script
async function dealerHit() {
    if (dealerHandValue.innerHTML === "21 - Dealer Wins") {
        clearDeck();
        hit();
    } else if (dealerHandValue.innerHTML === "21 - Dealer Wins") {
        clearDeck();
        hit();
    } else if (playerHandValue.innerHTML === "Dealer Wins") {
        clearDeck();
        hit();
    } else {
        if (dealerHandValue.innerHTML === "BUST") {
            clearDeck();
            hitPlayer();
        } else if (playerHandValue.innerHTML === "BUST") {
            clearDeck();
            hitPlayer();
        } else {
            cardDraw = Math.floor(Math.random() * 4);
            cardType = deckArray[cardDraw];
            cardValue = Math.floor(Math.random() * 13);

            if (dealerCellCount >6)
            {
                dealerCellCount = 0;
            }

            cellArray[dealerCellCount].innerHTML = `${cardType[cardValue]}`;

            if (cardValue === 0)
            {
                dealerHandValue.innerHTML = Number(dealerHandValue.innerHTML)+11;
                if(Number(dealerHandValue.innerHTML) >= 20)
                {
                    dealerHandValue.innerHTML = Number(dealerHandValue.innerHTML)-10;
                } 
                winConditionDealer();
            }
            if (cardValue >0 && cardValue <10)
            {
                dealerHandValue.innerHTML = Number(dealerHandValue.innerHTML)+cardValue+1;
                winConditionDealer();
            }
            if (cardValue >= 10)
            {
                dealerHandValue.innerHTML = Number(dealerHandValue.innerHTML)+10;
                winConditionDealer();
            }
            dealerCellCount = dealerCellCount+1;
            if (dealerHandValue.innerHTML >21)
            {
                dealerHandValue.innerHTML = "BUST";
                playerWins.innerHTML = Number(playerWins.innerHTML) + 1;
            }
            sleep(1000);
            if (Number(playerHandValue.innerHTML) >= Number(dealerHandValue)) {
                if (Number(dealerHandValue.innerHTML) >= Number(playerHandValue.innerHTML)) 
                {
                    dealerHandValue.innerHTML = "Dealer Wins";
                    playerLosses.innerHTML = Number(playerLosses.innerHTML) + 1;
                } 
                else if (Number(dealerHandValue.innerHTML) > 21) 
                {
                    dealerHandValue.innerHTML = "BUST";
                    playerWins.innerHTML = Number(playerWins.innerHTML) + 1; 
                }
                else 
                {
                    if (Number(dealerHandValue.innerHTML) >! Number(playerHandValue)){
                        await sleep(1000);
                        dealerHit();
                    }
                }
            }
        }
    }
}

//Player Deal script
function hitPlayer() {
    if (dealerHandValue.innerHTML === "21 - Dealer Wins") {
        clearDeck();
        hitPlayer();
    } else if (playerHandValue.innerHTML === "21 - Player Wins") {
        clearDeck();
        hit();
    } else if (dealerHandValue.innerHTML === "Dealer Wins") {
        clearDeck();
        hit();
    } else if (playerHandValue.innerHTML === "Player Wins") {
        clearDeck();
        hit();
    } else {
        if (dealerHandValue.innerHTML === "BUST") {
            clearDeck();
            hitPlayer();
        } else if (playerHandValue.innerHTML === "BUST") {
            clearDeck();
            hitPlayer();
        } else {
            cardDraw = Math.floor(Math.random() * 4);
            cardType = deckArray[cardDraw];
            cardValue = Math.floor(Math.random() * 13);

            if (playerCellCount >6)
            {
                playerCellCount = 0;
            }

            pCellArray[playerCellCount].innerHTML = `${cardType[cardValue]}`;

            if (cardValue === 0)
            {
                playerHandValue.innerHTML = Number(playerHandValue.innerHTML)+11;
                if(Number(playerHandValue.innerHTML) >= 20)
                {
                    playerHandValue.innerHTML = Number(playerHandValue.innerHTML)-10;
                } 
                winConditionPlayer();
            }
            if (cardValue >0 && cardValue <10)
            {
                playerHandValue.innerHTML = Number(playerHandValue.innerHTML)+cardValue+1;
                winConditionPlayer();
            }
            if (cardValue >= 10)
            {
                playerHandValue.innerHTML = Number(playerHandValue.innerHTML)+10;
                winConditionPlayer();
            }
            playerCellCount = playerCellCount+1;
            if (playerHandValue.innerHTML >21)
            {
                playerHandValue.innerHTML = "BUST";
                playerLosses.innerHTML = Number(playerLosses.innerHTML) + 1;
            }
        }
    }
}

//Clears the table of cards and resets count
function clearDeck() {
    for (i = 0; i < 6; i++){
        cellArray[i].innerHTML = "&#8199";
        pCellArray[i].innerHTML = "&#8199";
    }
    dealerCellCount = 0;
    playerCellCount = 0;
    dealerHandValue.innerHTML = 0;
    playerHandValue.innerHTML = 0;
}

//Triggered after every draw from the dealer
function winConditionDealer() {
    if (Number(dealerHandValue.innerHTML) === 21)
    {
        dealerHandValue.innerHTML = "21 - Dealer Wins";
        playerLosses.innerHTML = Number(playerLosses.innerHTML) + 1;
    }
}

//Triggered after every draw from the player
function winConditionPlayer() {
    if (Number(playerHandValue.innerHTML) === 21)
    {
        playerHandValue.innerHTML = "21 - Player Wins";
        playerWins.innerHTML = Number(playerWins.innerHTML) + 1;
    }
}