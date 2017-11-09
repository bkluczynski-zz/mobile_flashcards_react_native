import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'MobileFlashcards:deck'

export function saveDeckTitle(title){
    debugger;
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
     [title] : {
       'title' : title
     }
   }), () => {
     AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      console.log('results', results)
    })
  })
}
