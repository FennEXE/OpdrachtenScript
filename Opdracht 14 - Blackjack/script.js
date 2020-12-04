//Italian Cuisine made on 4-12-2020 by Luuk Nagtegaal

//Dealer hand value, score and table cells
let dealerHandValue = document.getElementById("dealerHandValue");
const dealerTable = document.getElementById("dealerTable");
const dealerRow = document.getElementById("dealerRows");
let dealerCellCount = 0;
let dealerScore = 0;

//Dealer draws cards at this pace, prevents it from being instant, adjust number as fit.
let dealerPace = 650;

//Player hand value, score and table cells
let playerHandValue = document.getElementById("playerHandValue");;
const playerTable = document.getElementById("playerTable");
const playerRow = document.getElementById("playerRows");
let playerCellCount = 0;
let playerScore = 0;

//Buttons for Hold and Hit respectively. Allows them to be changed into clear or start buttons
let passButton = document.getElementById("resolve");
let dealButton = document.getElementById("act");

//Gamestate tells the script when a game is concluded, allowing the next draw to be two cards
let gameState = 1;

//Counts wins and losses for the scoreboard as well as display them via HTML
let pWins = 0;
let pLoss = 0;
let playerWins = document.getElementById("wins");
let playerLosses = document.getElementById("losses");

//This will hold the card deck, each card is a unicode as well as a value for the scoreboard.
cardArraySpades = ["&#127137;", "&#127138;", "&#127139;", "&#127140;", "&#127141;", "&#127142;", "&#127143;", "&#127144;", "&#127145;", "&#127146;", "&#127147;", "&#127149;", "&#127150;"];
cardArrayHearts = ["&#127153;", "&#127154;", "&#127155;", "&#127156;", "&#127157;", "&#127158;", "&#127159;", "&#127160;", "&#127161;", "&#127162;", "&#127163;", "&#127165;", "&#127166;"];
cardArrayDiamonds = ["&#127169;", "&#127170;", "&#127171;", "&#127172;", "&#127173;", "&#127174;", "&#127175;", "&#127176;", "&#127177;", "&#127178;", "&#127179;", "&#127181;", "&#127182;"];
cardArrayClubs = ["&#127185;", "&#127186;", "&#127187;", "&#127188;", "&#127189;", "&#127190;", "&#127191;", "&#127192;", "&#127193;", "&#127194;", "&#127195;", "&#127197;", "&#127198;"];
deckArray = [cardArraySpades, cardArrayHearts, cardArrayDiamonds, cardArrayClubs];

//Ace tokens, +1 when either player or dealer gets an ace
//When either goes over 21 and has an ace, it consumes the token and reduces the ace's value by 10
let dealerAceCount = 0;
let playerAceCount = 0;

//These are the table cells for cards
var cellArray = dealerRow.cells;
var pCellArray = playerRow.cells;

//Sleep function to make dealer card drawing slower
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Dealer hit script, this is essentially the dealer's "AI" that is triggered when the player holds
async function dealerHit() 
{

    //Checks if the gamestate is concluded. If the gamestate is concluded it clears the board and draws two cards.
    if (gameState != 0) 
    {
        clearDeck();
        shuffle();
        dealButton.innerHTML = "Hit";
        passButton.innerHTML = "Hold";
        gameState = 0;
    } else {

        //This draws a random card from the Unicode Array, and uses cardType as a string to display the right card
        cardDraw = Math.floor(Math.random() * 4);
        cardType = deckArray[cardDraw];
        cardValue = Math.floor(Math.random() * 13);

        //Selects the cells in the table, if the cells are higher than the 7th cell it will start back at 1.
        //Picked 7 cells since blackjack VERY rarely goes over 7 cards.
        if (dealerCellCount >6)
        {
            dealerCellCount = 0;
        }

        //Displays the Unicode card in the cell.
        cellArray[dealerCellCount].innerHTML = `${cardType[cardValue]}`;

		//If the card is an Ace, adds 11. If 11 puts you over 21, adds 1 instead.
		//If the card becomes 11, it also adds an ace token for later deduction
        if (cardValue === 0)
        {
            dealerScore = Number(dealerScore)+11;
            dealerHandValue.innerHTML = dealerScore; 
            dealerAceCount = dealerAceCount + 1;

            if(dealerScore > 21)
            {
                dealerScore = Number(dealerScore)-10;
                dealerHandValue.innerHTML = dealerScore; 
                dealerAceCount = dealerAceCount - 1;
            }

            //Checks if the dealer has 21 
            winConditionDealer();
        }

        //Cards with value from 2 to 10
        if (cardValue >0 && cardValue <10)
        {
            dealerScore = Number(dealerScore)+cardValue+1
            dealerHandValue.innerHTML = dealerScore; 
            winConditionDealer();
        }

        //Jacks, queens and kings all have a value of 10
        if (cardValue >= 10)
        {
            dealerScore = Number(dealerScore)+10;
            dealerHandValue.innerHTML = dealerScore; 
            winConditionDealer();
        }

        //Progresses the cell counts for the table, allowing it to pick the next cell.
        dealerCellCount = dealerCellCount+1;

        //Sleep makes sure that the cards come one at a time instead of all at once
        sleep(dealerPace);

        //If the dealer has a lower score than the player he is forced to keep drawing cards
        //Dealer wins if he has a higher score than the player
        if (Number(dealerScore) >= Number(playerScore) && Number(dealerScore) <= 21) 
        {
            dealerHandValue.innerHTML = "Dealer Wins";
            pLoss = pLoss + 1;
        	playerLosses.innerHTML = pLoss;
            gameState = 1;
            dealButton.innerHTML = "Clear";
            passButton.innerHTML = "Clear";
            playerScore = 0;
            dealerScore = 0;
        }

        //If the dealer has no aces, he will bust when going over 21. 
        else if (Number(dealerScore) > 21 && dealerAceCount < 1) 
        {
            dealerHandValue.innerHTML = "BUST";
            pWins = pWins + 1;
        	playerWins.innerHTML = pWins;
            gameState = 1; 
            dealButton.innerHTML = "Clear";
            passButton.innerHTML = "Clear";
            playerScore = 0;
            dealerScore = 0;
        }

        //If the dealer has aces, the ace will be reduced to a value of 1, taking away one ace token.
        else if (Number(dealerScore) > 21 && dealerAceCount > 0)
        {
            dealerScore = Number(dealerScore)-10;
            dealerHandValue.innerHTML = dealerScore; 
            dealerAceCount = dealerAceCount - 1;
        }

        //If no conditions are met, the dealer will draw and sleep.
        else 
        {
            if (Number(dealerScore) >! Number(playerScore) && Number(dealerScore) < 21)
            {
                //Waits until the sleep timer has passed before hitting.
                await sleep(dealerPace);                        
        	    dealerHit();
            }
        }
    }
}

//Player Deal script, this function handles all the card draws for the player.
function hitPlayer() 
{

    //Checks if the gamestate is concluded. If the gamestate is concluded it clears the board and draws two cards.
    if (gameState != 0) 
    {
        clearDeck();
        dealButton.innerHTML = "Hit";
        passButton.innerHTML = "Hold";
        gameState = 0;
        shuffle();
    } 
    else 
    {

        //This draws a random card from the Unicode Array, and uses cardType as a string to display the right card
        cardDraw = Math.floor(Math.random() * 4);
        cardType = deckArray[cardDraw];
        cardValue = Math.floor(Math.random() * 13);

        //Selects the cells in the table, if the cells are higher than the 7th cell it will start back at 1.
        //Picked 7 cells since blackjack VERY rarely goes over 7 cards.
        if (playerCellCount >6)
        {
            playerCellCount = 0;
        }

        //Displays the Unicode card in the cell.
        pCellArray[playerCellCount].innerHTML = `${cardType[cardValue]}`;

		//If the card is an Ace, adds 11. If 11 puts you over 21, adds 1 instead.
		//If the card becomes 11, it also adds an ace token for later deduction
        if (cardValue === 0)
        {
            playerScore = Number(playerScore) + 11;
            playerHandValue.innerHTML = playerScore;
            playerAceCount = playerAceCount + 1;
            if(playerHandValue.innerHTML > 21)
            {
                playerScore = Number(playerScore) - 10;
                playerHandValue.innerHTML = playerScore;
                playerAceCount = playerAceCount - 1;
            }

            //Checks if the score is 21. 
            winConditionPlayer();
        }

        //Cards with value from 2 to 10
        if (cardValue >0 && cardValue <10)
        {
            playerScore = Number(playerScore) + cardValue + 1;
            playerHandValue.innerHTML = playerScore;
            winConditionPlayer();
        }

        //Jacks, queens and kings all have a value of 10
        if (cardValue >= 10)
        {
            playerScore = Number(playerScore) + 10;
            playerHandValue.innerHTML = playerScore;
            winConditionPlayer();
        }

        //Progresses the cell counts for the table, allowing it to pick the next cell.
        playerCellCount = playerCellCount + 1;
        
        //Puts the player at BUST if the player is over 21 and hasn't drawn a single ace.
        if (playerScore >21 && playerAceCount < 1)
        {
            playerHandValue.innerHTML = "BUST";
            pLoss = pLoss + 1;
            playerLosses.innerHTML = pLoss;
            playerScore = 0;
            dealerScore = 0;
            dealerCellCount = 0;
            playerCellCount = 0;
            playerAceCount = 0;
            dealerAceCount = 0;
            gameState = 1;
            dealButton.innerHTML = "Clear";
            passButton.innerHTML = "Clear";
            playerScore = 0;
            dealerScore = 0;
        }

        //If the player has at least one ace however, it deducts 10 to put the ace value at 1.
        else if (Number(playerScore) > 21 && playerAceCount > 0)
        {
            playerScore = Number(playerScore) - 10;
            playerHandValue.innerHTML = playerScore;
            playerAceCount = playerAceCount - 1;
        }
    }
}

//Clears the table of cards and resets counters 
//gameState being 1 ensures the first draw is always two cards
function clearDeck() 
{
    for (i = 0; i < 7; i++){
        cellArray[i].innerHTML = "&#8199";
        pCellArray[i].innerHTML = "&#8199";
    }
    dealerCellCount = 0;
    playerCellCount = 0;
    dealerHandValue.innerHTML = 0;
    playerHandValue.innerHTML = 0;
    playerAceCount = 0;
    dealerAceCount = 0;
    gameState = 1;
}

//Triggered after every draw from the dealer, checks if the dealer has a score of 21 and thus wins
function winConditionDealer() 
{
    if (Number(dealerScore) === 21)
    {
        dealerHandValue.innerHTML = "21 - Dealer Wins";
        pLoss = pLoss + 1;
        playerLosses.innerHTML = pLoss;
        gameState = 1;
        dealButton.innerHTML = "Clear";
        passButton.innerHTML = "Clear";
        playerScore = 0;
        dealerScore = 0;
    }
}

//Triggered after every draw from the playerm checks if the player has a score of 21 and thus wins
function winConditionPlayer() 
{
    if (Number(playerScore) === 21)
    {
        playerHandValue.innerHTML = "21 - Player Wins";
        pWins = pWins + 1;
        playerWins.innerHTML = pWins;
        gameState = 1;
        dealButton.innerHTML = "Clear";
        passButton.innerHTML = "Clear";
        playerScore = 0;
        dealerScore = 0;
    }
}

//Shuffle clears the deck and gives the player two cards, essentially resetting the board.
function shuffle() 
{
    clearDeck()
        playerScore = 0;
        dealerScore = 0;
        gameState = 0;
        for (i = 0; i < 2 ; i++)
        {
            hitPlayer();
        }
}

//This function clears the board AND the score, essentially resetting the game.
function clearScore() 
{
    playerWins.innerHTML = 0;
    playerLosses.innerHTML = 0;
    clearDeck();
    pLoss = 0;
    pWins = 0;
    playerAceCount = 0;
    dealerAceCount = 0;
    gameState = 1;
}