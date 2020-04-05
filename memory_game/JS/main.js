const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[1];
cardsInPlay.push(cardOne, cardTwo);
console.log("User flipped " + cardsInPlay[0])
console.log("User flipped " + cardsInPlay[1])

let h1 = document.querySelector('h1');




if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		h1.alert("You found a match!");
	}

	else{
		h1.alert('Sorry, try again.')
	}
}

else{
	console.log("choose another card you fuck stick!")
}