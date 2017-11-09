import { ADD_DECK, ADD_CARD, RECEIVE_DECKS } from '../actions'

function decks (state = {}, action){
  switch (action.type){
    case ADD_DECK :
    console.log(action)
    return {
      ...state,
      [action.title] : {
        ...state[action.title],
        title : action.title,
        questions : []
      }
    }
    case ADD_CARD :
    console.log(action)
    return {
      ...state,
      [action.title] : {
        ...state[action.title],
        questions : state[action.title].questions.concat(action.card)
      }
    }
    case RECEIVE_DECKS :
    console.log(action)
    return {
      ...state,
      ...action.decks,
    }
  }
}

export default decks;
