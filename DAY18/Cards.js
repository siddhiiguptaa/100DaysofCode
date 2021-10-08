// You get any card as an argument. Your task is to return a suit of this card.

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

function defineSuit(card) {     
  if (card.indexOf("♣") > 0)    return "clubs";
  if (card.indexOf("♠") > 0)    return "spades";
  if (card.indexOf("♦") > 0)    return "diamonds";
  if (card.indexOf("♥") > 0)    return "hearts";    
}
