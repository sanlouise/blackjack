function handValue(hand) {

  let points = 0;

  hand.forEach(function(card){

    if (card === 'K' || card === 'Q' || card === 'J'){
      points = points + 10;
    }

    if (card != 'A' && card != 'K' && card != 'Q' && card != 'J'){
      points = points + +(card);
    }

    if (card === 'A'){
      points <= 11 ? points = points + 11 : points = points + 1;
    }

  })

  points > 21 ? points = points - 10 : points;

  return points;
}
