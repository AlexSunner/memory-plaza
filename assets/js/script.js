let flippedCards = [];

/*
* Checks if the card is already flipped
*/
function flipCard(card) {
    if (card.classList.contains('flipped') || flippedCards.length === 2) {
        return;
    }
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkForMatch, 1000);
    }
}

/*
* Checks if the cards match
*/
function checkForMatch() {
    let [card1, card2] = flippedCards;
    if (card1.textContent === card2.textContent) {
        console.log('Match!');
        alert(`That's right! You won!`);
        throw(`That's right! You won!`);
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    flippedCards = [];
}

/*
* Card icon mechanism
*/
