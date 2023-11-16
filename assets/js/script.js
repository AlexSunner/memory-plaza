document.addEventListener('DOMContentLoaded', function () {

    let flippedCards = [];
    let moves = 0;

    function flipCard(card) {
        if (flippedCards.length === 2) {
            return;
        }

        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            moves++;
            setTimeout(checkForMatch, 1000);
        }
    }

    function checkForMatch() {
        let [card1, card2] = flippedCards;
        let icon1 = card1.querySelector('.card-icon').classList[1];
        let icon2 = card2.querySelector('.card-icon').classList[1];

        if (icon1 === icon2) {
            console.log('Match!');
            alert(`That's right! You won!`);
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
        updateMovesDisplay();
    }

    let icons = ['fa-heart', 'fa-star', 'fa-smile', 'fa-bolt', 'fa-flag', 'fa-moon'];
    let iconPairs = icons.concat(icons);
    shuffleArray(iconPairs);

    let cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        let iconClass = iconPairs[index];
        card.innerHTML = `<i class="card-icon fas ${iconClass}"></i>`;
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function updateMovesDisplay() {
        console.log(`Moves: ${moves}`);
    }

});