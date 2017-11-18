import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const DECK_STORAGE_KEY = 'MobileFlashcards:deck'
const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

export function saveDeckTitle(title){
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
     [title] : {
       'title' : title,
       'questions' : [],
     }
   }), () => {
     AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      console.log('results', results)
    })
  })
}
export function getAllDecks(){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function addCard(title, card){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then((results) => {
    console.log(results)
    const data = JSON.parse(results)
    const questions = 'questions'
    console.log("card", card)
    data[title][questions].push(card)
    console.log("data", data)
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
  })
  }

export function clearLocalNotification (){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduleNotificationsAsync)
}

function createNotification (){
  return {
    title: 'Complete your quiz!',
    body: 'Do not forget to complete one of the quiz today!',
    ios: {
      sound: true,
    },
  }
}

export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduleNotificationsAsync();

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

            }
          })
      }
    })
}
