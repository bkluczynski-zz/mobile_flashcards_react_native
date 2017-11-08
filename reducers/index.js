import { ADD_DECK } from '../actions'

function decks (state = {}, action){
  switch (action.type){
    case ADD_DECK :
    console.log(action)
    return {
      ...state,
      [action.title] : {
        ...state[action.title],
        "title": action.title
      }
    }
  }
}

export default decks;
