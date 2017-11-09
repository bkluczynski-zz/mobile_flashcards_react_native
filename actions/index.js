export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export function addDeck(title){
  return {
    type: ADD_DECK,
    title,
  }
}

export function addCardToDeck(title,card){
  return {
    type: ADD_CARD,
    title,
    card,
  }
}

export function receiveAllDecks(decks){
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
