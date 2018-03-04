function printDeckOfCards(cards) {
    let deck = [];
    for (let cardStr of cards) {
        let face = cardStr.substring(0, cardStr.length - 1);
        let suit = cardStr.substr(cardStr.length - 1, 1);
        try {
            deck.push(makeCard(face, suit));
        }
        catch (err) {
            console.log("Invalid card: " + cardStr);
            return;
        }
    }
    console.log(deck.join(' '));
}
printDeckOfCards(['5S', '3D', 'QD', '1C']);
printDeckOfCards(['AS', '10D', 'KH', '2C']);