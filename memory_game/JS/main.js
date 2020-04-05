
const resetBtn = document.getElementById('reset');
const cards = [

{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},

{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},

{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},

{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}

];



let cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");

	}

	else{
		alert('Sorry, try again.')
	}
}

function flipCard(){
let cardId = this.getAttribute('data-id');
cardsInPlay.push(cards[cardId].rank);
this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
		checkForMatch()
     }

     // else if(cardsInPlay.length > 2){
     // 	resetBoard()
     // }


}

function createBoard(){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


function resetBoard(){
	for(let i = cardsInPlay.length; i > 0; i--){
		cardsInPlay.pop()
	}
	document.getElementById('game-board').innerHTML = "";
	createBoard();
}




reset.addEventListener('click', resetBoard);

createBoard()


