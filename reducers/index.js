import { ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action){
  switch (action.type){
    case ADD_DECK :
    console.log(action)
    return {
      ...state,
      [action.title] : {
        ...state[action.title],
        "title": action.title,
        "questions": []
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
  }
}

export default decks;
