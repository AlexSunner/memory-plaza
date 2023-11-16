document.addEventListener('DOMContentLoaded', function () {

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
            throw (`That's right! You won!`);
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
    }

    /*
    * Array of icons used as memory card symbols
    * Duplicate the icons in order to create pairs for the game
    * A shuffle function to randomize the array
    */
    let icons = ['fa-heart', 'fa-star', 'fa-smile', 'fa-bolt', 'fa-flag', 'fa-moon'];

    let iconPairs = icons.concat(icons);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(iconPairs);

    let cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        let iconClass = iconPairs[index];
        card.innerHTML = `<i class="card-icon fas ${iconClass}"></i>`;
    });

})
